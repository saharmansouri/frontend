import React, { useEffect, useState } from "react";
import "./AllCourses.css";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import swal from "sweetalert";
export default function Courses() {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  function getAllCourses() {
    const localStorageData = localStorage.getItem("user");
    fetch(`http://localhost:4000/v1/courses`, {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllCourses(data);
        console.log("data21", data);
      });
  }
  const editCourse = (coursId) => {
    //  const localStorageData=JSON.parse(localStorage.getItem('user'))
    //  fetch(``)
  };

  const deleteCourse = (coursId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "عایا از حذف این دوره مطمعن هستید؟",
      buttons: ["cancel", "ok"],
      icon: "error",
      dangerMode: true,
    }).then((res) => {
      if (res) {
        fetch(`http://localhost:4000/v1/courses/${coursId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          swal({
            title: "حذف",
            text: `با موفقیت حذف شد`,
            icon: "saccess",
            buttons: "ok",
          }).then(() => {
            getAllCourses();
          });
        });
      }
    });
  };
  return (
    <div>
      <DataTable title="دوره ها">
        <table className="table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام دوره</th>
              <th>توضیحات </th>
              <th>قیمت </th>
              <th>تعداد دانشجو</th>
              <th> وضعیت دوره </th>
              <th>ساپورت از طریق </th>
              <th> امتیاز دوره </th>
              <th> لینک </th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {allCourses.map((course, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  {course.price === 0
                    ? "رایگان"
                    : course.price.toLocaleString()}
                </td>
                <td>{course.registers}</td>
                <td>
                  {course.status === "start" ? "در حال برگزاری" : "تکمیل شده"}
                </td>
                <td>{course.support}</td>
                <td>{course.courseAverageScore}</td>
                <td>{course.shortName}</td>
                <td>
                  <button className="btn btn-primary" onClick={editCourse}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCourse(course._id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </div>
  );
}
