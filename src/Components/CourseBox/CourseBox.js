import React, { useState } from 'react'
import './CourseBox.css'
import CircleSpinner from '../CircleSpinner/CircleSpinner'

export default function CourseBox(props) {
  const [isImgShow, setIsImgShow] = useState(false)

  const loadingImg = () => {
    setIsImgShow(true)
  }

  return (
    <div className="col-4">
      <div className="course-box">
        <a href="#">
          <img
          src={props.cover} alt="Course img" className="course-box__img" onLoad={loadingImg} />
          {
            !isImgShow &&
            <CircleSpinner />
          }
        </a>
        <div className="course-box__main">
          <a href="#" className="course-box__title">{props.name}</a>

          <div className="course-box__rating-teacher">
            <div className="course-box__teacher">
              <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
              <a href="#" className="course-box__teacher-link">{props.support}</a>
            </div>
            <div className="course-box__rating">
              <img src="/images/svgs/star.svg" alt="rating" className="course-box__star" />
              <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
              <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
              <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
              <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
            </div>
          </div>

          <div className="course-box__status">
            <div className="course-box__users">
              <i className="fas fa-users course-box__users-icon"></i>
              <span className="course-box__users-text">{props.user}</span>
            </div>
            <span className="course-box__price">{props.price}</span>
          </div>
        </div>

        <div className="course-box__footer">
          <a href="#" className="course-box__footer-link">
            {props.btnCource}
            <i className="fas fa-arrow-left course-box__footer-icon"></i>
          </a>
        </div>

      </div>
    </div>
  )
}
