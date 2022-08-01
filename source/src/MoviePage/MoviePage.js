import React from "react";
import { useState,useEffect} from "react";
import { useParams } from "react-router";
import { FourOFour } from "../404/FourOFour";
import "./MoviePage.css"
import { Button } from "react-bootstrap";
import { Database } from "../Database/database";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./Comment";

export default function MoviePage(){

const likeEmoji = "❤️";

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

    var usersArray = []
    fetch("http://localhost:8088/users")
    .then((response) => response.json())
    .then((obj) => obj).then((obj) => {
        usersArray = obj;
    });

    var commentsArray = []
    fetch("http://localhost:8088/comments")
    .then((response) => response.json())
    .then((obj) => obj).then((obj) => {
        commentsArray = obj;
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
        commentsArray = commentsArray.filter((comment) => {return comment.movieId === movie.id})
        if(movie === undefined){
            setcurrHtml(<><FourOFour/></>)
        }
        else{
            setcurrHtml(<>
            <div className="moviepage">
                <img className="posteron" src={movie.posterUrl}/> 
                <section className="movieInfos">
                    <div><h1>{movie.title}</h1></div>
                    <div>Year: {movie.year}</div>
                    <div>Runtime: {movie.runtime}</div>
                    <div>Genres: {movie.genres.join()}</div>
                    <div>Director: {movie.director}</div>
                    <div>Actors: {movie.actors}</div>
                    <div className="summaryDiv">Summary: {movie.plot}</div>
                    <div>
                        {(liked) ? 
                        <><Button onClick={() => {Database.removeLike(mylikeid); setLiked(false)}} className="likebutton btn-dark">Remove From favorites</Button></>:
                        <><Button onClick={() => {Database.addLike(currentUser.id,movie.id); setLiked(true)}} className="likebutton">Add to favorites</Button></>}
                    </div>
                    <div>{likeEmoji}{likesArray.length}</div>
                </section>
                <div><h1>Comments:</h1></div>
                <textarea className="inputt"></textarea>
                <Button onClick={() => {
                    var message = document.getElementsByClassName("inputt")[0].value;
                    if(message != ""){
                        Database.postComment(currentUser,message,movie);
                        window.location.reload()
                    }
                }} className="postButton">Post</Button>
                {commentsArray.map((comment) => {
                    var owner = usersArray.find((user) => user.id == comment.userId)
                    var isMine = (comment.userId == currentUser.id)
                    return (<><Comment id={comment.id} isMine={isMine} username={owner.username} comment={comment.comment}></Comment></>)
                })} 
            </div>
            </>)
        }
    })

},[liked])
return currHtml;
}


