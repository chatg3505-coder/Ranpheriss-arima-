export interface PerfumeProduct {
  id: string;
  name: string;
  tagline: string;
  concentration: string;
  family: string;
  price: number;
  sizes: { size: string; price: number; volume: string }[];
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  mood: string;
  image: string;
  accentColor: string;
  character: string;
}

export interface CartItem {
  id: string;
  product: PerfumeProduct;
  selectedSize: string;
  price: number;
  quantity: number;
}
