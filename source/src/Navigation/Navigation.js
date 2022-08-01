import React from "react";
import { useNavigate } from "react-router";
import "./Navigation.css";
import {Nav,Navbar,Button} from "react-bootstrap";
import { Database } from "../Database/database";

export default function Navigation(){
    const nav = useNavigate()
    return(
        <div className="navv">
        <Navbar className="Navy" collapseOnSelect bg='dark' variant='dark'>
          <Navbar.Brand onClick={() => {nav("/")}}>Filmpedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => {nav("/movies")}}>Movies</Nav.Link>
              <Nav.Link onClick={() => {nav("/favorites")}}>Favorites</Nav.Link>
            </Nav>
            <section className="username">{Database.Get_CurrentUser().username}</section>
            <Button id="logoutButton" onClick={() => {localStorage.removeItem("user"); window.location.reload(); }}>Logout</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}