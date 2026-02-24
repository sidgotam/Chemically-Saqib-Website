import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Video from "@/models/Video";
import { auth } from "@/auth";

export async function GET() {
    await dbConnect();
    try {
        const videos = await Video.find({}).sort({ createdAt: -1 });
        return NextResponse.json(videos);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    try {
        const body = await req.json();
        const video = await Video.create(body);
        return NextResponse.json(video, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create video" }, { status: 500 });
    }
}
