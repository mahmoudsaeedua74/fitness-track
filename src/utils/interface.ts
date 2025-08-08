export interface Trainer {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;
  rating: number;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
}