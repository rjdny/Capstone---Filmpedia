import React from "react";
import "./MovieCard.css"
import { Route,Routes } from "react-router";
import {Nav,Navbar,Card,Col,Row,Button,NavDropdown} from "react-bootstrap";


export default function MovieCard({title}){
return(
<Card>
    <h1>{title}</h1>
</Card>
)
}