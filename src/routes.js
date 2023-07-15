import Index from "./Pages/Index/Index";

import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Category from "./Pages/Category/Category";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AllArticles from "./Pages/AllArticles/AllArticles";
import Contact from "./Pages/Contact/Contact";
import Search from "./Pages/Search/Search";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName/:page", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: '/courses/:page', element: <Courses /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/allarticles/:page", element: <AllArticles /> },
  { path: "/contactus", element: <Contact /> },
  { path: "/search/:valueUser", element: <Search /> },
];

export default routes;
