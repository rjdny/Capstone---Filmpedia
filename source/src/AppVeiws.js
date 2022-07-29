import React from "react";
import { Route,Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Database } from "./Database/database";
import { LoginForm } from "./LoginForm/LoginForm";
import {FourOFour} from "./404/FourOFour";
import { Movies } from "./movies/Movies";
import MoviePage from "./MoviePage/MoviePage";
import { Favorites } from "./movies/Favorites";

export default function AppVeiws() {

  return (
    Database.GetIsLoggedIn() ? 
    <>
      <Routes>
        <Route path="/movies" element={<><Navigation/><Movies/></>}/>
        <Route path="/movies/:movieId/" element={<><Navigation/> <MoviePage/></>}/>
        <Route path="/favorites" element={<><Navigation/><Favorites/></>}/>
        <Route path="*" element={<FourOFour/>} />
      </Routes>
    </>:<>
    <LoginForm/>
    </>
  );
}
