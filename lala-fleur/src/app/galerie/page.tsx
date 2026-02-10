import BouquetCard from "@/components/BouquetCard";
import { bouquets } from "@/lib/data";

export default function Galerie() {
  return (
    <section className="py-10 max-w-6xl mx-auto">
      <h2 className="mb-6 text-3xl font-semibold text-pink-600">
        Nos créations
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {bouquets.map((b) => (
          <BouquetCard key={b.id} bouquet={b} />
        ))}
      </div>
    </section>
  );
}