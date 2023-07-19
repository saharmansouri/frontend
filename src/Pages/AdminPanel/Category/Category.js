import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import apiRequests from "../../../Servicse/Axios/configs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Input from "../../../Components/Form/Input";
import { useForm } from "../../../hooks/useForm";
import {
  minValidator,
  requiredValidator,
  maxValidator,
} from "../../../Components/Validators/rules";
import swal from "sweetalert";
import "./Category.css";
import { json } from "react-router-dom";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [formeState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllCategories();
  }, []);

  function getAllCategories() {
    apiRequests(`category`).then((allCategory) => {
      setCategories(allCategory);
      console.log("allCategory", allCategory);
    });
  }
  const addNewCategory = (event) => {
    event.preventDefault();
    console.log("addNewCategory");
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const newCategory = {
      title: formeState.inputs.title?.value,
      name: formeState.inputs.name?.value,
    };
    fetch(`http://localhost:4000/v1/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => {
        res.json();
      })
      .then((result) => {
        console.log("result", result);
        swal({
          title: "موفق",
          text: "دسته بندی ایجاد شد",
          icon: "success",
          buttons: "OK",
        }).then(() => {
          setIsShowModal(false);
          getAllCategories();
        });
      });
  };

  const deleteCategory = (catId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "حذف",
      text: "عایا از حذف دسته بندی مطمعن هستید؟",
      buttons: ["No", "Ok"],
      icon: "warning",
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/category/${catId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        })
          .then((res) => {
            if (res.ok) {
              swal({
                title: "موفق",
                text: "دسته بندی موردنظر با موفقیت حذف شد",
                icon: "success",
                buttons: "ok",
              });
            }
          })
          .then(() => {
            setIsShowModal(false);
            getAllCategories();
          });
      }
    });
  };
  //باید دو تا اینپوت به سوییت الرت بدم تا این موضوع حل بشه بعدا انجام میدم
  const updateCategory = (catId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "عنوان جدید را وارد کنید",
      content: "input",
      buttons: "ذخیره",
    }).then((result) => {
      if (result.trim().length) {
        fetch(`http://localhost:4000/v1/category/${catId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorageData.token}`,
          },
          body: json.stringify({
            title: result,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("processs", result);
            swal({
              text: "با موفقیت انجام شد.",
              icon: "success",
              buttons: "ok",
            });
          })
          .then(() => {
            getAllCategories();
          });
      }
    });
  };

  return (
    <div>
      <Modal show={isShowModal} onHide={() => setIsShowModal(false)}>
        <Modal.Header>
          <Modal.Title>افزودن دسته بندی</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="#" className="login-form">
            <div className="login-form__username login-form__parent">
              <div className="input">
                <Input
                  onInputHandler={onInputHandler}
                  element="input"
                  id="title"
                  className="login-form__username-input"
                  type="text"
                  placeholder="نام دسته بندی "
                  validations={[
                    minValidator(5),
                    maxValidator(20),
                    requiredValidator(),
                  ]}
                />
              </div>
            </div>
            <div className="login-form__username login-form__parent">
              <Input
                onInputHandler={onInputHandler}
                element="input"
                id="name"
                className="login-form__username-input"
                type="text"
                placeholder="لینک دسته بندی "
                validations={[
                  minValidator(5),
                  maxValidator(20),
                  requiredValidator(),
                ]}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={addNewCategory}>
            ذخیره
          </Button>
          <Button variant="secondary" onClick={() => setIsShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <DataTable title="دسته بندی ها">
        <div className="addCategory">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsShowModal(true)}
          >
            افزودن دسته بندی{" "}
          </Button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام دسته بندی</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <button
                      type="button"
                      variant="primary"
                      className="btn btn-primary"
                      onClick={() => updateCategory(category._id)}
                    >
                      ویرایش
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCategory(category._id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </DataTable>
    </div>
  );
}
