"use client";
import { useState } from "react";

type Props = { images: string[] };

export default function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative">
      <img src={images[index]} alt="carousel" className="w-full h-64 object-cover rounded-lg" />
      <button onClick={prev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-2 rounded">‹</button>
      <button onClick={next} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white px-2 rounded">›</button>
    </div>
  );
}