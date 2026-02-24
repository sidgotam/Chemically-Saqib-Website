"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Video {
    _id: string;
    title: string;
    topic: string;
    exam: string;
    difficulty: string;
    type: string;
}

export default function DashboardPage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchVideos = async () => {
        try {
            const res = await fetch("/api/videos");
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            setVideos(data);
        } catch (error) {
            toast.error("Failed to load videos");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this video?")) return;

        try {
            const res = await fetch(`/api/videos/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete");

            toast.success("Video deleted");
            fetchVideos();
        } catch (error) {
            toast.error("Failed to delete video");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <Link
                    href="/admin/videos/create"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    <Plus className="-ml-1 mr-2 h-5 w-5" />
                    Add New Video
                </Link>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                {isLoading ? (
                    <div className="p-6 text-center text-gray-500">Loading videos...</div>
                ) : videos.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">No videos found.</div>
                ) : (
                    <ul className="divide-y divide-gray-200">
                        {videos.map((video) => (
                            <li key={video._id} className="px-6 py-4 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">{video.title}</h3>
                                    <div className="text-sm text-gray-500 space-x-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {video.topic}
                                        </span>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            {video.exam}
                                        </span>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                            {video.difficulty}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <Link
                                        href={`/admin/videos/${video._id}`}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        <Edit className="h-5 w-5" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(video._id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
