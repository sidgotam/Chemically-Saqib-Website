import mongoose, { Schema, model, models } from "mongoose";

const VideoSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        topic: {
            type: String,
            enum: ["Organic", "Inorganic", "Physical", "General"],
            required: [true, "Topic is required"],
        },
        exam: {
            type: String,
            enum: ["JEE", "NEET", "Boards", "General"],
            required: [true, "Exam category is required"],
        },
        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            required: [true, "Difficulty is required"],
        },
        type: {
            type: String,
            enum: ["video", "playlist"],
            default: "video",
        },
        youtubeId: {
            type: String,
            required: [true, "YouTube ID is required"],
        },
        customGradient: {
            type: String,
            default: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        },
    },
    { timestamps: true }
);

const Video = models.Video || model("Video", VideoSchema);

export default Video;
