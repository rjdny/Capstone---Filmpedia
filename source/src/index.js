import React from "react";
import ReactDOM from "react-dom";
import AppVeiws from "./AppVeiws";
import {BrowserRouter,Route} from 'react-router-dom'
import Database from "./Database/database";

const rootElement = document.getElementById("root");

ReactDOM.render(
<BrowserRouter>
    <AppVeiws/>
</BrowserRouter>, rootElement);

