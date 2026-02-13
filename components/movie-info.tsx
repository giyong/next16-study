import { API_URL } from "../app/contants";
import styles from "../styles/movie-info.module.css";


export async function getMovieInfo(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }
    console.log(response);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovieInfo(id);
    console.log(movie);
    return (
        <>
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold tracking-[0.3em] text-xs uppercase">
                    Featured Movie <span className="material-icons text-[10px]">verified</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.95] uppercase">
                    {movie.title}
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/60 max-w-2xl leading-relaxed italic border-l-2 border-primary pl-6 py-2">
                    {movie.tagline}
                </p>
                {/* <div className="flex flex-wrap gap-4 pt-6">
                    <button
                        className="bg-primary hover:bg-red-700 text-white flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all shadow-2xl shadow-primary/30 hover:scale-[1.02]">
                        <span className="material-icons">play_arrow</span> Watch Trailer
                    </button>
                    <button
                        className="bg-dark-surface hover:bg-dark-card border border-white/10 text-white flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all shadow-xl">
                        <span className="material-icons">bookmark_add</span> Add to Watchlist
                    </button>
                    <button
                        className="w-14 h-14 rounded-xl border border-white/10 bg-dark-surface flex items-center justify-center hover:bg-dark-card transition-all text-white/70 hover:text-white">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                </div> */}
            </header>
            <section className="space-y-6 bg-dark-surface p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    Synopsis
                </h3>
                <div className="space-y-6 text-lg leading-relaxed text-white/70 font-light">
                    <p>{movie.overview}</p>
                </div>
            </section>
        </>
    );
}