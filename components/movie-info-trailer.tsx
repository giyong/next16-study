import { API_URL } from "../app/contants";
import styles from "../styles/movie-info.module.css";


async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }
    return response.json();
}

export default async function MovieInfoTrailer({ id }: { id: string }) {
    const videos = await getVideos(id);
    console.log(videos);
    return (
        <>
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                        Trailers &amp; Clips
                    </h3>
                    {/* <div className="flex gap-3">
                        <button
                            className="p-3 rounded-xl bg-dark-surface border border-white/5 text-white/30 cursor-not-allowed">
                            <span className="material-icons">chevron_left</span>
                        </button>
                        <button
                            className="p-3 rounded-xl bg-dark-surface border border-white/5 hover:border-primary/50 text-primary transition-all shadow-lg">
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div> */}
                </div>
                <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar snap-x">
                    <div className="min-w-[320px] md:min-w-[440px] snap-start group cursor-pointer">
                        {videos.slice(0, 8).map((video, index) => (
                            <>
                                <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-lg">
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
                            </>
                        ))}

                    </div>
                </div>
            </section >
        </>
    );
}