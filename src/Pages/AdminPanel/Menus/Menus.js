import React, { useEffect, useState } from "react";
import apiRequests from "../../../Servicse/Axios/configs";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import swal from "sweetalert";
import Input from "../../../Components/Form/Input";
import { useForm } from "../../../hooks/useForm";
import {
  maxValidator,
  minValidator,
} from "../../../Components/Validators/rules";
import Button from "../../../Components/Form/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

export default function Menus() {
  const [allMenus, setAllMenus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [menuParent, setMenuParent] = useState("-1");

  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      href: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllMenues();
  }, []);

  function getAllMenues() {
    apiRequests(`menus/all`).then((menus) => {
      setAllMenus(menus);
    });
  }

  const removeMenu = (menuId) => {
    console.log("menuId", menuId);
    swal({
      title: "عایا مطمعن هستید؟",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((result) => {
      console.log("result", result);
      if (result) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:4000/v1/menus/${menuId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          console.log("res", res);
          if (res.ok) {
            swal({
              title: "منو مورد نظر با موفقیت حذف شد",
              icon: "success",
              button: "تایید",
            }).then(() => {
              getAllMenues();
            });
          }
        });
      }
    });
  };
  const showWindowNewMenu = () => {
    setShowModal(!showModal);
  };
  const createMenu = (event) => {
    event.preventDefault();
    const newMenu = {
      title: formState.inputs.title.value,
      href: formState.inputs.href.value,
    };
    fetch(`http://localhost:4000/v1/menus`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        } `,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenu),
    }).then((res) => {
        swal({
          title: "منو جدید اضافه شد",
          icon: "success",
          button: "ok",
        }).then((result) => {
          getAllMenues();
          setShowModal(false);
        });
      });
  };
  return (
    <>
      <div class="container-fluid">
        <div className="containar">
          <DataTable title="منو ها">
            <div className="newbutton">
              <Button
                className="new-form__btn p-4 mb-4"
                type="submit"
                onClick={showWindowNewMenu}
              >
                افزودن منو
              </Button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>ردیف </th>
                  <th>نام منو</th>
                  <th>لینک منو</th>
                  <th> فرزند...</th>
                  <th>ویرایش</th>
                  <th>حذف</th>
                </tr>
              </thead>
              <tbody>
                {allMenus.map((menu, index) => (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{menu.title}</td>
                      <td>{menu.href}</td>
                      <td>
                        {menu.parent ? (
                          menu.parent?.title
                        ) : (
                          <i className="fa fa-check"></i>
                        )}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary edit-btn"
                        >
                          ویرایش
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger edit-btn"
                          onClick={() => removeMenu(menu._id)}
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
          <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
            <ModalHeader>افزودن منو جدید </ModalHeader>
            <Modal.Body>
              <form className="form">
                <div className="col-3">
                  <div className="name input">
                    <label className="input-title">عنوان</label>
                    <Input
                      element="input"
                      id="title"
                      name="عنوان"
                      onInputHandler={onInputHandler}
                      validations={[minValidator(5)]}
                    />
                    <span className="error-message text-danger"></span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="name input">
                    <label className="input-title">لینک</label>
                    <Input
                      element="input"
                      id="href"
                      name="لینک"
                      onInputHandler={onInputHandler}
                      validations={[minValidator(5)]}
                    />
                    <span className="error-message text-danger"></span>
                  </div>
                </div>
                {/* <div className="col-6">
                  <div className="name input">
                    <label className="input-title">منو اصلی</label>

                    <select
                      onChange={(event) => setMenuParent(event.target.value)}
                    >
                      <option value="-1">لطفا منو اصلی را انتخاب کنید.</option>
                      {allMenus.map((menu) => (
                        <>
                          {!Boolean(menu.parent) && (
                            <option value={menu._id}>{menu.title}</option>
                          )}
                        </>
                      ))}
                    </select>
                    <span className="error-message text-danger"></span>
                  </div>
                </div> */}
              </form>
              <div class="submit-btn">
                <input type="submit" value="افزودن" onClick={createMenu} />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}
