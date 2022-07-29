import React from "react";
import { useNavigate } from "react-router";
import { useState,useEffect } from "react";
import "./Navigation.css";
import { Route,Routes } from "react-router";
import {Nav,Navbar,Card,Col,Row,Button,NavDropdown} from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import { Database } from "../Database/database";

export default function Navigation(){
    const nav = useNavigate()

    return(
        <div>
        <Navbar
          className="Navy"
          collapseOnSelect
          bg='dark'
          variant='dark'
        >
          <Navbar.Brand onClick={() => {nav("/")}}>Filmpedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => {nav("/movies")}}>Movies</Nav.Link>
              <Nav.Link onClick={() => {nav("/favorites")}}>Favorites</Nav.Link>
            </Nav>
            {Database.Get_CurrentUser().username}
            <button onClick={() => {localStorage.removeItem("user"); window.location.reload(); }}>Logout</button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}