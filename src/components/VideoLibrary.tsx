"use client";

import { useState } from "react";
import styles from "@/app/videos/page.module.css";
import VideoCard from "@/components/VideoCard";
import { getThumbnailUrl, getVideoUrl } from "@/data/videos";

const topics = ["All", "Organic", "Inorganic", "Physical", "General"];
const exams = ["All", "JEE", "NEET", "Boards", "General"];

interface Video {
    _id: string;
    title: string;
    topic: string;
    exam: string;
    difficulty: string;
    type: "video" | "playlist";
    youtubeId: string;
    customGradient?: string;
}

interface VideoLibraryProps {
    initialVideos: Video[];
}

export default function VideoLibrary({ initialVideos }: VideoLibraryProps) {
    const [selectedTopic, setSelectedTopic] = useState("All");
    const [selectedExam, setSelectedExam] = useState("All");

    const filteredVideos = initialVideos.filter(video => {
        const topicMatch = selectedTopic === "All" || video.topic === selectedTopic;
        const examMatch = selectedExam === "All" || video.exam === selectedExam;
        return topicMatch && examMatch;
    });

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Video Library</h1>
                <p className={styles.subtitle}>Browse our extensive collection of chemistry lessons.</p>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Filters */}
                <aside className={styles.filters}>
                    <div className={styles.filterGroup}>
                        <h3>Topic</h3>
                        {topics.map(topic => (
                            <button
                                key={topic}
                                className={`${styles.filterBtn} ${selectedTopic === topic ? styles.active : ''}`}
                                onClick={() => setSelectedTopic(topic)}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Exam</h3>
                        {exams.map(exam => (
                            <button
                                key={exam}
                                className={`${styles.filterBtn} ${selectedExam === exam ? styles.active : ''}`}
                                onClick={() => setSelectedExam(exam)}
                            >
                                {exam}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Video Grid */}
                <div className={styles.videoGrid}>
                    {filteredVideos.length > 0 ? (
                        filteredVideos.map(video => (
                            <VideoCard
                                key={video._id}
                                title={video.title}
                                topic={video.topic}
                                thumbnailUrl={getThumbnailUrl(video.youtubeId, video.type)}
                                videoUrl={getVideoUrl(video.youtubeId, video.type)}
                                customStyle={{ gradient: video.customGradient || '' }}
                            />
                        ))
                    ) : (
                        <p className={styles.noResults}>No videos found matching your filters.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
