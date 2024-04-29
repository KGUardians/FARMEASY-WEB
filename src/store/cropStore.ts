import create from 'zustand';

interface CropStore {
  selectedCrop: number | null;
  setSelectedCrop: (cropId: number | null) => void;
}

// Zustand 스토어 생성
const useCropStore = create<CropStore>((set) => ({
  selectedCrop: null, // 선택된 crop을 저장하는 상태
  setSelectedCrop: (cropId) => set({ selectedCrop: cropId }), // 선택된 crop을 업데이트하는 함수
}));

export default useCropStore;
