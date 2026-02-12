import { API_URL } from "../contants"
// import Movie from "../../components/movie";
import HomePageMovieList from "./movieList";
// import { useState } from "react";

export async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const resJson = await getMovies();
    const movie = resJson[0];
    // const [movieArr, setMovieArr] = useState(resJson.slice(0, 5));

    console.log(resJson);
    return (
        < HomePageMovieList />
    );
}