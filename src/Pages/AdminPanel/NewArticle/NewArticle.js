// import React, { useEffect, useState } from "react";
// import Button from "../../../Components/Form/Button";
// import "./NewArticle.css";
// import Modal from "react-bootstrap/Modal";
// import ModalDialog from "react-bootstrap/esm/ModalDialog";
// import ModalHeader from "react-bootstrap/esm/ModalHeader";
// import Input from "../../../Components/Form/Input";
// import { useForm } from "../../../hooks/useForm";
// import { minValidator } from "../../../Components/Validators/rules";
// import apiRequests from "../../../Servicse/Axios/configs";
// import Editor from "../../../Components/Form/Editor";
// import swal from "sweetalert";

// export default function NewArticle({
//   getAllArticles,
//   onHide,
//   onShow,
//   createArticle,
//   showModalnewArticle,
// }) {
//   const [allCategories, setAllCategories] = useState([]);
//   const [allArticle, setAllArticle] = useState([]);
//   const [articleCategory, setArticleCategory] = useState("-1");
//   const [articleCover, setArticleCover] = useState("-1");
//   const [articleBody, setArticleBody] = useState("");

//   const [formState, onInputHandler] = useForm(
//     {
//       cover: {
//         value: "",
//         isValid: false,
//       },
//       title: {
//         value: "",
//         isValid: false,
//       },
//       description: {
//         value: "",
//         isValid: false,
//       },
//       body: {
//         value: "",
//         isValid: false,
//       },
//       shortName: {
//         value: "",
//         isValid: false,
//       },
//       categoryID: {
//         value: "",
//         isValid: false,
//       },
//     },
//     false
//   );

//   useEffect(() => {
//     getAllArticles();
//     apiRequests(`category`).then((data) => setAllCategories(data));
//   }, []);

//   function getAllArticles() {
//     apiRequests(`articles`).then((data) => setAllArticle(data));
//   }
//   const createNewArticle = (event) => {
//     event.preventDefault();
//     const localStorageDate = JSON.parse(localStorage.getItem("user"));
//     let formData = new FormData();
//     formData.append("title", formState.inputs.title.value);
//     formData.append("shortName", formState.inputs.shortName.value);
//     formData.append("description", formState.inputs.description.value);
//     formData.append("categoryID", articleCategory);
//     formData.append("cover", articleCover);
//     formData.append("body", articleBody);

//     fetch(`http://localhost:4000/v1/articles`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${localStorageDate.token}`,
//       },
//       body: formData,
//     }).then((res) => {
//       if (res.ok) {
//         swal({
//           title: "مقاله جدید با موفقیت ایجاد شد",
//           icon: "success",
//           buttons: "اوکی",
//         }).then(() => {
//           getAllArticles();
//         });
//       }
//     });
//   };
//   return (
//     <>
//       <div className="newbutton">
//         <Button className="new-form__btn" type="submit" onClick={onShow}>
//           افزودن مقاله
//         </Button>
//       </div>
//       <div>
//         <Modal show={showModalnewArticle} onHide={onHide} size="lg">
//           <ModalDialog>
//             <ModalHeader>افزودن مقاله جدید</ModalHeader>
//             <Modal.Body>
//               <form class="form">
//                 <div class="col-6">
//                   <div class="name input">
//                     <label class="input-title" style={{ display: "block" }}>
//                       عنوان
//                     </label>
//                     <Input
//                       element="input"
//                       type="text"
//                       id="title"
//                       onInputHandler={onInputHandler}
//                       validations={[minValidator(8)]}
//                     />
//                     <span class="error-message text-danger"></span>
//                   </div>
//                 </div>
//                 <div class="col-6">
//                   <div class="name input">
//                     <label class="input-title" style={{ display: "block" }}>
//                       لینک
//                     </label>
//                     <Input
//                       element="input"
//                       type="text"
//                       id="shortName"
//                       onInputHandler={onInputHandler}
//                       validations={[minValidator(5)]}
//                     />
//                     <span class="error-message text-danger"></span>
//                   </div>
//                 </div>
//                 <div class="col-12">
//                   <div class="name input">
//                     <label class="input-title" style={{ display: "block" }}>
//                       چکیده
//                     </label>
//                     <Input
//                       element="textarea"
//                       type="text"
//                       id="description"
//                       onInputHandler={onInputHandler}
//                       validations={[minValidator(5)]}
//                       className="article-textarea"
//                     />
//                     <span class="error-message text-danger"></span>
//                   </div>
//                 </div>
//                 <div class="col-12">
//                   <div class="name input">
//                     <label class="input-title" style={{ display: "block" }}>
//                       محتوا
//                     </label>
//                     <Editor value={articleBody} setValue={setArticleBody} />
//                     <span class="error-message text-danger"></span>
//                   </div>
//                 </div>
//                 <div class="col-6">
//                   <div class="name input">
//                     <label class="input-title" style={{ display: "block" }}>
//                       کاور
//                     </label>
//                     <input
//                       type="file"
//                       onChange={(event) => {
//                         setArticleCover(event.target.files[0]);
//                       }}
//                     />
//                     <span class="error-message text-danger"></span>
//                   </div>
//                 </div>
//                 <div class="col-6">
//                   <div class="name input">
//                     <label class="input-title" style={{ display: "block" }}>
//                       دسته بندی
//                     </label>
//                     <select
//                       onChange={(event) =>
//                         setArticleCategory(event.target.value)
//                       }
//                     >
//                       <option value="-1">
//                         دسته بندی مقاله را انتخاب کنید،
//                       </option>
//                       {allCategories.map((category) => (
//                         <option value={category._id}>{category.title}</option>
//                       ))}
//                     </select>
//                     <span class="error-message text-danger"></span>
//                   </div>
//                 </div>
//                 <div class="col-12">
//                   <div class="bottom-form">
//                     <div class="submit-btn"></div>
//                   </div>
//                 </div>
//               </form>
//             </Modal.Body>
//             <div class="submit-btn ">
//               <input type="submit" value="افزودن" onClick={createArticle} />
//             </div>
//             {/* <button
//               type="submit"
//               size="lg"
//               value="افزودن"
//               onClick={onShow}
//               className="btn btn-primary"
//             >
//               save
//             </button> */}
//           </ModalDialog>
//         </Modal>
//       </div>
//     </>
//   );
// }
