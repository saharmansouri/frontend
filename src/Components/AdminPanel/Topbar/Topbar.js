import React, { useEffect, useState } from "react";
import apiRequests from "../../../Servicse/Axios/configs";

export default function Topbar() {
  const [adminInfoTopbar, setAdminInfoTopbar] = useState([]);
  const [adminNotif, setAdminNotif] = useState([]);
  const [onShowNotif, setOnShowNotif] = useState(false);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setAdminInfoTopbar(data);
        setAdminNotif(data.notifications);
        console.log("sec", adminNotif);
      });
  }, []);
  return (
    <div class="container-fluid">
      <div class="container">
        <div class={`home-header ${onShowNotif && "active-modal-notfication"}`}>
          <div class="home-right">
            <div class="home-searchbar">
              <input type="text" class="search-bar" placeholder="جستجو..." />
            </div>
            <div class="home-notification">
              <button type="button" onMouseEnter={() => setOnShowNotif(true)}>
                <i class="far fa-bell"></i>
              </button>
            </div>
            <div
              className="home-notification-modal"
              onMouseEnter={() => setOnShowNotif(true)}
              onMouseLeave={() => setOnShowNotif(false)}
            >
              <ul class="home-notification-modal-list ">
                {adminNotif.map((notification) => (
                  <li class="home-notification-modal-item">
                    <span class="home-notification-modal-text">
                      {notification}
                    </span>
                    <label class="switch">
                      <a href="javascript:void(0)"> Read </a>
                    </label>
                  </li>
                ))}
                <li class="home-notification-modal-item">
                  <span class="home-notification-modal-text">پیغام جدید</span>
                  <label class="switch">
                    <a href="javascript:void(0)"> خواندم </a>
                    {/* <input type="checkbox" checked />
                    <span class="slider round"></span> */}
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="home-left">
            <div class="home-profile">
              <div class="home-profile-image">
                <a href="#">
                  <img src={adminInfoTopbar.profile} alt="" />
                </a>
              </div>
              <div class="home-profile-name">
                <a href="#">{adminInfoTopbar.name}</a>
              </div>
              <div class="home-profile-icon">
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
