export type Bouquet = {
  id: number;
  name: string;
  price: string;
  images: string[]; // carrousel
};

export const bouquets: Bouquet[] = [
  {
    id: 1,
    name: "Bouquet romantique",
    price: "À partir de 30 000 Ar",
    images: ["/images/bouquets/b1-1.jpg", "/images/bouquets/b1-2.jpg", "/images/bouquets/b1-3.jpg"],
  },
  {
    id: 2,
    name: "Bouquet anniversaire",
    price: "À partir de 25 000 Ar",
    images: ["/images/bouquets/b2-1.jpg", "/images/bouquets/b2-2.jpg"],
  },
  {
    id: 3,
    name: "Bouquet mariage",
    price: "À partir de 50 000 Ar",
    images: ["/images/bouquets/b3-1.jpg", "/images/bouquets/b3-2.jpg", "/images/bouquets/b3-3.jpg"],
  },
];