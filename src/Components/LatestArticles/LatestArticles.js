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
            btnTitle="تمامی  مقاله ها"
            btnHref='allarticles/1'
          />

          <div className="articles__content">
            <div className="row">
              {allArticles.slice(0, 3).map((article) => (
                <ArticleBox
                  {...article}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
