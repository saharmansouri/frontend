import React, { useState, useContext } from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext";
import swal from "sweetalert";
export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutAdmin = (event) => {
    event.preventDefault();
    authContext.logout();
    swal({
      title: "با موفقیت خارج شده اید.",
      icon: "success",
      buttons: "ok",
    }).then((res) => navigate("/"));
  };

  const activeMenuHandler = () => {
    setActiveMenu("active");
  };
  return (
    <div id="sidebar" className="col-2">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Link to="/">
            <img src="/images/logo/Logo.png" alt="Logo" />
          </Link>
        </div>

        <div className="sidebar-menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li
            className={`${activeMenu === "active" ? "active-menu" : ""}`}
            onClick={activeMenuHandler}
          >
            <Link to="/p-admin">
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li
            className={`${activeMenu === "active" ? "active-menu" : ""}`}
            onClick={activeMenuHandler}
          >
            <Link to="allCourses">
              <span>دوره ها</span>
            </Link>
          </li>
          <li>
            <Link to="sessions">
              <span>جلسات دوره ها</span>
            </Link>
          </li>
          <li className={`${activeMenu === "active" ? "active-menu" : ""}`}>
            <Link to="menus">
              <span>منو ها</span>
            </Link>
          </li>
          <li className={`${activeMenu === "active" ? "active-menu" : ""}`}>
            <Link to="articles">
              <span>مقاله ها</span>
            </Link>
          </li>
          <li className={`${activeMenu === "active" ? "active-menu" : ""}`}>
            <Link to="users">
              <span>کاربران</span>
            </Link>
          </li>
          <li
            className={`${activeMenu === "active" ? "active-menu" : ""}`}
            onClick={activeMenuHandler}
          >
            <Link to="#">
              <span>کدهای تخفیف</span>
            </Link>
          </li>
          <li
            className={`${activeMenu === "active" ? "active-menu" : ""}`}
            onClick={activeMenuHandler}
          >
            <Link to="category">
              <span>دسته‌بندی‌ها</span>
            </Link>
          </li>
          <li>
            <Link to="contactadmin">
              <span>تیکت ها</span>
            </Link>
          </li>
          <li
            className={`${activeMenu === "active" ? "active-menu" : ""}`}
            onClick={activeMenuHandler}
          >
            <Link to="#">
              <span onClick={logoutAdmin}>خروج</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
