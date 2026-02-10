import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../contants"

export const metadata = {
    title : "Home"
};

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    
    console.log(movies);
    return (
        <div className={styles.container}>
            {movies.map(movie => 
                <li key={movie.id}>
                    <Movie key={movie.id} 
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title} />
                </li>
            )}
        </div>
    );
}