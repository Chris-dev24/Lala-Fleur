import { bouquets } from "@/lib/data";
import BouquetCard from "@/components/BouquetCard";

export default function Galerie() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-4xl font-serif font-bold text-center text-pink-600 mb-8">Nos Bouquets</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {bouquets.map((b) => <BouquetCard key={b.id} bouquet={b} />)}
      </div>
    </section>
  );
}