import React from "react";
import "./MoviePage.css"
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Comment(props){

var delbutton = props.isMine ? (<>
<Button onClick={() =>{deleteComment(props.id)}} className="deleteButton btn-dark">Delete</Button>
</>):(<></>)

return (<>
<div className="comment" id={`comment--${props.id}`}><h3>{props.username}</h3><div><p>{props.comment}</p>{delbutton}</div></div>
</>) 
}

const deleteComment = (commentId) => {
    fetch(`http://localhost:8088/comments/${commentId}`, { method: 'DELETE' })
    window.location.reload()
}