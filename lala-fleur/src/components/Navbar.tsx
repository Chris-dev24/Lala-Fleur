"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-serif font-bold text-pink-600">Lala-Fleur 🌸</Link>
      <div className="space-x-6">
        <Link href="/galerie" className="text-gray-700 hover:text-pink-600 transition">Galerie</Link>
        <Link href="/commander" className="text-gray-700 hover:text-pink-600 transition">Commander</Link>
        <Link href="/admin" className="text-gray-700 hover:text-pink-600 transition">Admin</Link>
      </div>
    </nav>
  );
}