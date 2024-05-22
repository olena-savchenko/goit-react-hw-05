import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../services/api";
import axios from "axios";

export default function HomePage () {

fetchTrendingMovies();
    return <div>Homepage</div> 
}
   