import { CropType } from './crop';

export type boardType = 'free' | 'question';

export interface BoardSimpleType {
  id: number;
  type: boardType;
  cropType: CropType;
  title: string;
  text: string;
  url: string | null;
  writeDate: string;
  view: number;
  like: number;
  comment: number;
}
