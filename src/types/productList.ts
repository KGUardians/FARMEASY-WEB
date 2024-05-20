export interface ProductInfo {
  id: number;
  cropId: number;
  url: string[];
  like?: boolean;
  liked: number;
  type: string;
  price: number;
  weight: number;
  farmName: string;
  place: string;
}
