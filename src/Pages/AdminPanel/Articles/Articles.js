import React, { useEffect, useState } from "react";
import apiRequests from "../../../Servicse/Axios/configs";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import swal from "sweetalert";
import { useForm } from "../../../hooks/useForm";
import "./Articles.css";
import NewArticle from "../NewArticle/NewArticle";
function Articles() {
  const [allArticle, setAllArticle] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const [showModalnewArticle, setshowModalNewArticle] = useState(false);

  const [formState, onInputHandler] = useForm(
    {
      cover: {
        value: "",
        isValid: false,
      },
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      body: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      categoryID: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  useEffect(() => {
    getAllArticles();
    apiRequests(`category`).then((categories) => {
      setAllCategories(categories);
    });
  }, []);
  const onShow = () => {
    setshowModalNewArticle(true);
  };

  const onHide = () => {
    setshowModalNewArticle(false);
  };
  
  function getAllArticles() {
    apiRequests(`articles`).then((data) => {
      console.log("data", data);
      setAllArticle(data);
    });
  }
  const removeArticle = (articleId) => {
    swal({
      title: "ایا میخواهید این مقاله را حذف کنید؟",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((res) => {
      if (res) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:4000/v1/articles/${articleId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorageData?.token}` },
        })
          .then((res) => {
            if (res.ok) {
              swal({
                text: "عملیات حذف با موفقیت انجام شد ",
                icon: "success",
                button: "تایید",
              });
            }
          })
          .then(() => {
            getAllArticles();
          });
      }
    });
  };

  const createArticle =(event)=>{
    event.preventDefault()
    console.log('new Article')

  }
  return (
    <>
      <div class="container-fluid" id="home-content">
        <div class="container">
          <div class="home-title">
            <span>
              <NewArticle
                getAllArticles={getAllArticles}
                onHide={onHide}
                onShow={onShow}
                showModalnewArticle={showModalnewArticle}
                createArticle={createArticle}
              />
            </span>
          </div>
          {/* <form class="form">
            <div class="col-6">
              <div class="name input">
                <label class="input-title" style={{ display: "block" }}>
                  عنوان
                </label>
                <Input
                  element="input"
                  type="text"
                  id="title"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(8)]}
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="name input">
                <label class="input-title" style={{ display: "block" }}>
                  لینک
                </label>
                <Input
                  element="input"
                  type="text"
                  id="shortName"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-12">
              <div class="name input">
                <label class="input-title" style={{ display: "block" }}>
                  چکیده
                </label>
                <Input
                  element="textarea"
                  type="text"
                  id="description"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  className="article-textarea"
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-12">
              <div class="name input">
                <label class="input-title" style={{ display: "block" }}>
                  محتوا
                </label>
                <Editor value={articleBody} setValue={setArticleBody} />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="name input">
                <label class="input-title" style={{ display: "block" }}>
                  کاور
                </label>
                <input
                  type="file"
                  onChange={(event) => {
                    setArticleCover(event.target.files[0]);
                  }}
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="name input">
                <label class="input-title" style={{ display: "block" }}>
                  دسته بندی
                </label>
                <select
                  onChange={(event) => setArticleCategory(event.target.value)}
                >
                  <option value="-1">دسته بندی مقاله را انتخاب کنید،</option>
                  {allCategories.map((category) => (
                    <option value={category._id}>{category.title}</option>
                  ))}
                </select>
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-12">
              <div class="bottom-form">
                <div class="submit-btn">
                  <input
                    type="submit"
                    value="افزودن"
                    onClick={createNewArticle}
                  />
                </div>
              </div>
            </div>
          </form> */}
        </div>
      </div>
      <DataTable title="مقاله ها">
        <table className="table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th> عنوان مقاله </th>
              <th>نام کاربری</th>
              <th>لینک اختصاصی </th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {allArticle.map((article, index) => (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{article.title}</td>
                  <td>{article.description}</td>
                  <td>{article.shortName}</td>
                  <td>
                    <button type="button" className="btn btn-primary edit-btn">
                      ویرایش
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger edit-btn"
                      onClick={() => removeArticle(article._id)}
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
    </>
  );
}

export default Articles;
