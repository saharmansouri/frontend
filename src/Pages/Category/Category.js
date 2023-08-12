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
  const [shownCourses, setShownCourses] = useState([]);
  const [orderdCourses, setOrderdCourses] = useState([]);
  const [status, setStatus] = useState("defult");
  const [courseTitle, setCourseTitle] = useState("مرتب سازی بر اساس پیش فرض");
  const [searchValue, setSerchValue] = useState("");
  const [courseDisplayType, setCourseDisplayType] = useState("row");

  useEffect(() => {
    apiRequests(`courses/category/${categoryName}`).then((data) => {
      setCourses(data);
      setOrderdCourses(data);
    });
  }, [categoryName]);

  useEffect(() => {
    switch (status) {
      case "free": {
        const freeCourses = courses.filter((course) => course.price === 0);
        setOrderdCourses(freeCourses);
        break;
      }
      case "money": {
        const notFreeCourses = courses.filter((course) => course.price !== 0);
        setOrderdCourses(notFreeCourses);
        break;
      }
      case "last": {
        setOrderdCourses(courses);
        break;
      }
      case "first": {
        const firstCources = courses.slice().reverse();
        setOrderdCourses(firstCources);
        break;
      }
      case "Score": {
        setOrderdCourses([]);
        break;
      }

      default:
        setOrderdCourses(courses);
        break;
    }
  }, [status]);

  const setStatusTitleHandler = (event) => {
    setCourseTitle(event.target.textContent);
  };

  const searchchangeHandle = (event) => {
    setSerchValue(event.target.value);
    // const regexPattern = new RegExp(`[A-Z][a-z]*${searchTerm}[a-zA-Z]*`, 'g');
    const filterdCourses = courses.filter((course) =>
      course.name.includes(event.target.value)
    );
    setOrderdCourses(filterdCourses);
    console.log("dddd", filterdCourses);
  };

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
                      <div
                        className={`courses-top-bar__row-btn  ${
                          courseDisplayType === "row"
                            ? "courses-top-bar__icon--active"
                            : ""
                        }`}
                        onClick={() => setCourseDisplayType("row")}
                      >
                        <i className="fas fa-border-all courses-top-bar__icon"></i>
                      </div>
                      <div
                        className={`courses-top-bar__column-btn ${
                          courseDisplayType === "column"
                            ? "courses-top-bar__icon--active"
                            : ""
                        }`}
                        onClick={() => setCourseDisplayType("column")}
                      >
                        <i className="fas fa-align-left courses-top-bar__icon"></i>
                      </div>

                      <div className="courses-top-bar__selection">
                        <span className="courses-top-bar__selection-title">
                          {courseTitle}
                        </span>
                        <ul className="courses-top-bar__selection-list">
                          <li
                            className="courses-top-bar__selection-item"
                            onClick={(event) => {
                              setStatus("free");
                              setStatusTitleHandler(event);
                            }}
                          >
                            مرتب سازی بر اساس رایگان
                          </li>
                          <li
                            className="courses-top-bar__selection-item"
                            onClick={(event) => {
                              setStatus("Score");
                              setStatusTitleHandler(event);
                            }}
                          >
                            مرتب سازی بر اساس امتیاز
                          </li>
                          <li
                            className="courses-top-bar__selection-item"
                            onClick={(event) => {
                              setStatus("first");

                              setStatusTitleHandler(event);
                            }}
                          >
                            مرتب سازی بر اساس اولین
                          </li>
                          <li
                            className="courses-top-bar__selection-item"
                            onClick={(event) => {
                              setStatus("last");
                              setStatusTitleHandler(event);
                            }}
                          >
                            مرتب سازی بر اساس آخرین
                          </li>
                          <li
                            className="courses-top-bar__selection-item"
                            onClick={(event) => {
                              setStatus("money");
                              setStatusTitleHandler(event);
                            }}
                          >
                            مرتب سازی بر اساس پولی
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
                          value={searchValue}
                          onChange={searchchangeHandle}
                        />
                        <i className="fas fa-search courses-top-bar__search-icon"></i>
                      </form>
                    </div>
                  </div>
                  <div className="row">
                    {shownCourses == 0 ? (
                      <div className="alert alert-warning">
                        "دوره ای برای نمایش وجود ندارد."
                      </div>
                    ) : (
                      <>
                        {courseDisplayType === "row" ? (
                          <>
                            {shownCourses.map((course) => (
                              <CourseBox {...course} />
                            ))}
                          </>
                        ) : (
                          <>
                            {shownCourses.map((course) => (
                              <div class="col-12">
                                <div class="course-box">
                                  <div class="course__box-header">
                                    <div class="course__box-right">
                                      <a
                                        class="course__box-right-link"
                                        href="#"
                                      >
                                        <img
                                          src="/images/courses/fareelancer.png"
                                          class="course__box-right-img"
                                        />
                                      </a>
                                    </div>
                                    <div class="course__box-left">
                                      <div class="course__box-left-top">
                                        <a
                                          href="#"
                                          class="course__box-left-link"
                                        >
                                          {course.name}
                                        </a>
                                      </div>
                                      <div class="course__box-left-center">
                                        <div class="course__box-left-teacher">
                                          <i class="course__box-left-icon fa fa-chalkboard-teacher"></i>
                                          <span class="course__box-left-name">
                                            محمد امین سعیدی راد
                                          </span>
                                        </div>
                                        <div class="course__box-left-stars">
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span class="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                        </div>
                                      </div>
                                      <div class="course__box-left-bottom">
                                        <div class="course__box-left-des">
                                          <p>{course.description}</p>
                                        </div>
                                      </div>
                                      <div class="course__box-footer">
                                        <div class="course__box-footer-right">
                                          <i class="course__box-footer-icon fa fa-users"></i>
                                          <span class="course__box-footer-count">
                                            202
                                          </span>
                                        </div>
                                        <span class="course__box-footer-left">
                                          {course.price === 0
                                            ? "رایگان"
                                            : course.price.toLocaleString()}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <Pagination
                    items={orderdCourses}
                    itemsCount={3}
                    pathname={`/category-info/${categoryName}/1`}
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
