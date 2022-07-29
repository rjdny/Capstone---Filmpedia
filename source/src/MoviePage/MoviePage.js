import React from "react";
import { useState,useEffect} from "react";
import { Route,Routes,useParams } from "react-router";
import { FourOFour } from "../404/FourOFour";
import "./MoviePage.css"
import { Button } from "react-bootstrap";
import { Database } from "../Database/database";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MoviePage(){
const param = useParams();
const [currHtml,setcurrHtml] = useState([])
const [liked,setLiked] = useState([])


useEffect(() => {
    var likesArray = []
    fetch("http://localhost:8088/likes")
    .then((response) => response.json())
    .then((obj) => obj).then((obj) => {
        likesArray = obj;
    });

    fetch("http://localhost:8088/movies")
    .then((response) => response.json())
    .then((obj) => obj).then((obj) => {
        var movies = obj;
        var movie = movies.find(x => x.id == param.movieId)
        var currentUser = Database.Get_CurrentUser();  
        var mylikeid = -1;

        likesArray = likesArray.filter((like) => like.movieId == movie.id)

        var didIlike = (likesArray.filter((like) => like.userId == currentUser.id).length > 0)
        setLiked(didIlike)
        if(didIlike){
            mylikeid = likesArray.filter((like) => like.userId == currentUser.id)[0].id;
        }


        if(movie === undefined){
            setcurrHtml(<><FourOFour/></>)
        }
        else{
            setcurrHtml(<>
            <div className="moviepage">
            <img className="posteron" src={movie.posterUrl}/> 
            <p className="movieInfos">
                <div><h1>{movie.title}</h1></div>
                <div>Year: {movie.year}</div>
                <div>Runtime: {movie.runtime}</div>
                <div>Genres: {movie.genres.join()}</div>
                <div>Director: {movie.director}</div>
                <div>
                    {(liked) ? 
                    <><Button onClick={() => {removeLike(mylikeid); setLiked(false)}} className="likebutton btn-dark">Remove From favorites</Button></>:
                    <><Button onClick={() => {addLike(currentUser.id,movie.id); setLiked(true)}} className="likebutton">Add to favorites</Button></>}
                </div>
            </p>
            </div>
            </>)
        }
    })

},[liked])
return currHtml;

}


function removeLike(likeId){
    fetch(`http://localhost:8088/likes/${likeId}`, { method: 'DELETE' })

}

function addLike(userId,movieId){
    var likeobj = {"userId":userId,"movieId":movieId};
    fetch("http://localhost:8088/likes", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(likeobj)
      })
}
