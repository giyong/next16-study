import type { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from "react";
import MovieInfoImg, { getMovieInfoImg } from "../../../components/movie-info-img";
import MovieVideos from "../../../components/movie-videos";
import { getMovies } from '../../(home)/page';
import { goMain } from '../../lib/util';
import Link from 'next/link';
import Navigation from '../../../components/navigation';
import MovieInfo from '../../../components/movie-info';
import MovieInfoTrailer from '../../../components/movie-info-trailer';

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
                        <MovieInfoImg id={id} />
                    </Suspense>
                    <div className="lg:col-span-8 xl:col-span-9 space-y-12">
                        <Suspense fallback={<h1>Loading... MovieInfo</h1>}>
                            <MovieInfo id={id} />
                        </Suspense>
                        <Suspense fallback={<h1>Loading... MovieInfoTrailer</h1>}>
                            <MovieInfoTrailer id={id} />
                        </Suspense>

                        {/* <section className="space-y-8">
                            <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                Top Cast
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                                <div className="space-y-4 group cursor-pointer text-center">
                                    <div className="relative mx-auto w-32 h-32 md:w-full md:aspect-square">
                                        <div
                                            className="absolute inset-0 rounded-full border-2 border-white/5 group-hover:border-primary transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100">
                                        </div>
                                        <img alt="Cast 1"
                                            className="w-full h-full object-cover rounded-full border-2 border-white/10 p-1 grayscale group-hover:grayscale-0 transition-all duration-500"
                                            data-alt="Portrait of lead actor looking intense"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDME1P-dsecDTZMws6B4ojsW-m5n83j63cAXN84eIcTEN2xDo9HV2d2K94R6tXWbzZpsmPc3uPkMt9Annes8lBSaKXJJaAdY1ZaiTwOus8hQcFelZvshCbR7bsj0lWi0pNIL5x7wh7BjzhACtlyXETYLnAM8SRd-5ARVGU1gBV_mE9q2SJQiPWfWwCKtFMYlKdfjRJfmuwG-hz-8r03XgvqKThmicNAHfUwZwy6VzpjXcQDgCDOnRu_UXRB7SbHHioakvC9PHULXpxr" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-base text-white">Alexander Black</p>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Elias Vance</p>
                                    </div>
                                </div>
                                <div className="space-y-4 group cursor-pointer text-center">
                                    <div className="relative mx-auto w-32 h-32 md:w-full md:aspect-square">
                                        <div
                                            className="absolute inset-0 rounded-full border-2 border-white/5 group-hover:border-primary transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100">
                                        </div>
                                        <img alt="Cast 2"
                                            className="w-full h-full object-cover rounded-full border-2 border-white/10 p-1 grayscale group-hover:grayscale-0 transition-all duration-500"
                                            data-alt="Portrait of lead actress smiling slightly"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3R7OonyPnunFdku6VCTkF8M3Yz_1AyJYRag8xxK9Rncb2wZoliyTv7SoOSGZC5VwY6bi8LOU_vm9hIzw0iqyBZnDdAxOHO8ah0udUFWJB_cj2GNo15LrOizQS4hZfaZ-3r4cLHm1na7jfiUIoZdvdbHlBIBRmlXS52Q9_9Zhk0pZKUtVSS7MKszqdVBmoILRW8wKhFVE8HUvTheE8fXgqze5VCFEdLFIifpM6iAj5PyKkGdbSqtUwY8ci70cRa6Xhx1kLrm00f_D0" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-base text-white">Sarah Jenkins</p>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Maya Vance</p>
                                    </div>
                                </div>
                                <div className="space-y-4 group cursor-pointer text-center">
                                    <div className="relative mx-auto w-32 h-32 md:w-full md:aspect-square">
                                        <div
                                            className="absolute inset-0 rounded-full border-2 border-white/5 group-hover:border-primary transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100">
                                        </div>
                                        <img alt="Cast 3"
                                            className="w-full h-full object-cover rounded-full border-2 border-white/10 p-1 grayscale group-hover:grayscale-0 transition-all duration-500"
                                            data-alt="Portrait of supporting male actor"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuU57SA6dZcXduPmLnemKyPZspGw6TIS6jyE0c1eLCZZbD9-XQSVRGmHJRvSzCG07HexwgND_vSb2-1eP1ZjsIRBYYC_zpBYWmaXL-WQZsndwguaLLRsSsboQ2W7DuFp6s0AlVflfta6qagL444bF8MOEublz8ToGwbOKNHapkD6H7U1jl5MX8AmIrCQf2axY765fXIWu6vmTk51awnDJHpEzrY7FNkkxS1dw-kuZE68x1E5NJz5DHFXy5UDSwRGHpWYh3hurv1AeI" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-base text-white">Marcus Stone</p>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Dr. Aris</p>
                                    </div>
                                </div>
                                <div className="space-y-4 group cursor-pointer text-center">
                                    <div className="relative mx-auto w-32 h-32 md:w-full md:aspect-square">
                                        <div
                                            className="absolute inset-0 rounded-full border-2 border-white/5 group-hover:border-primary transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100">
                                        </div>
                                        <img alt="Cast 4"
                                            className="w-full h-full object-cover rounded-full border-2 border-white/10 p-1 grayscale group-hover:grayscale-0 transition-all duration-500"
                                            data-alt="Portrait of supporting female actor"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD08igctT-K4eJCBbxkSkeFtCSDn3F857N_bw36fdKRyMHPd4FQUdpgMYgSOzLpCigtjafYY_bCeBXFuSfk1h4Tt7f3dPgu6NiSoJEAq_sUCxJtkoj0THYgzKNnJEiseL1DZWpMRowLhUCXV0rUYW6gqshTkMFpq9Dam6KBCG0R-mIP9fAauyN8HkSm8rHoFFfQiZfjtnndYX913lNXJf_BWdeOy6LdLINdRfP8aCQh8qP7WWqr1LmKtBgpYrOo4SgspTskopefSEqO" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-base text-white">Elena Rossi</p>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Cmdr. Lin</p>
                                    </div>
                                </div>
                                <div className="hidden md:block space-y-4 group cursor-pointer text-center">
                                    <div className="relative mx-auto w-32 h-32 md:w-full md:aspect-square">
                                        <div
                                            className="absolute inset-0 rounded-full border-2 border-white/5 group-hover:border-primary transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100">
                                        </div>
                                        <img alt="Cast 5"
                                            className="w-full h-full object-cover rounded-full border-2 border-white/10 p-1 grayscale group-hover:grayscale-0 transition-all duration-500"
                                            data-alt="Portrait of the movie antagonist"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2mqVksYlpj24qFidh13V3Wxyi1iDPZlT3Z1oy0yvJYTcLDfpt3UdmTKVVcvQpRcCg6V1QALZ6UDpo5oluPK0Sk-thsOs3qZuI3Q3FjqgplwysTZzsbcVZ8cdpH9iW9Y8BAQTLyxdq3bgnAhXXF-ngsU_lSTxfZ1gvRbghNoUg1zl58xEWThR0ftZFrIEkh673G09THatYAEXzX_PGSHO7z4-vjLr6h66C_Eags6iwd4a1mJAxGpXt6hUi0zA7rgL2M0teACAqGIv5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-base text-white">David Chen</p>
                                        <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Victor Kane</p>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                    </div>
                </div>
            </main>
            {/* <Suspense fallback={<h1>Loading... MovieInfo</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <Suspense fallback={<h1>Loading... MovieVideos</h1>}>
                <MovieVideos id={id} />
            </Suspense> */}
        </>
    );
}