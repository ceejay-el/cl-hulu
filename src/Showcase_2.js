import React, {useState, useEffect} from 'react';
import axios from "./axios";
import requests from "./requests";
import "./Showcase.css";

function Showcase_2(){
    const [movie, setMovie] = useState([]);

    useEffect(function(){
        async function fetchData(){
            const request = await axios.get(requests.fetchPopular);
            setMovie(request.data.results[Math.floor(Math.random() * (request.data.results.length))]);
            return request;
        }
        fetchData();
    }, []);
    
    function truncateOverview(overview, n=200){
        return overview?.length > n ? overview.substr(0, n-1) + "..." : overview;
    }

    return (
        <header
            className="showcase_2"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="showcase_contents">
                <h1 className="title"> {movie?.title || movie?.name || movie?.original_name} </h1>
                <h3 className="showcase_desc">{truncateOverview(movie?.overview, 300)}</h3>
                <div className="showcase_button">
                    <button className="showcase-btn"> Play </button>
                    <button className="showcase-btn"> Details </button>
                </div>
            </div>
            <div className="fade-on-scroll"></div>          
        </header>
    )
}

export default Showcase_2;
