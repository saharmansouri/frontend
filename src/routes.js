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
import AdminPanel from "./Pages/AdminPanel/Index";
import Users from "./Pages/AdminPanel/Users/Users";
import Menus from "./Pages/AdminPanel/Menus/Menus";
import Articles from "./Pages/AdminPanel/Articles/Articles";
import AllCourses from './Pages/AdminPanel/AllCourses/AllCourses'
import AdminCategory from './Pages/AdminPanel/Category/Category'
import AdminUser from './Pages/UserPanel/index'
import ContactAdmin from "./Pages/AdminPanel/ContactUs/ContactUs";
import Sessions from "./Pages/AdminPanel/Sessions/Sessions";
import PAdminaindex from './Pages/AdminPanel/Main/Main'

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName/:page", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/courses/:page", element: <Courses /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/allarticles/:page", element: <AllArticles /> },
  { path: "/contactus", element: <Contact /> },
  { path: "/search/:valueUser", element: <Search /> },
  {path:"admin",element:<AdminUser />},
  {
    path: "/p-admin/*",
    element: <AdminPanel />,
    children: [
      { path: "", element: <PAdminaindex /> },
      { path: "users", element: <Users /> },
      { path: "menus", element: <Menus /> },
      { path: "articles", element: <Articles /> },
      { path: "allCourses", element: <AllCourses /> },
      { path: "category", element: <AdminCategory /> },
      { path: "contactadmin", element: <ContactAdmin /> },
      { path: "sessions", element: <Sessions /> },
    ],
  },
];

export default routes;
