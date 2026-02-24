import VideoLibrary from "@/components/VideoLibrary";
import dbConnect from "@/lib/db";
import Video from "@/models/Video";
import { videos as staticVideos } from "@/data/videos";

export const dynamic = 'force-dynamic';

export default async function VideosPage() {
    let serializedVideos = [];

    try {
        await dbConnect();
        const videos = await Video.find({}).sort({ createdAt: -1 }).lean();

        if (videos.length > 0) {
            serializedVideos = videos.map(video => ({
                ...video,
                _id: video._id.toString(),
                createdAt: video.createdAt?.toISOString(),
                updatedAt: video.updatedAt?.toISOString(),
                youtubeId: video.youtubeId,
                type: video.type
            }));
        } else {
            // DB empty, use static
            serializedVideos = staticVideos.map(v => ({
                _id: v.id,
                ...v,
                youtubeId: v.id, // Static data uses 'id' as youtubeId mostly
                customGradient: v.customStyle?.gradient
            }));
        }

    } catch (error) {
        console.warn("Database connection failed, falling back to static data.");
        serializedVideos = staticVideos.map(v => ({
            _id: v.id,
            ...v,
            youtubeId: v.id, // Static data uses 'id' as youtubeId mostly
            customGradient: v.customStyle?.gradient
        })) as any;
    }

    return <VideoLibrary initialVideos={serializedVideos as any} />;
}
