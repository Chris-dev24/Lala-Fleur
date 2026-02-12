"use client";
import { useState, useEffect } from "react";

export default function HeroCarousel() {
  const slides = ["/images/hero1.jpg","/images/hero2.jpg","/images/hero3.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-black">
      <img src={slides[index]} alt="hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-serif font-bold mb-4">Lala-Fleur 🌸</h1>
        <p className="text-xl mb-6">Bouquets & Décorations Florales pour Tous Vos Événements</p>
        <div className="space-x-4">
          <a href="/galerie" className="bg-pink-300 px-6 py-3 rounded text-gray-800 font-bold hover:bg-pink-400 transition">
            Voir la Galerie
          </a>
          <a href="/commander" className="border border-pink-300 px-6 py-3 rounded text-pink-300 hover:bg-pink-300 hover:text-gray-800 transition">
            Commander
          </a>
        </div>
      </div>
    </section>
  );
}