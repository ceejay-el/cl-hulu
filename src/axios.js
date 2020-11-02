import axios from "axios";

// call TMDB
const tmdb_url = axios.create({ baseURL: "https://api.themoviedb.org/3"});

export default tmdb_url;