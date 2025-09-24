export interface Material {
  name: string;
  image: string;
}

export interface StickerShape {
  name: string;
  icon: string;
}

export interface StickerSize {
  name: string;
}

export interface QuantityOption {
  amount: number;
  price: number;
  discount?: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface OtherProduct {
    category: string;
    name: string;
    description: string;
    image: string;
}

export interface CartItem {
  id: string;
  shape: StickerShape;
  material: Material;
  finish: string;
  size: StickerSize;
  quantity: QuantityOption;
  image: string | null;
}
