import React from "react";
import { useState,useEffect } from "react";
import { Route,Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AppVeiws() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<><h1>Main</h1></>}/>
        <Route path="/home" element={<><h1>Home</h1></>}/>
        <Route path="/about" element={<><h1>About</h1></>}/>
      </Routes>
    </>
  );
}
