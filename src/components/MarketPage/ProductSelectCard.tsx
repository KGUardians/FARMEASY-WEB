import { CropButton } from '@components/common/Button/CropButton';
import marketIcon from '/marketIcon.svg';
import selectProduct from '/selectProductFirst.svg';
import { CROP_LIST } from '@constants/CROP_LIST'; 

const ProductSelectCard = () => {
  return (
    <>
      <div className="flex">
        <img src={marketIcon} alt="marketIcon" />
        <p className="mx-1.5 font-semibold">농산물 직거래</p>
        <img src={selectProduct} alt="selectProduct" />
      </div>

      <div className="grid w-full grid-cols-5 my-4">
        {CROP_LIST.map((item) => (
          <CropButton key={item.value} item={item} />
        ))}
      </div>
    </>
  );
};

export default ProductSelectCard;
