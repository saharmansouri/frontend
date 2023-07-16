import React, { useState } from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [activeMenu,setActiveMenu]=useState('')

    const activeMenuHandler =()=>{
        setActiveMenu('active')
    }
  return (
    <div id="sidebar" className="col-2">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <a to="#">
            <img src="/images/logo/Logo.png" alt="Logo" />
          </a>
        </div>

        <div className="sidebar-menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li className= {`${activeMenu ==='active' ? 'active-menu' : ''}`} onClick={activeMenuHandler} >
            <Link to="/p-admin">
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li className= {`${activeMenu ==='active' ? 'active-menu' : ''}`} onClick={activeMenuHandler} >
            <Link to="courses">
              <span>دوره ها</span>
            </Link>
          </li>
          <li className= {`${activeMenu ==='active' ? 'active-menu' : ''}`}  >
            <Link to="menus">
              <span>منو ها</span>
            </Link>
          </li>
          <li className= {`${activeMenu ==='active' ? 'active-menu' : ''}`}  >
            <Link to="articles">
              <span>مقاله ها</span>
            </Link>
          </li>
          <li className= {`${activeMenu ==='active' ? 'active-menu' : ''}`}  >
            <Link to="users">
              <span>کاربران</span>
            </Link>
          </li>
          <li className= {`${activeMenu ==='active' ? 'active-menu' : ''}`} onClick={activeMenuHandler} >
            <Link to="#">
              <span>کدهای تخفیف</span>
            </Link>
          </li>
          <li className= {`${activeMenu ==='active' ? 'active-menu' : ''}`} onClick={activeMenuHandler} >
            <Link to="#">
              <span>دسته‌بندی‌ها</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
