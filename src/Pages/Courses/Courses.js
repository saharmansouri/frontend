import React, { useEffect, useState } from "react";
import "./Courses.css";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb";
import Footer from "./../../Components/Footer/Footer";
import CourseBox from "./../../Components/CourseBox/CourseBox";
import "./Courses.css";
import apiRequests from "../../Servicse/Axios/configs";
import Pagination from "../../Components/Pagination/Pagination";

export default function Courses() {
  const [allCourse, setAllCourses] = useState([]);
  const [shownCourses, setShownCourses] = useState([]);
  useEffect(() => {
    apiRequests(`/courses`).then((data) => {
      setAllCourses(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />

      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {shownCourses.map((course) => (
                  <CourseBox {...course} />
                ))}
              </div>
            </div>
          </div>

      
          <Pagination
            items={allCourse}
            itemsCount={3}
            pathname="/courses"
            setShownCourses={setShownCourses}
          />
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
