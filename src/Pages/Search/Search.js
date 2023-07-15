import { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import { useParams } from "react-router-dom";
import CourseBox from "../../Components/CourseBox/CourseBox";

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
        <div className="container">
          <SectionHeader
            btnHref="search/1"
            desc="نتایج جستجو در دوره ها"
            title="نتیجه جستجو"
          />

          {courses.length === 0 ? "دوره مورد نظر ما وجود ندارد" : <>
        {  courses.map(course =>(
              <CourseBox {...course} key={course._id} />
          ))}
          </>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
