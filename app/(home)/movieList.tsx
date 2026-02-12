"use client";

import { useEffect, useState } from "react";
import { getMovies } from "./page";
import Movie from "../../components/movie";
// import { useRouter } from "next/navigation";
import Link from "next/link";

interface IMovieProps1 {
    title: string;
    id: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    backdrop_path: string;
    overview: string;
}

const PAGE_SIZE = 5;

export default function HomePageMovieList() {
    console.log("HomePageMovieList");
    const [res, setRes] = useState([]);
    const [movieArr, setMovieArr] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [isNextBtn, setIsNextBtn] = useState(true);
    const [movie, setMovie] = useState({} as IMovieProps1);

    // const router = useRouter();

    // const handleLogo = () => {
    //     router.push("/");
    // };

    const handleSearchInput = (e) => {
        if (e.key === "Enter") {
            let arr = res.filter((o) => o.title.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1);

            if (arr.length > 0) {
                setMovieArr(arr);
                setMovie(arr[0]);
                setIsNextBtn(false);
            }
        }
    };

    const handleNexPageBtn = () => {
        let nextPageNo = pageNo + 1;
        setPageNo(nextPageNo);

        let lastMovieNo = nextPageNo * PAGE_SIZE;
        setMovieArr(res.slice(0, lastMovieNo));

        if (res.length <= lastMovieNo) {
            setIsNextBtn(false);
        }
    };

    useEffect(() => {
        getMovies().then((res) => {
            setRes(res);
            setMovieArr(res.slice(0, PAGE_SIZE * pageNo));
            setMovie(res[0]);
            // console.log(res[0].backdrop_path);
        });
    }, []);

    return (
        <div>
            <nav className="sticky top-0 z-50 nav-blur border-b border-glass-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* 리액트 로고 */}
                        {/* <a className="active:scale-95 overflow-hidden transition-transform relative items-center text-primary dark:text-primary-dark p-1 whitespace-nowrap outline-link rounded-full 3xl:rounded-xl inline-flex text-lg font-normal gap-2" href="/" style={{ "color": "rgb(88 196 220" }}>
                            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out">
                                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                                <g stroke="currentColor" stroke-width="1" fill="none">
                                    <ellipse rx="10" ry="4.5"></ellipse>
                                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                                </g>
                            </svg>
                            <span className="sr-only 3xl:not-sr-only">React</span>
                        </a> */}
                        <Link href={"/"}>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="bg-primary p-2 rounded-xl shadow-[0_0_20px_rgba(234,42,51,0.3)] transition-transform group-hover:scale-105">
                                    <span className="material-icons text-white">movie</span>
                                </div>
                                <span className="text-2xl font-bold tracking-tight uppercase text-white">Next<span className="text-primary"> 16.1</span></span>
                            </div>
                        </Link>
                        <div className="flex-1 max-w-xl mx-12 hidden md:block">
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-icons text-slate-500 text-lg group-focus-within:text-primary transition-colors">search</span>
                                </span>
                                {/* 검색어  */}
                                <input onKeyUp={handleSearchInput} className="block w-full pl-12 pr-4 py-3 border border-glass-border rounded-2xl bg-white/5 text-sm focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white/10 placeholder-slate-500 transition-all text-white outline-none" placeholder="Search movies, actors, directors..." type="text" />
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            {/* <div className="hidden lg:flex items-center gap-8">
                            <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors" href="#">Discover</a>
                            <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors" href="#">Awards</a>
                            <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors" href="#">Community</a>
                            </div>
                            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/40 p-0.5 hover:border-primary transition-colors cursor-pointer">
                            <img alt="Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF69wceSS5zSpDzTomSwV-9P9p_DlVWbrtvyxXB8nKMO3XdO0aywE4juhGkZTsil79HVEm2cdhyGB2u2GKTp63JnC6hef4CkRmW5oVeL41FW0KyALkvLIrxu8l5cb_dKmd6W_6g6r7GSizsTJNackVlctpcPMP5JY_iCls4TI3zhzkMYBZC5vgbbp4H7X7jvwsV-0_JykhNsNd-xVvrh142Eem_6P9Hk2JDsI-zQBzKpZUU7qfCFACH_tJ4CYsagfKK0msuFKxA23u"/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
            {/* header */}
            < header className="relative w-full h-[85vh] min-h-[600px] overflow-hidden" >
                <div className="absolute inset-0">
                    <img alt="Featured Movie" className="w-full h-full object-cover scale-105" src={movie.backdrop_path} />
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
            </header >

            {/* section */}
            < section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10" >
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
            </section >

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
                        <span className="w-2 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(234,42,51,0.5)]"></span>
                        Top Rated This Week
                    </h2>
                    <a className="group text-primary text-sm font-bold hover:text-white transition-all flex items-center gap-1" href="#">
                        EXPLORE ALL <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">chevron_right</span>
                    </a>
                </div>
                {/* 영화 포스터 목록 */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {movieArr.map(o =>
                        <Movie key={o.id}
                            id={o.id}
                            poster_path={o.poster_path}
                            title={o.title}
                            vote_average={o.vote_average}
                            release_date={o.release_date} />
                    )}
                </div>
                {(isNextBtn) ? (
                    <div className="mt-20 flex justify-center cursor-pointer">
                        <button onClick={handleNexPageBtn} className="group relative overflow-hidden bg-transparent border border-primary text-primary hover:text-white font-bold py-4 px-16 rounded-2xl transition-all">
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"></div>
                            <span className="relative z-10 cursor-pointer">Load More Discoveries</span>
                        </button>
                    </div>
                ) : null
                }
            </main>
        </div>
    );
}