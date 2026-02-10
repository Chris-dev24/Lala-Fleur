export type Bouquet = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export const bouquets: Bouquet[] = [
  {
    id: 1,
    name: "Bouquet romantique",
    price: "À partir de 30 000 Ar",
    image: "/images/bouquets/bouquet1.jpg",
  },
  {
    id: 2,
    name: "Bouquet anniversaire",
    price: "À partir de 25 000 Ar",
    image: "/images/bouquets/bouquet2.jpg",
  },
  {
    id: 3,
    name: "Bouquet mariage",
    price: "À partir de 50 000 Ar",
    image: "/images/bouquets/bouquet3.jpg",
  },
];