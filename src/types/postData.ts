export type boardType = 'free' | 'question';

export interface PostData {
  images?: File[];
  type: boardType;
  cropType?: string | undefined;
  title: string;
  content: string;
  cropCategory: string;
}
