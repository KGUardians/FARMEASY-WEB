export interface Image {
  id: number;
  postId: number;
  originName: string;
  uniqueName: string;
}

export interface ProductInfo {
  postId: number;
  postLike: number;
  cropCategory: string;
  image: Image;
  sigungu: string;
  farmName: string;
  price: number;
  gram: number;
}