import type { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import { getMovies } from '../../(home)/page';
import { goMain } from '../../lib/util';
import Link from 'next/link';

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
    const movie = await getMovieInfo(id);

    return {
        title: movie.title
    };
}

export default async function MovieDetail({ params }: IParams) {
    const { id } = await params;

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
                            {/* <div className="relative group">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-icons text-slate-500 text-lg group-focus-within:text-primary transition-colors">search</span>
                                </span>
                                <input onKeyUp={handleSearchInput} className="block w-full pl-12 pr-4 py-3 border border-glass-border rounded-2xl bg-white/5 text-sm focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white/10 placeholder-slate-500 transition-all text-white outline-none" placeholder="Search movies, actors, directors..." type="text" />
                            </div> */}
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
            <div className="fixed inset-0 z-0 h-[80vh]">
                <img alt="Backdrop" className="w-full h-full object-cover opacity-60"
                    data-alt="Cinematic movie scene background with dramatic lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9NsKj-0vzWDXZzKqzR6tRlv0hTO_wC6pTt7AKdly36vUlxOENH-fg1bmzf5rrW_A2ls43hV9fh39wjMeh6N_GsRGqQhSK6L5pO35E8T2D_wztHZ3WlV1iMBBaf4bcZlsxIAhEgdMrukCQObfUnug-A0Z9I5RyRXtGtMa6WWU3iLDK1al6gYrPMPzoSeSs8MEDneZeuA5GliAvFNJxy_dVceVM2Tjp5oj6RO-SWnYCUXhHO7Xpoa_8NmGXAsrnOSBkhQNoDYdrgeyp" />
                <div className="absolute inset-0 backdrop-overlay"></div>
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <aside className="lg:col-span-4 xl:col-span-3 space-y-6">
                        <div className="sticky top-24">
                            <div
                                className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[2/3] group relative">
                                <img alt="Movie Poster" className="w-full h-full object-cover"
                                    data-alt="Vertical movie poster featuring a mysterious protagonist"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLLAd1QAQIa4v79_vpyF5FpyrXQHEB8OeOVzP_YzAacqQ3IYH7C_mJF0yjMkM5kSt_KSr5cZbREyzR_fAp1JFFsCEZZRZ4FumP9Yyef40kNDwzR9QZZbA9J1q0ZMyce5iVw4Tdvp4M5r01aZehkHRO385LybnkSYkdhyiHELKDQ9hvcGejZM-_mOyHAw7DhufiaXCx-oUFJ7FQ0CFw0Kmq-YFs4OPv37fMKL_TRG87ZrCKEh6nM609xQ_BEok8q_E-uDjYwfNuTc6h" />
                                <div
                                    className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-lg text-sm shadow-xl">
                                    8.4
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
                                        <span className="font-medium text-white">Mar 15, 2024</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                        <span className="text-white/40">Duration</span>
                                        <span className="font-medium text-white">2h 28m</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                        <span className="text-white/40">Budget</span>
                                        <span className="font-medium text-emerald-400">$165,000,000</span>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-2">
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
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="lg:col-span-8 xl:col-span-9 space-y-12">
                        <header className="space-y-4">
                            <div className="flex items-center gap-2 text-primary font-bold tracking-[0.3em] text-xs uppercase">
                                Featured Movie <span className="material-icons text-[10px]">verified</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.95] uppercase">
                                CHRONO <span className="text-primary italic">STORM</span>
                            </h1>
                            <p
                                className="text-xl md:text-2xl font-light text-white/60 max-w-2xl leading-relaxed italic border-l-2 border-primary pl-6 py-2">
                                In a world where time is a currency, one man must steal a second to save a lifetime.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-6">
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
                            </div>
                        </header>
                        <section className="space-y-6 bg-dark-surface p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                            <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                Synopsis
                            </h3>
                            <div className="space-y-6 text-lg leading-relaxed text-white/70 font-light">
                                <p>
                                    Set in the near future where technological advancements have allowed humans to harness the
                                    power of temporal shifts, Elias Vance discovers a glitch in the "Chrono Storm"—a massive
                                    weather event that resets the local timeline every 24 hours. When his daughter is caught in
                                    a permanent temporal loop, Elias must navigate a landscape of shifting memories and
                                    corporate espionage to rewrite the history of her disappearance.
                                </p>
                                <p>
                                    Facing an enigmatic antagonist who controls the storm, Elias's journey takes him to the edge
                                    of time itself, questioning what it truly means to live in the present.
                                </p>
                            </div>
                        </section>
                        <section className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                                    Trailers &amp; Clips
                                </h3>
                                <div className="flex gap-3">
                                    <button
                                        className="p-3 rounded-xl bg-dark-surface border border-white/5 text-white/30 cursor-not-allowed">
                                        <span className="material-icons">chevron_left</span>
                                    </button>
                                    <button
                                        className="p-3 rounded-xl bg-dark-surface border border-white/5 hover:border-primary/50 text-primary transition-all shadow-lg">
                                        <span className="material-icons">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar snap-x">
                                <div className="min-w-[320px] md:min-w-[440px] snap-start group cursor-pointer">
                                    <div
                                        className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-lg">
                                        <img alt="Trailer 1"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            data-alt="Action-packed scene from the official trailer"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdARzoaR4qeBuNcadF-8D_LZ72q671HtiC3BYigdFB0xRhgrSOJHx_GCoa0eO_StdPJRw_G39piyCyrDT4N4MW_k8dngnag_QMfpno5HiUqGCd6aCKz4AzE3IfbzGNobzYv0unCZRbLbNMdI7CwrZVw3Y6BrRllqcWHvngyp4Bk5mklmOO-XswcKWIcMc23nunCfiTOgpzZOKY3MJkjPbKi77r0sOo-KzZ4tsqVyf-6mWA3o2PacKZm35vRKHxhFU8V_vUxQdry060" />
                                        <div
                                            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                                            <div
                                                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                                                <span className="material-icons text-white text-4xl">play_arrow</span>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 right-4">
                                            <span
                                                className="bg-black/80 backdrop-blur-md px-2 py-1 text-[10px] font-bold rounded text-white border border-white/10">02:45</span>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-1">
                                        <h4 className="font-bold text-lg text-white group-hover:text-primary transition-colors">
                                            Official Trailer #1</h4>
                                        <p className="text-sm text-white/40">2.4M views • 1 week ago</p>
                                    </div>
                                </div>
                                <div className="min-w-[320px] md:min-w-[440px] snap-start group cursor-pointer">
                                    <div
                                        className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-lg">
                                        <img alt="Trailer 2"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            data-alt="Atmospheric shot of a city skyline at dusk"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-dRJ7KmMzVTcplEeedu0een2TtS-X5NXhzhGwj5o69vlEqGBm3OwIZKNQRFyvsHkRIf9bL6upkxHAl6TAE4TWtItF9aEKIc2I1wXg9S2vG5WXEGwndPv5CmUzF3JFgZmLdgC5mECGLOjJe5W2Wv4zciCCecxi2ck4tHTuOzG7zlu1eiCN23xZzkWMr-SZ_ipcJIZzv24tis3W2_R9nsO10xPNFadz0BYMuv2zScdmj1AuvG6uNHgAbMINItgaV3xLiVjzGWOgnfas" />
                                        <div
                                            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                                            <div
                                                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                                                <span className="material-icons text-white text-4xl">play_arrow</span>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 right-4">
                                            <span
                                                className="bg-black/80 backdrop-blur-md px-2 py-1 text-[10px] font-bold rounded text-white border border-white/10">01:12</span>
                                        </div>
                                    </div>
                                    <div className="mt-5 px-1">
                                        <h4 className="font-bold text-lg text-white group-hover:text-primary transition-colors">
                                            Official Teaser</h4>
                                        <p className="text-sm text-white/40">840K views • 1 month ago</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="space-y-8">
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
                        </section>
                    </div>
                </div>
            </main>
            {/* <Suspense fallback={<h1>Loading... MovieInfo</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <Suspense fallback={<h1>Loading... MovieVideos</h1>}>
                <MovieVideos id={id} />
            </Suspense> */}
        </div>
    );
}