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
          expand="full"
          bg='dark'
          variant='dark'
        >
          <Navbar.Brand href="/home">Filmpedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Homepage</Nav.Link>
              <Nav.Link href="/about">About Filmpedia</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="CardHolder">
          <Col>
  
          </Col>
        </div>
      </div>
    )
}