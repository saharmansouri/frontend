import React from 'react'
import './PopularCourses.css'
import SectionHeader from '../SectionHeader/SectionHeader'


export default function PopularCourses() {
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader title='محبوب ترین دوره ها' desc='دوره های محبوب یر اساس امتیاز دهی' />
      </div>
    </div>

  )
}
