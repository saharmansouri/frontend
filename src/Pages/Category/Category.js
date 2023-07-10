import React, { useState, useEffect } from "react";
import "./Category.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import apiRequests from "../../Servicse/Axios/configs";

export default function Category() {
  const [courses, setCourses] = useState([]);
  const { categoryName } = useParams();
  const [shownCourses,setShownCourses]=useState([])

  useEffect(() => {
    apiRequests(`courses/category/${categoryName}`).then((data) => {
      console.log("daaate", data);
      setCourses(data);
    });
  }, [categoryName]);

  // useEffect(()=>{
  //   console.log('test')
  //   fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
  //   .then((res)=>res.json())
  //   .then((allCourses)=>{
  //     console.log(allCourses)
  //     setCourses(allCourses)
  //   })
  // },[categoryName])

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="courses">
        <div className="container">
          <Breadcrumb
            links={[
              { id: 1, title: "خانه", to: "" },
              {
                id: 2,
                title: "اموزش برنامه نویسی فرانت اند",
                to: "/course-info/${`props.shortName`}",
              },
            ]}
          />
          <div className="courses-content">
            <div className="container">
              {courses.length !== 0 ? (
                <>
                  <div className="courses-top-bar">
                    <div className="courses-top-bar__right">
                      <div className="courses-top-bar__row-btn courses-top-bar__icon--active">
                        <i className="fas fa-border-all courses-top-bar__icon"></i>
                      </div>
                      <div className="courses-top-bar__column-btn">
                        <i className="fas fa-align-left courses-top-bar__icon"></i>
                      </div>

                      <div className="courses-top-bar__selection">
                        <span className="courses-top-bar__selection-title">
                          مرتب سازی پیش فرض
                          <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                        </span>
                        <ul className="courses-top-bar__selection-list">
                          <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active">
                            مرتب سازی پیش فرض
                          </li>
                          <li className="courses-top-bar__selection-item">
                            مرتب سازی بر اساس محبوبیت
                          </li>
                          <li className="courses-top-bar__selection-item">
                            مرتب سازی بر اساس امتیاز
                          </li>
                          <li className="courses-top-bar__selection-item">
                            مرتب سازی بر اساس آخرین
                          </li>
                          <li className="courses-top-bar__selection-item">
                            مرتب سازی بر اساس ارزان ترین
                          </li>
                          <li className="courses-top-bar__selection-item">
                            مرتب سازی بر اساس گران ترین
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="courses-top-bar__left">
                      <form action="#" className="courses-top-bar__form">
                        <input
                          type="text"
                          className="courses-top-bar__input"
                          placeholder="جستجوی دوره ..."
                        />
                        <i className="fas fa-search courses-top-bar__search-icon"></i>
                      </form>
                    </div>
                  </div>
                  <div className="row">
                    {shownCourses.map((course) => (
                      <CourseBox {...course} />
                    ))}
                  </div>
                  <Pagination
                    items={courses}
                    itemsCount={3}
                    pathname={`/category-info/${categoryName}`}
                    setShownCourses={setShownCourses}
                  />
                </>
              ) : (
                <div className="alert alert-warning ">
                  {" "}
                  در این دسته بندی دوره ای وجود ندارد.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
