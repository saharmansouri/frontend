import React, { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import apiRequests from "../../../Servicse/Axios/configs";
import swal from "sweetalert";

export default function ContactUs() {
  const [contcts, setContcts] = useState([]);

  useEffect(() => {
    getAllTickets();
  }, []);
  const showContactBody = (body) => {
    swal({
      title: body,
      button: "ok",
    });
  };
  function getAllTickets() {
    apiRequests(`/contact`).then((allContacts) => setContcts(allContacts));
  }

  const sendAnswerToUser = async (contactEmail, name) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log("email", contactEmail);
    swal({
      title: `شما در حال پاسخ به کاربر ${name} هستید`,
      content: "input",
      buttons: "ارسال",
    }).then((result) => {
      console.log("result", result);
      const answerInfo = {
        email: contactEmail,
        answer: result,
      };
      fetch(`http://localhost:4000/v1/contact/answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify(answerInfo),
      }).then((res) => {
        if (res) {
          console.log(res);
          return res.json();
        }
      });
    });
  };

  const deleteTicket = (id) => {
    swal({
      title: "حذف",
      icon: "success",
      text: "عایا از حذف این کاربر مطمعن هستید؟",
      buttons: ["cancel", "ok"],
    }).then((res) => {
      if (res) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        fetch(`http://localhost:4000/v1/contact/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorageData.token}` },
        })
          .then((res) => res.json())
          .then(() => {
            getAllTickets();
          });
      }
    });
  };
  return (
    <div>
      <DataTable title="پیغام  کاربران">
        <table className="table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>شماره همراه</th>
              <th>مشاهده تیکت</th>
              <th>پاسخ </th>
              <th>حذف </th>
            </tr>
          </thead>
          <tbody>
            {contcts.map((contact, index) => (
              <>
                <tr>
                  <td> {index + 1} </td>
                  <td> {contact.name} </td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary edit-btn"
                      onClick={() => {
                        showContactBody(contact.body);
                        console.log(contact.body);
                      }}
                    >
                      مشاهده
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        sendAnswerToUser(contact.email, contact.name);
                      }}
                      className="btn btn-primary edit-btn"
                    >
                      پاسخ
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger edit-btn"
                      onClick={() => deleteTicket(contact._id)}
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
