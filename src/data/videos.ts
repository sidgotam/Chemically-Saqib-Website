export interface Video {
    id: string; // YouTube Video ID or Playlist ID
    title: string;
    topic: "Organic" | "Inorganic" | "Physical" | "General";
    exam: "JEE" | "NEET" | "Boards" | "General";
    difficulty: "Easy" | "Medium" | "Hard";
    type: "video" | "playlist"; // New field to distinguish
    customStyle?: {
        gradient: string;
        icon?: string;
    };
}

export const videos: Video[] = [
    {
        id: "PLj5bbC8_5XNjx7v2CKqK9IIG_Zjl769ev",
        title: "Full Organic Chemistry Playlist",
        topic: "Organic",
        exam: "JEE",
        difficulty: "Hard",
        type: "playlist",
        customStyle: {
            gradient: "url('https://placehold.co/600x400/667eea/ffffff?text=Organic+Chemistry')",
        }
    },
    {
        id: "PLj5bbC8_5XNg1SjNHhtxCfctOof35OrdN",
        title: "JEE Mains 2025: Mole Concept",
        topic: "Physical",
        exam: "JEE",
        difficulty: "Medium",
        type: "playlist",
        customStyle: {
            gradient: "url('https://placehold.co/600x400/13547a/ffffff?text=Mole+Concept')",
        }
    },
    {
        id: "PLj5bbC8_5XNjgS_x0xvSqXbF_6fZk9fhx",
        title: "P-Block Elements (Group 15-18)",
        topic: "Inorganic",
        exam: "JEE",
        difficulty: "Medium",
        type: "playlist",
        customStyle: {
            gradient: "url('https://placehold.co/600x400/ff0844/ffffff?text=P-Block+Elements')",
        }
    },
    {
        id: "PLj5bbC8_5XNhAm5e6_w-HrQKAsIOP1mEv",
        title: "Optical Isomerism Playlist",
        topic: "Organic",
        exam: "JEE",
        difficulty: "Hard",
        type: "playlist",
        customStyle: {
            gradient: "url('https://placehold.co/600x400/b721ff/ffffff?text=Optical+Isomerism')",
        }
    },
    // Organic Chemistry
    {
        id: "placeholder1", // TODO: Replace with real YouTube ID
        title: "Introduction to Organic Chemistry - Basics",
        topic: "Organic",
        exam: "JEE",
        difficulty: "Easy",
        type: "video",
        customStyle: { gradient: "url('https://placehold.co/600x400/4facfe/ffffff?text=Organic+Basics')" }
    },
    {
        id: "placeholder4",
        title: "Hydrocarbons - Alkanes",
        topic: "Organic",
        exam: "JEE",
        difficulty: "Medium",
        type: "video",
        customStyle: { gradient: "url('https://placehold.co/600x400/43e97b/ffffff?text=Hydrocarbons')" }
    },

    // Inorganic Chemistry
    {
        id: "placeholder3",
        title: "P-Block Elements - Group 15 Trends",
        topic: "Inorganic",
        exam: "NEET",
        difficulty: "Medium",
        type: "video",
        customStyle: { gradient: "url('https://placehold.co/600x400/30cfd0/ffffff?text=Group+15+Trends')" }
    },
    {
        id: "placeholder5",
        title: "Chemical Bonding",
        topic: "Inorganic",
        exam: "NEET",
        difficulty: "Easy",
        type: "video",
        customStyle: { gradient: "url('https://placehold.co/600x400/fa709a/ffffff?text=Chemical+Bonding')" }
    },
    {
        id: "placeholder2",
        title: "Periodic Table Table Trends",
        topic: "Inorganic",
        exam: "NEET",
        difficulty: "Medium",
        type: "video",
        customStyle: { gradient: "url('https://placehold.co/600x400/d4fc79/333333?text=Periodic+Trends')" }
    },


    // Physical Chemistry
    {
        id: "placeholder6",
        title: "Atomic Structure - Class 11 Full Chapter",
        topic: "Physical",
        exam: "JEE",
        difficulty: "Medium",
        type: "video",
        customStyle: { gradient: "url('https://placehold.co/600x400/f78ca0/ffffff?text=Atomic+Structure')" }
    },
    {
        id: "placeholder7",
        title: "Thermodynamics Explained",
        topic: "Physical",
        exam: "Boards",
        difficulty: "Hard",
        type: "video",
        customStyle: { gradient: "url('https://placehold.co/600x400/00c6fb/ffffff?text=Thermodynamics')" }
    },
    {
        id: "placeholder8",
        title: "Electrochemistry Numericals",
        topic: "Physical",
        exam: "JEE",
        difficulty: "Hard",
        type: "video",
        customStyle: { gradient: "url('https://placehold.co/600x400/ec008c/ffffff?text=Electrochemistry')" }
    }
];

export const getThumbnailUrl = (id: string, type: "video" | "playlist" = "video") => {
    if (type === "playlist" || id.startsWith("placeholder")) {
        return "placeholder";
    }
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
};

export const getVideoUrl = (id: string, type: "video" | "playlist" = "video") => {
    if (type === "playlist") {
        return `https://www.youtube.com/playlist?list=${id}`;
    }
    return `https://www.youtube.com/watch?v=${id}`;
};
