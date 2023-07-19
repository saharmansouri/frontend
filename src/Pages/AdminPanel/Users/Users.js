import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import swal from "sweetalert";
import NewUser from "./NewUser";
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUser();
    // apiRequests(`users`).then(data=>setUsers(data))
  }, []);

  function getAllUser() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/users`, {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((allUsers) => {
        setUsers(allUsers);
      });
  }

  const removeUser = (userId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log("userId", userId);
    swal({
      title: "حذف",
      text: "آیا از حذف این کاربر مطمعن هستید؟",
      buttons: ["No", "Ok"],
      icon: "warning",
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/users/${userId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorageData.token}` },
        }).then((res) => {
          if (res.ok) {
            swal({
              title: "موفق !",
              text: "کاربر مورد نظر شما حذف شد.",
              button: "OK",
              icon: "success",
            }).then(() => {
              getAllUser();
            });
          }
        });
      }
    });
  };

  const banUser = (userId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log("userId", userId);
    swal({
      title: "Ban",
      text: "Are you sure for ban?",
      buttons: ["No", "Ok"],
      icon: "warning",
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/users/ban/${userId}`, {
          method: "PUT",
          headers: { Authorization: `Bearer ${localStorageData.token}` },
        })
        .then((res) => {
          if (res.ok) {
            swal({
              title: "Baned!",
              text: "The user has been ban.",
              button: "OK",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <NewUser getAllUser={getAllUser} />
      <DataTable title="کاربران">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>نام کاربری</th>
              <th>شماره همراه</th>
              <th>ایمیل</th>
              <th>ویرایش</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <>
                <tr key={user.index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <button type="button" className="btn btn-primary edit-btn">
                      ویرایش
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger edit-btn"
                      onClick={() => removeUser(user._id)}
                    >
                      حذف
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger edit-btn"
                      onClick={() => banUser(user._id)}
                    >
                      بن
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </DataTable>
    </div>
  );
}
