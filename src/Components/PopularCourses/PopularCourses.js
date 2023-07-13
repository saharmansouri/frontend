import React, { useEffect,useState } from "react";
import "./PopularCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from "../CourseBox/CourseBox";
import apiRequests from "../../Servicse/Axios/configs";

export default function PopularCourses() {
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    apiRequests(`/courses/popular`).then((allpopular) => {
      setPopularCourses(allpopular);
      console.log("presel", allpopular);
    });
  }, []);
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب یر اساس امتیاز دهی"
        />
      </div>

      <div className="courses-content">
        <div className="container">
          <div className="row">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {popularCourses.map((course) => (
                <SwiperSlide>
                  <CourseBox {...course} isSlider={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
