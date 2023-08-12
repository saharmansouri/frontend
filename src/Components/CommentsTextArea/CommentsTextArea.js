import React, { useContext, useState } from "react";
import "./CommentsTextArea.css";
import Pagination from "../Pagination/Pagination";
import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";

export default function CommentsTextArea({ comments }) {
  const [showComments, setShowComments] = useState([]);
  const authContext = useContext(AuthContext);
  console.log('authContext', authContext)
  return (
    <div className="comments">
      <div className="comments__header">
        <div className="comments__header-icon-content">
          <i className="comments__header-icon far fa-comment"></i>
        </div>
        <span className="comments__header-title">نظرات</span>
      </div>
      <div className="comments__content">
        {comments.length === 0 ? (
          <div className="alert alert-warning">
            هیچ کامنتی برای این دوره ثبت نشده است.
          </div>
        ) : (
          <>
            {comments.map((comment) => (
              <>
                <div className="comments__item">
                  <div className="comments__question">
                    <div className="comments__question-header">
                      <div className="comments__question-header-right">
                        <span className="comments__question-name comment-name">
                          {comment.creator?.name}
                        </span>
                        <span className="comments__question-status comment-status">
                          خریدار محصول
                        </span>
                        <span className="comments__question-date comment-date">
                          {comment.createdAt}
                        </span>
                      </div>
                      <div className="comments__question-header-left">
                        <a
                          className="comments__question-header-link comment-link"
                          href="#"
                        >
                          پاسخ
                        </a>
                      </div>
                    </div>
                    <div className="comments__question-text">
                      <p className="comments__question-paragraph comment-paragraph">
                        {comment.body}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
           
          </>
        )}
      </div>

      {authContext.isLoggedIn ? (
        <>
          <div className="comments__rules">
            <span className="comments__rules-title">قوانین ثبت دیدگاه</span>
            <span className="comments__rules-item">
              <i className="fas fa-check comments__rules-icon"></i>
              اگر نیاز به پشتیبانی دوره دارید از قسمت پرسش سوال در قسمت نمایش
              انلاین استفاده نمایید و سوالات مربوط به رفع اشکال تایید نخواهند شد
            </span>
            <span className="comments__rules-item">
              <i className="fas fa-check comments__rules-icon"></i>
              دیدگاه های نامرتبط به دوره تایید نخواهد شد.
            </span>
            <span className="comments__rules-item">
              <i className="fas fa-check comments__rules-icon"></i>
              سوالات مرتبط با رفع اشکال در این بخش تایید نخواهد شد.
            </span>
            <span className="comments__rules-item">
              <i className="fas fa-check comments__rules-icon"></i>
              از درج دیدگاه های تکراری پرهیز نمایید.
            </span>
          </div>
          <div className="comments__respond">
            <div className="comments__score">
              <span className="comments__score-title">امتیاز شما</span>
              <div className="comments__score-input">
                <span className="comments__score-input-text">
                  امتیاز خود را انتخاب کنید
                </span>
                <i className="fas fa-angle-down	 comments__input-icon"></i>
              </div>
            </div>
            <div className="comments__respond-content">
              <div className="comments__respond-title">دیدگاه شما *</div>
              <textarea className="comments__score-input-respond"></textarea>
            </div>
            <button type="submit" className="comments__respond-btn">
              ارسال
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="alert alert-warning">
            برای ثبت کامنت باید
            <Link to={"/login"}>Login</Link>
            کنید.
          </div>
        </>
      )}
    </div>
  );
}
