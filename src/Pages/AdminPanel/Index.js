import React from "react";
import "./Index.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/AdminPanel/Sidebar/Sidebar";
import Topbar from "../../Components/AdminPanel/Topbar/Topbar";

export default function Index() {
  return (
    <>
      <div id="content" >
        <Sidebar />
        <div id="home" className="col-10">
          <Topbar />
        </div>
      </div>
      <Outlet />
    </>
  );
}
