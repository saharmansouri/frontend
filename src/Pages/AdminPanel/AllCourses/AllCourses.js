import React, { useEffect, useState } from "react";
import "./AllCourses.css";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
export default function Courses() {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
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
  }, []);
  const editCourse = () => {};
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
              <th> لینک  </th>
              <th>ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {allCourses.map((course, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  {course.price ===0 ? 'رایگان' : course.price.toLocaleString()}
                  </td>
                <td>{course.registers}</td>
                <td>{course.status==="start" ? 'در حال برگزاری' : 'تکمیل شده'}</td>
                <td>{course.support}</td>
                <td>{course.courseAverageScore}</td>
                <td>{course.shortName}</td>
                <td>
                  <button className="btn btn-primary" onClick={editCourse}>
                    Edit
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
