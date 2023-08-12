import React, { useEffect, useState } from "react";
import apiRequests from "../../../Servicse/Axios/configs";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
export default function Sessions() {
  const [allSessions, setAllSessions] = useState([]);

  useEffect(() => {
    getAllSessions();
  });

  function getAllSessions() {
    apiRequests(`courses/sessions`).then((allData) => {
      setAllSessions(allData);
      console.log("allSessions", allSessions);
    });
  }
  return (
    <>
      <div className="container-fluid" id="home-content">
        <div className="container">
          <div className="home-title">
            <span>افزودن جلسه جدید</span>
          </div>
          <form className="form">
            <div className="col-6">
              <div className="name input">
                <label className="input-title">عنوان جلسه</label>
                <input type="text" placeholder="لطفا نام جلسه را وارد کنید">
                  عنوان جلسه
                </input>
                <span className="error-message text-danger"> </span>
              </div>
            </div>
            <div className="col-6">
              <div className="name input">
                <label className="input-title">مدت زمان جلسه</label>
                <input type="text" placeholder="لطفا نام جلسه را وارد کنید">
                  عنوان جلسه
                </input>
                <span className="error-message text-danger"> </span>
              </div>
            </div>
            <div className="col-6">
              <div className="price input">
                <label className="input-title" style={{ display: "block" }}>
                  دوره
                </label>
                <select className="select">
                  <option>دوره جی اس</option>
                  <option>دوره جی اس</option>
                  <option>دوره جی اس</option>
                  <option>دوره جی اس</option>
                  <option>دوره جی اس</option>
                </select>
                <span className="error-message text-danger"> </span>
              </div>
            </div>

            <div
              className="
            col-12"
            >
              <div className="bottom-form">
                <button className="btn btn-danger">حذف</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <DataTable title="جلسات دوره">
        <table className="table" >
        <thead>
          <tr key={Sessions._id}>
            <th> ردیف</th>
            <th>نام دوره</th>
            <th>عنوان جلسه</th>
            <th>زمان فیلم </th>
            <th>قیمت </th>
          </tr>
        </thead>
        <tbody>
          {allSessions.map((session, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{session.title}</td>
              <td>{session.course.name}</td>
              <td>{session.time}</td>
              <td>{session.free === 0 ? "رایگان" : "پولی"}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </DataTable>
    </>
  );
}
