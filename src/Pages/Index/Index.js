import React from 'react'
import './Index.css'
import Header from '../../Components/Header/Header'
import AboutUs from '../../Components/AboutUs/AboutUs'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import PresellCourses from '../../Components/PresellCourses/PresellCourses'
import LatestArticles from '../../Components/LatestArticles/LatestArticles'
import Footer from '../../Components/Footer/Footer'
export default function Index() {
  return (
    <div>
      <Header />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LatestArticles />
      <Footer/>
    </div>
  )
}
