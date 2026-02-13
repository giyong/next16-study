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
                    {videos.slice(0, 4).map((video, index) => (
                        <div key={video.id} className="min-w-[320px] md:min-w-[440px] snap-start group cursor-pointer">
                            <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-lg">
                                <iframe
                                    width={"100%"} height={"100%"}
                                    src={`https://youtube.com/embed/${video.key}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={video.name}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}