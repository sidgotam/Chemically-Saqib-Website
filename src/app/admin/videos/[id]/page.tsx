"use client";

import VideoForm from "@/components/admin/VideoForm";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useParams } from "next/navigation";

export default function EditVideoPage() {
    const params = useParams();
    const id = params?.id as string;
    const [video, setVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchVideo = async () => {
            try {
                const response = await fetch(`/api/videos/${id}`);
                if (!response.ok) throw new Error("Failed to fetch video");
                const data = await response.json();
                setVideo(data);
            } catch (error) {
                toast.error("Failed to load video details");
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideo();
    }, [id]);

    if (isLoading) return <div>Loading...</div>;
    if (!video) return <div>Video not found</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Video</h1>
            <div className="bg-white shadow sm:rounded-lg p-6">
                <VideoForm initialData={video} />
            </div>
        </div>
    );
}
