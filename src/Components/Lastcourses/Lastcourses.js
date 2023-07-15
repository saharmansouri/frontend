import React, { useEffect, useState } from 'react'
import './Lastcourses.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import CourseBox from '../CourseBox/CourseBox'
import apiRequests from '../../Servicse/Axios/configs'

export default function Lastcourses() {

    const [courses, setCourses] = useState([])


    useEffect(() => {
        apiRequests(`http://localhost:4000/v1/courses`)
            .then(allCourses => setCourses(allCourses))
        // fetch(`http://localhost:4000/v1/courses`)
        //     .then(res => res.json())
        //     then(courses=>console.log(courses))
           
    }, [])

    return (
        <div className="courses">
            <div className="container">
                <SectionHeader title='جدیدترین دوره ها' desc='سکوی پرتاپ شما به سمت موفقیت' btnTitle='تمامی دوره ها' btnHref='courses/1' />
            </div>
            <div className='courses-content'>
                <div className='container'>
                    <div className='row'>
                        {
                            courses.splice(0,6).map((course) => (
                                <CourseBox {...course} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
