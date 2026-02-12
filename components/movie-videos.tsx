import { API_URL } from "../app/contants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.slice(0, 8).map((video, index) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    );
}