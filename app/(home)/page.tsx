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
        <div>
        {/* header */}
        <header className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
            <div className="absolute inset-0">
                <img alt="Featured Movie" className="w-full h-full object-cover scale-105" src={movie.backdrop_path}/>
                <div className="absolute inset-0 hero-gradient"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent"></div>
            </div>
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                    {/* <span className="bg-primary/20 text-primary border border-primary/30 backdrop-blur-md text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Featured Today</span> */}
                    <div className="flex items-center gap-1.5 py-1 px-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                    <span className="material-icons text-yellow-500 text-sm">star</span>
                    <span className="font-bold text-white text-sm">{movie.vote_average ? movie.vote_average.toFixed(1) : "0"}</span>
                    </div>
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white leading-none">{movie.title}</h1>
                <p className="text-xl text-slate-300 mb-10 line-clamp-3 max-w-xl font-light leading-relaxed">{movie.overview}</p>
                <div className="flex flex-wrap gap-5">
                    {/* <button className="bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 flex items-center gap-3 shadow-[0_10px_30px_rgba(234,42,51,0.4)]">
                    <span className="material-icons">play_arrow</span>
                    Watch Trailer
                    </button> */}
                    <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-bold border border-white/10 transition-all flex items-center gap-3">
                        <span className="material-icons text-sm">info</span>
                        DETAILS
                    </button>
                </div>
                </div>
            </div>
        </header>

        {/* section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
            <div className="bg-charcoal/80 backdrop-blur-2xl border border-glass-border rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                    <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap shadow-lg shadow-primary/20">Trending</button>
                    <button className="text-slate-400 hover:text-white px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap bg-white/5 border border-transparent hover:border-glass-border transition-all">Action</button>
                    <button className="text-slate-400 hover:text-white px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap bg-white/5 border border-transparent hover:border-glass-border transition-all">Sci-Fi</button>
                    <button className="text-slate-400 hover:text-white px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap bg-white/5 border border-transparent hover:border-glass-border transition-all">Drama</button>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Sort by</span>
                        <div className="relative">
                            <select className="bg-white/5 border border-glass-border text-slate-200 text-sm rounded-xl focus:ring-1 focus:ring-primary focus:border-primary pr-10 pl-4 py-2.5 font-semibold appearance-none cursor-pointer">
                            <option className="bg-charcoal">Highest Rated</option>
                            <option className="bg-charcoal">Newest Releases</option>
                            <option className="bg-charcoal">Most Popular</option>
                            </select>
                            <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-sm">expand_more</span>
                        </div>
                    </div>
                    <div className="h-8 w-[1px] bg-glass-border"></div>
                    <button className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-primary border border-transparent hover:border-primary/30 transition-all">
                        <span className="material-icons">grid_view</span>
                    </button>
                </div>
            </div>
        </section>

        {/* main */}
        <HomePageMovieList />
        </div>
    );
}