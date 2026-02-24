"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LogOut, LayoutDashboard, FileVideo } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isLoginPage = pathname === "/admin/login";

    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md hidden md:block">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-indigo-600">Admin Panel</h1>
                </div>
                <nav className="mt-6 px-6 space-y-2">
                    <Link
                        href="/admin/dashboard"
                        className={`flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${pathname === "/admin/dashboard" ? "bg-indigo-50 text-indigo-600" : ""
                            }`}
                    >
                        <LayoutDashboard className="w-5 h-5 mr-3" />
                        Dashboard
                    </Link>
                    {/* Add more links here if needed */}
                </nav>
                <div className="absolute bottom-0 w-64 p-6 border-t">
                    <button
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                        className="flex items-center w-full px-4 py-2 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center p-6 bg-white shadow-sm md:hidden">
                    <h1 className="text-xl font-bold text-indigo-600">Admin</h1>
                    <button
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                        className="p-2 text-red-600 rounded-md hover:bg-red-50"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </header>
                <main className="flex-1 overflow-auto p-6 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
