import React, { useEffect, useState } from "react";

import "./PresellCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from "../CourseBox/CourseBox";
import apiRequests from "../../Servicse/Axios/configs";

export default function PresellCourses() {
  const [persellCourses, setPersellCourses] = useState([]);
  useEffect(() => {
    apiRequests(`/courses/presell`).then((allPresell) => {
      setPersellCourses(allPresell);
      console.log("presel", allPresell);
    });
  }, []);

  return (
    <div className="presell">
      <div className="container">
        <SectionHeader
          desc="بهترین دوره های در حال پیش فروش"
          title="دوره های در حال پیش فروش"
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
              loop
            >
              {persellCourses.map((course) => (
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
