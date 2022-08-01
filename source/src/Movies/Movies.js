import React from 'react';
import { useState,useEffect } from 'react';
import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';
import { useNavigate } from 'react-router';
import { Nav } from 'react-bootstrap';



export function Movies(){
    const [currHtml,setcurrHtml] = useState([])
    const [moviesSearch,setMoviesSearch] = useState("")


    const nav = useNavigate()


    useEffect(() => {
        fetch("http://localhost:8088/movies")
        .then((response) => response.json())
        .then((obj) => obj).then((obj) => {
            var movies = obj;

            var moviesSearched = movies.filter((movie) =>{ return (movie.title.toLowerCase().startsWith(moviesSearch.toLowerCase()))})


            setcurrHtml(<>
            <div className='searchDiv'><input id='searchInput'/><label onClick={() => {
                setMoviesSearch(document.getElementById('searchInput').value)
            }}>🔎</label></div> 
            <div onClick={
                (e) => {onClickMovie(e,movies,nav)}
                } className="holder">{
                 moviesSearched.map((movie,index) => (<MovieCard key={movie.id} data-movie={movie} index={index} movie={movie}></MovieCard>))}</div>

            </>)
        })

    },[moviesSearch])
    return currHtml;
};


const onClickMovie = (event,allmovies,nav) => {
    var movieId = event.target.id;
    nav(`/movies/${movieId}`)
}