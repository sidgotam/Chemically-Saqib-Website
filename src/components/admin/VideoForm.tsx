"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const videoSchema = z.object({
    title: z.string().min(1, "Title is required"),
    topic: z.enum(["Organic", "Inorganic", "Physical", "General"]),
    exam: z.enum(["JEE", "NEET", "Boards", "General"]),
    difficulty: z.enum(["Easy", "Medium", "Hard"]),
    type: z.enum(["video", "playlist"]),
    youtubeId: z.string().min(1, "YouTube ID is required"),
    customGradient: z.string().optional(),
});

type VideoFormProps = {
    initialData?: any;
    onSuccess?: () => void;
};

export default function VideoForm({ initialData, onSuccess }: VideoFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(videoSchema),
        defaultValues: initialData || {
            topic: "Organic",
            exam: "JEE",
            difficulty: "Medium",
            type: "video",
            customGradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        },
    });

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            const url = initialData
                ? `/api/videos/${initialData._id}`
                : "/api/videos";
            const method = initialData ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Failed to save video");
            }

            toast.success(initialData ? "Video updated" : "Video created");
            router.refresh();
            if (onSuccess) onSuccess();
            if (!initialData) reset();
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    {...register("title")}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    placeholder="Video Title"
                />
                {errors.title && (
                    <p className="text-red-500 text-xs mt-1">{errors.title.message as string}</p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Topic</label>
                    <select
                        {...register("topic")}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    >
                        <option value="Organic">Organic</option>
                        <option value="Inorganic">Inorganic</option>
                        <option value="Physical">Physical</option>
                        <option value="General">General</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Exam</label>
                    <select
                        {...register("exam")}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    >
                        <option value="JEE">JEE</option>
                        <option value="NEET">NEET</option>
                        <option value="Boards">Boards</option>
                        <option value="General">General</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                    <select
                        {...register("difficulty")}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <select
                        {...register("type")}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    >
                        <option value="video">Video</option>
                        <option value="playlist">Playlist</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">YouTube ID</label>
                <input
                    {...register("youtubeId")}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    placeholder="e.g. dQw4w9WgXcQ"
                />
                {errors.youtubeId && (
                    <p className="text-red-500 text-xs mt-1">{errors.youtubeId.message as string}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Custom Gradient (CSS)</label>
                <input
                    {...register("customGradient")}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    placeholder="linear-gradient(...)"
                />
            </div>


            <button
                type="submit"
                disabled={isLoading}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
            >
                {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : (initialData ? "Update Video" : "Create Video")}
            </button>
        </form>
    );
}
