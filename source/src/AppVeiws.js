import React from "react";
import { useState,useEffect } from "react";
import { Route,Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Database } from "./Database/database";
import { LoginForm } from "./LoginForm/LoginForm";


export default function AppVeiws() {

  return (
    Database.GetIsLoggedIn() ? 
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<><h1>Main</h1><div>Some information in main!!!</div></>}/>
        <Route path="/home" element={<><h1>Home</h1><div>Welcome Home!!!</div></>}/>
        <Route path="/about" element={<><h1>About</h1><div>Information about the site here!!</div></>}/>
      </Routes>
    </>:<>
    <LoginForm/>
    </>
  );
}
