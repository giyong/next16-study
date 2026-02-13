import type { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from "react";
import { getMovies } from '../../(home)/page';
import Navigation from '../../../components/navigation';
import MovieInfo from '../../../components/movie-info';
import MovieInfoTrailer from '../../../components/movie-info-trailer';
import MovieInfoImg, { getMovieInfoImg } from "../../../components/movie-info-img";

// export const metadata = {
//     title : "Movies"
// };

interface IParams {
    params: { id: string };
}

export async function generateStaticParams() {
    const movies = await getMovies()

    return movies.map((movie) => ({
        id: movie.id.toString(),
    }))
}

export async function generateMetadata({ params }: IParams) {
    const { id } = await params;
    const movie = await getMovieInfoImg(id);

    return {
        title: movie.title
    };
}

export default async function MovieDetail({ params }: IParams) {
    const { id } = await params;

    return (
        <>
            <Navigation />
            <div className="fixed inset-0 z-0 h-[80vh]">
                <img alt="Backdrop" className="w-full h-full object-cover opacity-60"
                    data-alt="Cinematic movie scene background with dramatic lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9NsKj-0vzWDXZzKqzR6tRlv0hTO_wC6pTt7AKdly36vUlxOENH-fg1bmzf5rrW_A2ls43hV9fh39wjMeh6N_GsRGqQhSK6L5pO35E8T2D_wztHZ3WlV1iMBBaf4bcZlsxIAhEgdMrukCQObfUnug-A0Z9I5RyRXtGtMa6WWU3iLDK1al6gYrPMPzoSeSs8MEDneZeuA5GliAvFNJxy_dVceVM2Tjp5oj6RO-SWnYCUXhHO7Xpoa_8NmGXAsrnOSBkhQNoDYdrgeyp" />
                <div className="absolute inset-0 backdrop-overlay"></div>
            </div>
            <main className="relative z-10 pt-10 pb-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <Suspense fallback={<h1>Loading... MovieInfoImg</h1>}>
                        {/* 좌측 포스터 이미지 영역 */}
                        <MovieInfoImg id={id} />
                    </Suspense>
                    <div className="lg:col-span-8 xl:col-span-9 space-y-12">
                        <Suspense fallback={<h1>Loading... MovieInfo</h1>}>
                            {/* 영화 제목 및 내용 */}
                            <MovieInfo id={id} />
                        </Suspense>
                        <Suspense fallback={<h1>Loading... MovieInfoTrailer</h1>}>
                            {/* 영화 관련 영상 */}
                            <MovieInfoTrailer id={id} />
                        </Suspense>
                    </div>
                </div>
            </main>
        </>
    );
}