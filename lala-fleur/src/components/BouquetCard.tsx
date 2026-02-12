"use client";
import Carousel from "./Carousel";
import { Bouquet } from "@/lib/data";

type Props = { bouquet: Bouquet };

export default function BouquetCard({ bouquet }: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden">
      <Carousel images={bouquet.images} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{bouquet.name}</h3>
        <p className="text-gray-600 mt-1">{bouquet.price}</p>
        <a href="/commander" className="mt-3 inline-block bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">
          Commander
        </a>
      </div>
    </div>
  );
}