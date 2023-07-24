import React, { useEffect, useState } from "react";
import "./AllCourses.css";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import swal from "sweetalert";
import "./AllCourses.css";
import apiRequests from "../../../Servicse/Axios/configs";
import Category from "../Category/Category";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../Components/Form/Input";
import {
  maxValidator,
  minValidator,
  requiredValidator,
} from "../../../Components/Validators/rules";
import Button from "../../../Components/Form/Button";

export default function Courses() {
  const [allCourses, setAllCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statuseCourse, setStatuseCourse] = useState("start");
  const [coverCourse, setCoverCourse] = useState({});
  const [courseCategory, setCourseCategory] = useState("-1");
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  useEffect(() => {
    getAllCourses();
    getAllCategories();
  }, []);

  function getAllCategories() {
    apiRequests(`http://localhost:4000/v1/category`).then((allcategories) => {
      setCategories(allcategories);
    });
  }

  function getAllCourses() {
    const localStorageData = localStorage.getItem("user");
    fetch(`http://localhost:4000/v1/courses`, {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllCourses(data);
        console.log("data21", data);
      });
  }
  const editCourse = (coursId) => {
    //  const localStorageData=JSON.parse(localStorage.getItem('user'))
    //  fetch(``)
  };

  const deleteCourse = (coursId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "عایا از حذف این دوره مطمعن هستید؟",
      buttons: ["cancel", "ok"],
      icon: "error",
      dangerMode: true,
    }).then((res) => {
      if (res) {
        fetch(`http://localhost:4000/v1/courses/${coursId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          swal({
            title: "حذف",
            text: `با موفقیت حذف شد`,
            icon: "success",
            buttons: "ok",
          }).then(() => {
            getAllCourses();
          });
        });
      }
    });
  };

  const addCourse = (event) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    event.preventDefault();
    console.log("check", formState);
    let formData = new FormData();
    formData.append("name", formState.inputs.name.value);
    formData.append("description", formState.inputs.description.value);
    formData.append("shortName", formState.inputs.shortName.value);
    formData.append("categoryID", courseCategory);
    formData.append("price", formState.inputs.price.value);
    formData.append("status", statuseCourse);
    formData.append("cover", coverCourse);

    if (courseCategory === "-1") {
      swal({
        title: "لطفا دسته بندی مورد نظر خود را انتخاب کنید.",
        icon: "error",
      });
    } else {
      fetch(`http://localhost:4000/v1/courses`, {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorageData?.token}` },
        body: formData,
      }).then((res) => {
        if (res.ok) {
          swal({
            title: "دوره ایجاد شد",
            icon: "success",
            button: "تائید",
          }).then(() => {
            formState.inputs.name.value = "";
            formState.inputs.description.value = "";
            formState.inputs.shortName.value = "";
            setCoverCourse("");
            setCourseCategory("");
            setStatuseCourse("");
            getAllCourses();
          });
        }
      });
    }

    fetch(`http://localhost:4000/v1/courses`, {
      method: "POST",
      headers: { Authorization: `Bearer ${localStorageData?.token}` },
      body: formData,
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "دوره ایجاد شد",
          icon: "success",
          button: "تائید",
        }).then(() => {
          formState.inputs.name.value = "";
          formState.inputs.description.value = "";
          formState.inputs.shortName.value = "";
          setCoverCourse("");
          setCourseCategory("");
          setStatuseCourse("");
          getAllCourses();
        });
      }
    });
  };
  return (
    <div>
      <div class="container-fluid" id="home-content">
        <div class="container">
          <div class="home-title">
            <span>افزودن دوره جدید</span>
          </div>
          <form class="form">
            <div class="col-6">
              <div class="name input">
                <label class="input-title"> نام دوره</label>
                <Input
                  id="name"
                  element="input"
                  type="text"
                  validations={[
                    minValidator(5),
                    requiredValidator(),
                    maxValidator(20),
                  ]}
                  onInputHandler={onInputHandler}
                  placeholder="لطفا نام دوره را وارد کنید..."
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="price input">
                <label class="input-title">توضیحات مختصر </label>
                <Input
                  id="description"
                  element="input"
                  type="text"
                  onInputHandler={onInputHandler}
                  placeholder="لطفا متن مختصر محصول را وارد کنید..."
                  validations={[
                    minValidator(5),
                    maxValidator(30),
                    requiredValidator(),
                  ]}
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="number input">
                <label class="input-title">لینک دوره</label>
                <Input
                  id="shortName"
                  element="input"
                  type="text"
                  onInputHandler={onInputHandler}
                  placeholder="لطفا لینک محصول را وارد کنید..."
                  validations={[
                    minValidator(5),
                    maxValidator(20),
                    requiredValidator(),
                  ]}
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="price input">
                <label class="input-title">قیمت دوره</label>
                <Input
                  id="price"
                  element="input"
                  type="text"
                  onInputHandler={onInputHandler}
                  placeholder="لطفا قیمت محصول را وارد کنید..."
                  validations={[requiredValidator()]}
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="name input">
                <label class="input-title">کاور دوره</label>
                <input
                  type="file"
                  id="file"
                  onChange={(event) => {
                    console.log("event", event.target.files[0]);
                    setCoverCourse(event.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div class="col-6">
              <div class="number input">
                <label class="input-title" style={{ display: "block" }}>
                  دسته‌بندی دوره
                </label>
                <select
                  onChange={(event) => setCourseCategory(event.target.value)}
                >
                  <option value="-1">
                    لطفا دسته بندی دوره خود را انتخاب کنید.
                  </option>
                  {categories.map((Category) => (
                    <option key={Category._id} value={Category._id}>
                      {Category.name}
                    </option>
                  ))}
                </select>
                <span class="error-message text-danger"></span>
              </div>
            </div>

            <div class="col-12">
              <div class="bottom-form">
                <div class="condition">
                  <label class="input-title">وضعیت دوره</label>
                  <div class="radios">
                    <div class="available">
                      <label>
                        <span>در حال برگزاری</span>
                        <input
                          type="radio"
                          value="start"
                          name="condition"
                          checked
                          onInput={(event) =>
                            setStatuseCourse(event.target.value)
                          }
                        />
                      </label>
                    </div>
                    <div class="unavailable">
                      <label>
                        <span>پیش فروش</span>
                        <input
                          type="radio"
                          value="presell"
                          name="condition"
                          onInput={(event) =>
                            setStatuseCourse(event.target.value)
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div class="submit-btn ">
                  <input type="submit" value="افزودن" onClick={addCourse} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <DataTable title="دوره ها">
        <table className="table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام دوره</th>
              <th>توضیحات </th>
              <th>قیمت </th>
              <th>تعداد دانشجو</th>
              <th> وضعیت دوره </th>
              <th>ساپورت از طریق </th>
              <th> امتیاز دوره </th>
              <th> لینک </th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {allCourses.map((course, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  {course.price === 0
                    ? "رایگان"
                    : course.price.toLocaleString()}
                </td>
                <td>{course.registers}</td>
                <td>
                  {course.status === "start" ? "در حال برگزاری" : "تکمیل شده"}
                </td>
                <td>{course.support}</td>
                <td>{course.courseAverageScore}</td>
                <td>{course.shortName}</td>
                <td>
                  <button className="btn btn-primary" onClick={editCourse}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCourse(course._id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </div>
  );
}
