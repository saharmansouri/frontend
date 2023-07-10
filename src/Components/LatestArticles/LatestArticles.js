import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";
import apiRequests from "../../Servicse/Axios/configs";

export default function LatestArticles() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    apiRequests(`http://localhost:4000/v1/articles`).then((articles) => {
      setAllArticles(articles);
      console.log("arrr", articles);
    });
  }, []);

  return (
    <>
      <section className="articles">
        <div className="container">
          <SectionHeader
            title="جدیدترین مقاله ها"
            desc="پیش به سوی ارتقای دانش"
            btnTitle="تمامی دوره ها"
          />

          <div className="articles__content">
            <div className="row">
              {allArticles.slice(0, 3).map((article) => (
                <ArticleBox
                  {...article}
                  //   title=" نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون"
                  //   desc="زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع..."
                  //   cover="images/blog/3.jpg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
