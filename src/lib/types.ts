export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  company: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Light roast, floral notes",
    image: "/images/yirgacheffe.jpg",
  },
  {
    id: 2,
    name: "Sidamo Guji",
    description: "Medium roast, fruity undertones",
    image: "/images/sidamo.jpg",
  },
];