import { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { Link, useParams } from "react-router-dom";
import CourseBox from "../../Components/CourseBox/CourseBox";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import './Search.css'

function Search() {
  const { valueUser } = useParams();
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/search/${valueUser}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("search", result);
        setCourses(result.allResultCourses);
        setArticles(result.allResultArticles);
      });
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="courses">
        <div className="container p-2">
          <SectionHeader
            title="نتایج جستجو در دوره ها "
            desc="سکوی پرتاب شما به سمت موفقیت"
            btnHref=""
            btnTitle='بازگشت به خانه'
          />

          {courses.length === 0 ? (
            <>
              <div className="search alert alert-warning p-3 m-2 ">
                دوره مورد نظر شما وجود ندارد
              </div>
            </>
          ) : (
            <>
            <div className="row">
              {courses.map((course) => (
                <CourseBox {...course} key={course._id} />
              ))}
              </div>
            </>
          )}

          <SectionHeader
            btnHref="search/1"
            desc="پیش به سوی ارتقای دانش"
            title="نتایج جستجو در مقالات "
          />
          {articles.length === 0 ? (
            <>
            
              <div className="alert alert-warning p-3 m-2">
                مقاله مورد نظر شما وجود ندارد
              </div>
            </>
          ) : (
            <>
            <div className="row">
              {articles.map((article) => (
                <ArticleBox key={article._id} {...article} />
              ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
