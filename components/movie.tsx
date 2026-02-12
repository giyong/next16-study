"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation";

// 영화 정보 타입
interface IMovieProps {
    title: string;
    id: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}

export default function Movie({ id, title, poster_path, vote_average, release_date }: IMovieProps) {
    const router = useRouter();

    // 영화 상세 화면으로 이동
    const goPageMovie = () => {
        router.push(`/movies?id=${id}`);
    };

    return (
        <div className="group cursor-pointer" onClick={goPageMovie}>
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 border border-glass-border transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <img alt="Movie Poster" className="w-full h-full object-cover transition-transform duration-700" src={poster_path} />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <button className="bg-white text-obsidian w-full py-3 rounded-xl text-sm font-black flex items-center justify-center gap-2 mb-2 hover:bg-primary hover:text-white transition-colors">
                        <span className="material-icons text-sm">visibility</span> DETAILS
                    </button>
                </div>
                <div className="absolute top-3 right-3 bg-obsidian/60 backdrop-blur-xl border border-white/10 px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center text-primary">
                    <span className="material-icons text-[14px] mr-1">star</span> {vote_average.toFixed(1)}
                </div>
                <div className="absolute inset-0 pointer-events-none card-inner-gradient"></div>
            </div>
            <h3 className="font-bold text-base mb-1 line-clamp-1 group-hover:text-primary transition-colors text-white tracking-tight">{title}</h3>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">{release_date.replaceAll("-", ".")}</p>
        </div>
    );
}