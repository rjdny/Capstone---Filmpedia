import React from "react";
import "./MovieCard.css"
import "./MovieCard.css"


export default function MovieCard(props){
    return(
    <img className='poster' id={props.movie.id} key={props.index} src={props.movie.posterUrl}/>)
}
