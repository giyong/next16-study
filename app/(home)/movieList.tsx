"use client";

import { useEffect, useState } from "react";
import { getMovies } from "./page";
import Movie from "../../components/movie";

export default function HomePageMovieList() {
    const [res, setRes] = useState([]);
    const [movieArr, setMovieArr] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [isNextBtn, setIsNextBtn] = useState(true);

    const nexPage = () => {
        console.log(pageNo);
        setPageNo((no) => no + 1);
        console.log(pageNo);

        let nextPageNo = pageNo + 1;
        setPageNo(nextPageNo);
        
        let lastMovieNo = 5 * nextPageNo;
        setMovieArr(res.slice(0, lastMovieNo));

        console.log(`${res.length}/${lastMovieNo}`);

        if (res.length <= lastMovieNo) {
            setIsNextBtn(false);
        }
    };

    useEffect(() => {
        getMovies().then((res) => {
            setRes(res);
            setMovieArr(res.slice(0, 5 * pageNo));
        });
    }, []);

    return (
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
                    <button onClick={nexPage} className="group relative overflow-hidden bg-transparent border border-primary text-primary hover:text-white font-bold py-4 px-16 rounded-2xl transition-all">
                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"></div>
                        <span className="relative z-10 cursor-pointer">Load More Discoveries</span>
                    </button>
                </div>
                ) : null
            }
        </main>
    );     
}