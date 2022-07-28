const imdb_api = "http://imdb-api.com/en/API";
const mydb_api = "http://localhost:8088";

const apikey = "k_btf7zrnt";



export class Database
{
    static currentMovies;
    static currentUsers;
    
    static GetIsLoggedIn(){
        return !(localStorage.getItem("userId") == null)
    }


    static Get_CurrentUserId(){
        var user = localStorage.getItem("userId");
        return user;
    }

    static Set_CurrentUserId(id){
        localStorage.setItem("userId",id)
    }

    static GetUserByName(nameStr){
        this.currentUsers.forEach(user => {
            if(user.username === nameStr){
                return user;
            }
        });
        return undefined;
    }


    static mydb_get_users(){
         return fetch(`${mydb_api}/Users`)
        .then((response) => response.json())
        .then((data) => {this.currentUsers = data; return data})
    }

    static mydb_add_user(userObj){
        //wip
    }
    static mydb_like(movieId){
        //wip
    }
    static mydb_unlike(movieId){
        //wip
    }


    static imdb_movies_Search(term){
        return fetch(`${imdb_api}/SearchMovie/${apikey}/${term}`)
        .then((response) => response.json())
        .then((data) => data.results)
    }
    static imdb_movies_Top(ammount){   

    }
}

