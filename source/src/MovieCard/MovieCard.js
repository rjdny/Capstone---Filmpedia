import React from "react";
import "./MovieCard.css"
import { Route,Routes } from "react-router";
import {Nav,Navbar,Card,Col,Row,Button,NavDropdown} from "react-bootstrap";
import "./MovieCard.css"


export default function MovieCard(props){
    return(
    <img className='poster' id={props.movie.id} key={props.index} src={props.movie.posterUrl}/>)
}
