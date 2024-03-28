"use client"
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-5 flex flex-col justify-center">
            <div className="fixed left-1/4 transform -translate-x-1/2">
                <Link href="/" className="text-white text-2xl">
                    Pongsaky
                </Link>
                
            </div>

            <ul className="flex flex-row justify-end space-x-5 mr-96">
                <li>
                    <Link href="/blog" className="text-white font-bold">
                        Post
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-white font-bold">
                        Tags
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-white font-bold">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}