import { Bouquet } from "@/lib/data";

type Props = {
  bouquet: Bouquet;
};

export default function BouquetCard({ bouquet }: Props) {
  return (
    <div className="rounded-lg border p-4 shadow hover:shadow-lg transition">
      <img
        src={bouquet.image}
        alt={bouquet.name}
        className="h-40 w-full object-cover rounded mb-3"
      />
      <h3 className="font-semibold">{bouquet.name}</h3>
      <p className="text-sm text-gray-500">{bouquet.price}</p>
    </div>
  );
}