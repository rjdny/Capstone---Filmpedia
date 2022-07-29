const imdb_api = "http://imdb-api.com/en/API";
const mydb_api = "http://localhost:8088";

const apikey = "k_btf7zrnt";



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
    static mydb_like(movieId){
        //wip
    }
    static mydb_unlike(movieId){
        //wip
    }

}

