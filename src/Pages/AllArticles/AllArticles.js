import { useEffect, useState } from "react";
import apiRequests from "../../Servicse/Axios/configs";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import Pagination from "../../Components/Pagination/Pagination";
import "../Courses/Courses.css";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";

export default function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const [shownCourses, setShownCourses] = useState([]);

  useEffect(() => {
    apiRequests(`/articles`).then((allArticles) => {
      setAllArticles(allArticles);
      console.log("articles", allArticles);
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
            title: "تمامی  مقاله ها",
            to: "allarticles",
          },
        ]}
      />
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {shownCourses.map((article) => (
                  <ArticleBox {...article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pagination
        items={allArticles}
        itemsCount={6}
        pathname="/allArticles"
        setShownCourses={setShownCourses}
      />
      <Footer />
    </>
  );
}
