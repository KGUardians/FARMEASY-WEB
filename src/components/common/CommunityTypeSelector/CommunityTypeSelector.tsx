interface CommunityTypeSelectorProps {
  mode: string;
  changeMode: (value: string) => void;
}

const CommunityTypeSelector = ({
  mode,
  changeMode,
}: CommunityTypeSelectorProps) => {
  return (
    <div className="flex w-32 h-8 p-1 text-xs text-gray-700 bg-gray-200 rounded-md">
      <button
        onClick={() => changeMode('질문')}
        className={`w-2/5 h-full rounded-md ${
          mode === 'question' && 'bg-white text-black font-bold'
        }`}
      >
        질문
      </button>
      <button
        onClick={() => changeMode('자유게시판')}
        className={`w-3/5 h-full rounded-md ${
          mode === 'free' && 'bg-white text-black font-bold'
        }`}
      >
        자유게시판
      </button>
    </div>
  );
};

export default CommunityTypeSelector;
