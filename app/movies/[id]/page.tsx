import type { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import { getMovies } from '../../(home)/page';

// export const metadata = {
//     title : "Movies"
// };

interface IParams {
    params: {id : string};
}

export async function generateStaticParams() {
  const movies = await getMovies()

  return movies.map((movie) => ({
    id: movie.id.toString(),
  }))
}

export async function generateMetadata({ params } : IParams) {
    const { id } = await params;
    const movie = await getMovieInfo(id);

    return {
        title : movie.title
    };
}

export default async function MovieDetail({ params } : IParams) {
    const { id } = await params;

    return (
        <div>
            <Suspense fallback={<h1>Loading... MovieInfo</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            
            <Suspense fallback={<h1>Loading... MovieVideos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>);
}