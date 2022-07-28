import React from "react";
import { useNavigate } from "react-router";
import { useState,useEffect } from "react";
import "./Navigation.css";
import { Route,Routes } from "react-router";
import {Nav,Navbar,Card,Col,Row,Button,NavDropdown} from "react-bootstrap";

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
          <Navbar.Brand href="/home">Filmpedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => {nav("/home")}}>Homepage</Nav.Link>
              <Nav.Link onClick={() => {nav("/about")}}>About Filmpedia</Nav.Link>
            </Nav>
            <button onClick={() => {localStorage.removeItem("userId"); window.location.reload()}}>Logout</button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}