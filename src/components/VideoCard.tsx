import styles from "./VideoCard.module.css";
import { PlayCircle } from "lucide-react";

interface VideoCardProps {
    title: string;
    topic: string;
    thumbnailUrl: string; // Or embedUrl if using iframe directly
    videoUrl: string; // YouTube link
    customStyle?: {
        gradient: string;
        icon?: string;
    };
}

const VideoCard = ({ title, topic, thumbnailUrl, videoUrl, customStyle }: VideoCardProps) => {
    return (
        <div className={styles.card}>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.thumbnailWrapper}>
                {thumbnailUrl === "placeholder" && customStyle ? (
                    <div
                        className={styles.customThumbnail}
                        style={{ background: customStyle.gradient }}
                    >
                        <div className={styles.overlay} style={{ opacity: 1, background: 'transparent' }}>
                            <PlayCircle size={48} className={styles.playIcon} />
                        </div>
                    </div>
                ) : (
                    <>
                        <img src={thumbnailUrl} alt={title} className={styles.thumbnail} />
                        <div className={styles.overlay}>
                            <PlayCircle size={48} className={styles.playIcon} />
                        </div>
                    </>
                )}
            </a>
            <div className={styles.content}>
                <span className={styles.topic}>{topic}</span>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </div>
    );
};

export default VideoCard;
