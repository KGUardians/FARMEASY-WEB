interface CropButtonProps {
  item: {
    id: number;
    icons: string;
    title: string;
  };
  selectedCrop: number | null;
  handleItemClick: (itemId: number) => void;
}

export const CropButton = ({
  item,
  selectedCrop,
  handleItemClick,
}: CropButtonProps) => (
  <div key={item.id} className="grid mb-8 place-items-center">
    <button
      onClick={() => handleItemClick(item.id)}
      className={`flex rounded-[15px] items-center justify-center w-[52px] h-[52px] bg-neutral-100 hover:outline hover:outline-fp-green ${
        selectedCrop === item.id ? 'outline outline-2 outline-[#9FC031]' : ''
      }`}
    >
      <img src={item.icons} alt={item.title} />
    </button>
    <p className="my-1 text-xs text-center">{item.title}</p>
  </div>
);
