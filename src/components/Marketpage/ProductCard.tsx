import { commaizeNumber } from '@toss/utils';
import cartIcon from '/cartIcon.svg';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  url: string[];
  like?: boolean;
  liked: number;
  type: string;
  price: number;
  weight: number;
  farmName: string;
  place: string;
}

const ProductCard = ({
  id,
  url,
  like,
  liked,
  type,
  price,
  weight,
  farmName,
  place,
}: ProductCardProps) => {
  return (
    <Link
      to={`/market/${id}`}
      className="flex items-center bg-gray-100 p-4 mb-1.5 rounded-[10px] h-[124px]"
    >
      <img
        src={url[0]}
        alt="productImage"
        className="size-[100px] border rounded-[10px] mr-4 object-cover"
      />

      <div className="w-2/5">
        <div className="mb-4">
          <p className="text-sm font-medium">
            {farmName} {type}
          </p>
          <p className="text-xs font-light">{place}</p>
          <p className="text-[#CB2020] font-bold">
            {commaizeNumber(price)}원 / {weight}g
          </p>
        </div>

        <div>
          <p className="text-xs font-light">⭐️⭐️⭐️⭐️⭐️ ({liked})</p>
        </div>
      </div>

      <div className="grid w-1/4">
        <button className="justify-self-end">
          <img src={cartIcon} alt="cartIcon" />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
