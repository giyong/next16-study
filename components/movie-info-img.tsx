import { API_URL } from "../app/contants";
import styles from "../styles/movie-info.module.css";


export async function getMovieInfoImg(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }
    console.log(response);
    return response.json();
}

export default async function MovieInfoImg({ id }: { id: string }) {
    const movie = await getMovieInfoImg(id);
    console.log(movie);
    return (
        <>
            <aside className="lg:col-span-4 xl:col-span-3 space-y-6">
                <div className="sticky top-24">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[2/3] group relative">
                        <img alt="Movie Poster" className="w-full h-full object-cover"
                            data-alt="Vertical movie poster featuring a mysterious protagonist"
                            src={movie.poster_path} />
                        <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-lg text-sm shadow-xl">
                            {movie.vote_average ? movie.vote_average.toFixed(1) : "0"}
                        </div>
                    </div>
                    <div className="mt-8 space-y-6 bg-dark-surface border border-white/5 p-6 rounded-2xl shadow-xl">
                        <div className="flex flex-wrap gap-2">
                            <span
                                className="px-3 py-1 bg-white/5 text-white/80 text-[10px] font-bold rounded-md uppercase tracking-wider border border-white/10">Sci-Fi</span>
                            <span
                                className="px-3 py-1 bg-white/5 text-white/80 text-[10px] font-bold rounded-md uppercase tracking-wider border border-white/10">Action</span>
                            <span
                                className="px-3 py-1 bg-white/5 text-white/80 text-[10px] font-bold rounded-md uppercase tracking-wider border border-white/10">Drama</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                <span className="text-white/40">Status</span>
                                <span className="font-medium text-white">Released</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                <span className="text-white/40">Release Date</span>
                                <span className="font-medium text-white">{movie.release_date}</span>
                            </div>
                            {/* <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                <span className="text-white/40">Duration</span>
                                <span className="font-medium text-white">2h 28m</span>
                            </div> */}
                            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                <span className="text-white/40">Revenue</span>
                                <span className="font-medium text-emerald-400">${movie.revenue.toLocaleString()}</span>
                            </div>
                        </div>
                        {/* <div className="space-y-4 pt-2">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Director</h4>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                                <div
                                    className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center border border-white/10">
                                    <span className="material-icons text-primary text-xl">person</span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-white">Denis Villeneuve</p>
                                    <p className="text-[10px] text-white/40 uppercase">Director</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </aside>


            {/* <div className={styles.container}>
                <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
                <div className={styles.info}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <h3>평점 : {movie.vote_average ? movie.vote_average.toFixed(1) : "0"}</h3>
                    <p>{movie.overview}</p>
                    <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
                </div>
            </div> */}
        </>
    );
}