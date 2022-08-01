import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css";
import { Database } from "../Database/database";
import { useNavigate } from "react-router";

export function LoginForm() {
  const [userName, setuserName] = useState("");
  const [userNameError, setuserNameError] = useState("");

    var nav = useNavigate();

    const handleValidation = (event) => {
        let formIsValid = true;

        if (userName === "") {
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
                    if(user !== undefined){
                        Database.Set_CurrentUser(user)
                        userFound = true;
                        nav("/movies")
                        window.location.reload()
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

  const handleRegister = (event) =>{
    if(userName !== ""){
      var formIsValid = true;
      Database.mydb_get_users().then((users) => {
      var userAlready = false;
      users.forEach(user => {
          if(user.username === userName){
              var myuser = user;
              if(user != undefined){
                  userAlready = true;
              }
          }
      });
        if(userAlready){
            setuserNameError("User already exists.")
        }else{
          setuserNameError("")
          Database.mydb_add_user(userName)
          handleValidation()
        }
      })
    }else{
      setuserNameError("Please Enter a valid Username")
    }

  }

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
              <div className="form-group">
              <h1 className="Title">Filmpedia</h1>
              <h3 id="loginHeader">Log In</h3>
                <input
                  className="form-control"
                  placeholder="Enter Username"
                  onChange={(event) => setuserName(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                {userNameError}
                </small>
              </div>
              <button type="submit" id="lgn" className="btn btn-primary">Login</button>
              <button onClick={(e) => {handleRegister(e)}} type="button" className="btn btn-dark">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
