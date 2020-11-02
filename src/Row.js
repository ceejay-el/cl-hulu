import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Row.css";

//variable declarations
const tmdb_poster_url = "https://image.tmdb.org/t/p/original/";
// end of variable declarations

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(function(){
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="movie_posters">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    class = {`movie_poster ${isLargeRow && "movie_posterLarge"}`}
                    src={`${tmdb_poster_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row;
