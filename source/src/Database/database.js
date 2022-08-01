const mydb_api = "http://localhost:8088";




export class Database
{
    
    static GetIsLoggedIn(){
        return !(localStorage.getItem("user") == null)
    }


    static Get_CurrentUser(){
        var user = JSON.parse(localStorage.getItem("user"));
        return user;
    }

    static Set_CurrentUser(userObj){
        localStorage.setItem("user",JSON.stringify(userObj))
    }

    static mydb_get_users(){
         return fetch(`${mydb_api}/Users`)
        .then((response) => response.json())
        .then((data) => {return data})
    }

    static mydb_add_user(userName){
        var data = {"username":userName}
        fetch(`${mydb_api}/Users`, {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
    }



    static postComment = (user,comment,movie) =>{
        var commentObj = {"movieId":movie.id,"userId":user.id,"comment":comment};
        fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(commentObj)
        })
    }
    
    
    
    static removeLike = (likeId) => {
        fetch(`http://localhost:8088/likes/${likeId}`, { method: 'DELETE' })
    
    }
    
    static addLike = (userId,movieId)=>{
        var likeobj = {"userId":userId,"movieId":movieId};
        fetch("http://localhost:8088/likes", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(likeobj)
        })
    }
}

