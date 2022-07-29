import React from 'react';
import { Database } from '../Database/database';
import { useState,useEffect } from 'react';
import '../movies/Movies.css';
import MovieCard from '../MovieCard/MovieCard';
import { useNavigate } from 'react-router';



export function Favorites(props){
    const [currHtml,setcurrHtml] = useState([])
    const nav = useNavigate()

    var likesArray = []
    fetch("http://localhost:8088/likes")
    .then((response) => response.json())
    .then((obj) => obj).then((obj) => {
        likesArray = obj;
    });

    useEffect(() => {
        fetch("http://localhost:8088/movies")
        .then((response) => response.json())
        .then((obj) => obj).then((obj) => {
            var movies = obj;
            var currentUser = Database.Get_CurrentUser();
            var mylikes = likesArray.filter((like) => like.userId == currentUser.id)

            var moviesToRender = []
            mylikes.forEach(like => {
                moviesToRender.push(movies.find((movie) => movie.id == like.movieId))
            });

            setcurrHtml(<>
            <div onClick={(e) => {onClickMovie(e,movies,nav)}} className="holder">{moviesToRender.map((movie,index) => (<MovieCard index={index} movie={movie}></MovieCard>))}</div>
            </>)
        })

    },[])
    return currHtml;
};




const onClickMovie = (event,allmovies,nav) => {
    var movieId = event.target.id;
    nav(`/movies/${movieId}`)
}