import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Video from "@/models/Video";
import { auth } from "@/auth";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    await dbConnect();

    try {
        const video = await Video.findById(id);
        if (!video) {
            return NextResponse.json({ error: "Video not found" }, { status: 404 });
        }
        return NextResponse.json(video);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch video" }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await dbConnect();

    try {
        const body = await req.json();
        const video = await Video.findByIdAndUpdate(id, body, { new: true });
        if (!video) {
            return NextResponse.json({ error: "Video not found" }, { status: 404 });
        }
        return NextResponse.json(video);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update video" }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await dbConnect();

    try {
        const video = await Video.findByIdAndDelete(id);
        if (!video) {
            return NextResponse.json({ error: "Video not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Video deleted" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete video" }, { status: 500 });
    }
}
