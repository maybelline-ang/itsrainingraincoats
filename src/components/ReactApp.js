import React, { useState } from "react";
import Header from "../Header";
import { Route, Routes } from "react-router-dom";
import NavBar from "../navbar/NavBar";

import "./utility.css";
import CreateAccountSelection from "./CreateAccountSelection";
import CreateAccountWorker1 from "./CreateAccountWorker1";
import CreateAccountWorker2 from "./CreateAccountWorker2";
import CreateAccountWorker3 from "./CreateAccountWorker3";
import LanguageSelect from "./LanguageSelect";
import Login from "./Login";
import CreateAccountWorker4 from "./CreateAccountWorker4";
import CreateAccount from "../pages/CreateAccount";

export default function ReactApp() {
  return (
    <>
      <div className="main-header-container">
        <Header />
      </div>
      <div className="main-body-container">
        <Routes>
          <Route path="/language-select" element={<LanguageSelect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </div>
      <div className="main-navbar">{/* <NavBar /> */}</div>
    </>
  );
}
