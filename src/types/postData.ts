import { CropType } from './crop';

export type boardType = 'free' | 'question';

export interface PostData {
  type: boardType;
  cropType: CropType;
  title: string;
  content: string;
  cropCategory: string;
  images: File[];
}
