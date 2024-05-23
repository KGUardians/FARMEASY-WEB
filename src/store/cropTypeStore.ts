import { CommunityCropType } from '@type/crop';
import { create } from 'zustand';

interface CropTypeStore {
  selectedType: CommunityCropType | null;
  setSelectedType: (value: CommunityCropType | null) => void;
}

export const useCropTypeStore = create<CropTypeStore>((set) => ({
  selectedType: null,
  setSelectedType: (value) => set({ selectedType: value }),
}));
