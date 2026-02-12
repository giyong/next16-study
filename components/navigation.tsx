"use client";

import HomePageMovieList from "../app/(home)/movieList";

export default function Navigation() {

    const handleSearchInput = (e) => {
        if (e.key === "Enter") {
            console.log(`e.target.value.toUpperCase()=${e.target.value.toUpperCase()}`);
            HomePageMovieList();
        }
    };

    return (
        <nav className="sticky top-0 z-50 nav-blur border-b border-glass-border">

            {/* 검색어  */}
            <input onKeyUp={handleSearchInput} className="block w-full pl-12 pr-4 py-3 border border-glass-border rounded-2xl bg-white/5 text-sm focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white/10 placeholder-slate-500 transition-all text-white outline-none" placeholder="Search movies, actors, directors..." type="text" />

        </nav>
    );
}