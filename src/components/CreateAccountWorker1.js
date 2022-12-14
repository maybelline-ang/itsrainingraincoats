import React, { useContext, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import Context from "../context/context";

export default function CreateAccountWorker1(props) {
  const context = useContext(Context);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, watch, getValues } = useForm();
  const buttonRef = useRef();
  const watchAll = watch();

  const onSubmit = async (data) => {
    const url = "http://127.0.0.1:5001/user/create";
    const body = {
      username: data.username,
      password: data.password,
      user_type: props.persona.toLowerCase(),
    };
    const res = await putNewUser(url, "PUT", body);
    console.log(res);

    // to store refresh token from login response to localstorage
    localStorage.setItem("refreshToken", res.refreshToken);
    context.setRefreshToken(res.refreshToken);

    // to store persona from login response to localstorage
    localStorage.setItem("persona", res.persona);
    context.setPersona(res.persona);

    // to store userId from login response to localstorage
    localStorage.setItem("id", res.id);
    context.setUserId(res.id);

    // console.log(localStorage.refreshToken);

    if (res.status === "error") {
      setErrorMessage(res.message);
      return;
    }

    if (res.status === "ok") {
      console.log(res.id);
      props.setUserId(res.id);
      props.setCurrentPage("worker2");
    }
  };

  const putNewUser = async (url, method = "GET", body = null) => {
    const res = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const message = res.json();

    return message;
  };

  useEffect(() => {
    if (
      watchAll.username &&
      watchAll.password &&
      watchAll.confirmPassword &&
      watchAll.password === watchAll.confirmPassword
    ) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [watchAll]);

  return (
    <form className="col" onSubmit={handleSubmit(onSubmit)}>
      <p className="createAccount-label mb-2">
        <span className="createAccount-label fw-700">Create Account</span>
      </p>
      <div className="input-container mb-4">
        <span className="input-overlay">
          username{" "}
          {!watchAll.username && (
            <span
              className="createAccount-label fw-300 mb-2"
              style={{ color: "red", fontSize: "11px" }}
            >
              *required
            </span>
          )}
        </span>
        <input
          className="createAccount-username"
          type="text"
          placeholder="username"
          autoComplete="off"
          {...register("username", {
            required: true,
          })}
        />
      </div>
      <span className="createAccount-label mb-2 fw-700">Create Password</span>
      <div className="input-container mb-2">
        <span className="input-overlay">
          password{" "}
          {!watchAll.password && (
            <span
              className="createAccount-label fw-300 mb-2"
              style={{ color: "red", fontSize: "11px" }}
            >
              *required
            </span>
          )}
        </span>
        <input
          className="createAccount-password"
          type="password"
          placeholder="password"
          autoComplete="off"
          {...register("password", {
            required: true,
          })}
        />
      </div>
      <div className="input-container">
        <span className="input-overlay">
          confirm password{" "}
          {!watchAll.confirmPassword && (
            <span
              className="createAccount-label fw-300 mb-2"
              style={{ color: "red", fontSize: "11px" }}
            >
              *required
            </span>
          )}
        </span>
        <input
          className="createAccount-confirmPassword"
          type="password"
          placeholder="confirm password"
          autoComplete="off"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => {
              const password = getValues("password");
              if (value === password) {
                return true;
              }

              return false;
            },
          })}
        />
        {watchAll.password !== watchAll.confirmPassword && (
          <p
            className="createAccount-label fs-12 fw-300 mt-1"
            style={{ color: "red" }}
          >
            *Passwords do not match
          </p>
        )}
        {errorMessage && (
          <p
            className="createAccount-label fs-12 fw-600 mt-1 "
            style={{ color: "red" }}
          >
            Error: {errorMessage}
          </p>
        )}
      </div>
      <button className="createAccount-button fw-600" ref={buttonRef}>
        Create Account
      </button>
      <NavLink to="/login">
        <span className="signin-prompt fw-600">Sign in instead</span>
      </NavLink>
    </form>
  );
}
