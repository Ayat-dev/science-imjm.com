export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  readTime?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  shortDescription?: string;
  specs?: { [key: string]: string };
  inStock: boolean;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
