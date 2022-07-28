import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css";
import { Database } from "../Database/database";
import { useNavigate } from "react-router";
import { Row,Col } from "react-bootstrap";

export function LoginForm() {
  const [userName, setuserName] = useState("");
  const [userNameError, setuserNameError] = useState("");

    const handleValidation = (event) => {
    let formIsValid = true;

    if (userName == "") {
      formIsValid = false;
      setuserNameError("Please Enter a valid Username");
      return false;
    } else {
        setuserNameError("");
        formIsValid = true;
        Database.mydb_get_users().then((users) => {
        var userFound = false;
        users.forEach(user => {
            if(user.username === userName){
                var myuser = user;
                if(user != undefined){
                    Database.Set_CurrentUserId(user.id)
                    userFound = true;
                    window.location.reload();
                }
            }
        });
        if(!userFound){
            setuserNameError("No User Found.")
        }
        })

    }
    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <>
    <div className="LoginForm">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <h1 id="loginHeader">Log In</h1>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Enter Username"
                  onChange={(event) => setuserName(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                {userNameError}
                </small>
              </div>
              <div className="buttons">
              <button type="submit" id="lgn" className="btn btn-primary">Login</button>
              <button type="submit" id="reg" className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
