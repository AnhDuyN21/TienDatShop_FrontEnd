
export interface Product {
  id: number;
  brandName: string;
  origin: string;
  category: string;
  name: string;
  description: string;
  price: number;
  status: string; 
  ingredients: string;
  usageInstruction: string;
  weight: number;
  storageCondition: string;
  stockQuantity: number;
  images: string[];
}

export type ProductResponse = Product[];