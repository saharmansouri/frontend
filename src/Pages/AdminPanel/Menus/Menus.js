import React, { useEffect, useState } from "react";
import apiRequests from "../../../Servicse/Axios/configs";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import swal from "sweetalert";

export default function Menus() {
  const [allMenus, setAllMenus] = useState([]);

  useEffect(() => {
    getAllMenues();
  }, []);
  
  function getAllMenues() {
    apiRequests(`menus/all`).then((menus) => {
      setAllMenus(menus);
    });
  }

  const removeMenu = (menuId) => {
    console.log("menuId", menuId);
    swal({
      title: "عایا مطمعن هستید؟",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((result) => {
      console.log("result", result);
      if (result) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:4000/v1/menus/${menuId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          console.log("res", res);
          if (res.ok) {
            swal({
              title: "منو مورد نظر با موفقیت حذف شد",
              icon: "success",
              button: "تایید",
            }).then(() => {
              getAllMenues();
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <DataTable title="منو ها">
        <table className="table">
          <thead>
            <tr>
              <th>ردیف </th>
              <th>نام منو</th>
              <th>لینک منو</th>
              <th> فرزند...</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {allMenus.map((menu, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{menu.title}</td>
                  <td>{menu.href}</td>
                  <td>
                    {menu.parent ? (
                      menu.parent?.title
                    ) : (
                      <i className="fa fa-check"></i>
                    )}
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary edit-btn">
                      ویرایش
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger edit-btn"
                      onClick={() => removeMenu(menu._id)}
                    >
                      حذف
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
