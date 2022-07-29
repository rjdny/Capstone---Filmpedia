import React from 'react';
import { Database } from '../Database/database';
import { useState,useEffect } from 'react';
import '../movies/Movies.css';
import MovieCard from '../MovieCard/MovieCard';
import { useNavigate } from 'react-router';



export function Movies(props){
    const [currHtml,setcurrHtml] = useState([])
    const nav = useNavigate()


    useEffect(() => {
        fetch("http://localhost:8088/movies")
        .then((response) => response.json())
        .then((obj) => obj).then((obj) => {
            var movies = obj;
            setcurrHtml(<>
            <div onClick={(e) => {onClickMovie(e,movies,nav)}} className="holder">{movies.map((movie,index) => (<MovieCard data-movie={movie} index={index} movie={movie}></MovieCard>))}</div>
            </>)
        })

    },[])
    return currHtml;
};




const onClickMovie = (event,allmovies,nav) => {
    var movieId = event.target.id;
    nav(`/movies/${movieId}`)
}