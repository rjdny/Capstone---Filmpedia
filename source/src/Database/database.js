const imdb_api = "http://imdb-api.com/en/API";
const apikey = "k_btf7zrnt";

const mydb_api = "http://localhost:8088";


export class Database
{
    static currentMovies;

    static mydb_like(movieId){

    }
    static mydb_unlike(movieId){

    }
    static imdb_movies_Search(term){
        fetch(`${imdb_api}/SearchMovie/${apikey}/${term}`)
        .then((response) => response.json())
        .then((data) => data.results)
        .then((x) => this.currentMovies = x)
        return this.currentMovies;
    }
    static imdb_movies_Top(ammount){   

    }
}

