import VideoForm from "@/components/admin/VideoForm";

export default function CreateVideoPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Video</h1>
            <div className="bg-white shadow sm:rounded-lg p-6">
                <VideoForm />
            </div>
        </div>
    );
}
