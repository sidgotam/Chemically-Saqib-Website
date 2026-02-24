import VideoCard from "./VideoCard";
import styles from "./FeaturedVideos.module.css";
import Link from "next/link";
import { videos as staticVideos, getThumbnailUrl, getVideoUrl } from "@/data/videos";
import dbConnect from "@/lib/db";
import Video from "@/models/Video";

const FeaturedVideos = async () => {
    let videos = [];
    try {
        await dbConnect();
        // Fetch latest 3 videos from DB
        const dbVideos = await Video.find({}).sort({ createdAt: -1 }).limit(3);

        if (dbVideos.length > 0) {
            videos = dbVideos.map(v => ({
                id: v._id.toString(),
                title: v.title,
                topic: v.topic,
                type: v.type,
                youtubeId: v.youtubeId,
                customStyle: { gradient: v.customGradient }
            }));
        } else {
            // Fallback to static if DB is empty
            videos = staticVideos.slice(0, 3);
        }

    } catch (error) {
        console.warn("Database connection failed, falling back to static data.");
        videos = staticVideos.slice(0, 3);
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Latest & Popular Lessons</h2>
                <div className={styles.grid}>
                    {videos.map((video) => (
                        <VideoCard
                            key={video.id}
                            title={video.title}
                            topic={video.topic}
                            // Handle both DB (youtubeId) and Static (id) structure or normalize them
                            thumbnailUrl={getThumbnailUrl(video.youtubeId || video.id, video.type)}
                            videoUrl={getVideoUrl(video.youtubeId || video.id, video.type)}
                            customStyle={video.customStyle}
                        />
                    ))}
                </div>
                <div className={styles.viewMore}>
                    <Link href="/videos" className="btn btn-secondary">View All Videos</Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedVideos;
