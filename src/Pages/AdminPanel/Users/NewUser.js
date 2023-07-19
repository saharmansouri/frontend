import React, { useState } from "react";
import Input from "../../../Components/Form/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../../Components/Validators/rules";
import { useForm } from "../../../hooks/useForm";
import swal from "sweetalert";

export default function NewUser(props) {
  const [onShowModal, setOnShowModal] = useState(false);
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registerNewUser = (event) => {
    event.preventDefault();
    console.log("formState", formState);
    let newUserData = {
      username: formState.inputs.username?.value,
      name: formState.inputs.name?.value,
      password: formState.inputs.password?.value,
      confirmPassword: formState.inputs.confirmPassword?.value,
      email: formState.inputs.email?.value,
      phone: formState.inputs.phone?.value,
    };
    fetch(`http://localhost:4000/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    }).then((res) => {
      res.json();
      console.log("res", res);
      if (res.status === 201) {
        swal({
          title: "ثبت نام موفقیت آمیز",
          text: "کاربر با موفقیت ثبت نام شد.",
          icon: "success",
        });
      } else if (res.status === 400) {
        swal({
          title: "Error!",
          text: "لطفا اطلاعات صحیح را وارد کنید",
          icon: "error",
        });
      } else if (res.status === 409) {
        swal({
          title: "ثبت نام ناموفق",
          text: " این نام کاربری  یا ایمیل قبلا ثبت نام شده است",
          buttons: "ok",
          dangerMode: true,
          icon: "error",
        });
      }
      props.getAllUser();
    });
  };

  return (
    <div>
      <div class="home-content-edit">
        <div class="back-btn">
          <i class="fas fa-arrow-right"></i>
        </div>

        <form class="form">
          <div class="col-6">
            <div class="name input">
              <label class="input-title">نام و نام خانوادگی</label>
              <Input
                type="text"
                className=""
                id="name"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا نام و نام خانوادگی کاربر را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>

          <div class="col-6">
            <div class="family input">
              <label class="input-title">نام کاربری</label>
              <Input
                type="text"
                className=""
                id="username"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا نام کاربری را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>
          <div class="col-6">
            <div class="email input">
              <label class="input-title">ایمیل</label>
              <Input
                type="text"
                className=""
                id="email"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  emailValidator(),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا ایمیل کاربر را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>
          <div class="col-6">
            <div class="phone input">
              <label class="input-title">شماره تلفن</label>
              <Input
                type="text"
                className=""
                id="phone"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا شماره تلفن کاربر را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>
          <div class="col-6">
            <div class="password input">
              <label class="input-title">رمز عبور</label>
              <Input
                type="text"
                className=""
                id="password"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا رمز عبور کاربر را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>
          <div class="col-6">
            <div class="family input">
              <label class="input-title">تکرار کلمه عبور</label>
              <Input
                type="text"
                className=""
                id="confirmPassword"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
                placeholder="لطفا نام کاربری را وارد کنید..."
              />
              <span class="error-message text-danger"></span>
            </div>
          </div>

          <div class="col-12">
            <div class="bottom-form">
              <div class="submit-btn">
                <input type="submit" value="افزودن" onClick={registerNewUser} />
              </div>
            </div>
          </div>
        </form>
        <button
          className="btn btn-primary edit-btn"
          onClick={() => setOnShowModal(true)}
        >
          افزودن کاربر جدید
        </button>
      </div>
    </div>
  );
}
