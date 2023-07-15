import React, { useState } from "react";
import "./ArticleBox.css";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { Link } from "react-router-dom";

export default function ArticleBox({ title, cover, description, shortName }) {
  const [isImgShow, setIsImgShow] = useState(false);

  return (
    <div className="col-4">
      <div className="article-card">
        <div className="article-card__header">
          <Link
            to={`/article-info/${shortName}`}
            className="article-card__link-img"
          >
            <img
              src={cover}
              className="article-card__img"
              alt="Article Cover"
              onLoad={() => setIsImgShow(true)}
            />
            {!isImgShow && <CircleSpinner />}
          </Link>
        </div>
        <div className="article-card__content">
          <Link
            to={`/article-info/${shortName}`}
            className="article-card__link"
          >
            {title}
          </Link>
          <p className="article-card__text">{description}</p>
          <Link to={`/article-info/${shortName}`} className="article-card__btn">
            بیشتر بخوانید
          </Link>
        </div>
      </div>
    </div>
  );
}
