import { commaizeNumber } from '@toss/utils';
import emptyHeartIcon from '/emptyHeart.svg';
import filledHeartIcon from '/filledHeart.svg';
import Horizon from '@components/common/Line/Horizon';
import { ProductInfo } from '@type/productList';

interface ProductDetailsProps {
  product: ProductInfo;
}

const ProductDetail = ({ product }: ProductDetailsProps) => {
  return (
    <div className="px-6">
      <div className="my-4">
        <p className="text-lg font-semibold">
          {product.farmName} {product.type}
        </p>
        <p className="font-light">{product.place}</p>
      </div>

      <div className="space-y-1.5 mb-2">
        <div className="flex text-sm font-extralight">
          <p className="mr-3 font-extralight">싱싱함</p>
          <p className="text-[#1C24E4] font-light">
            싱싱해요 ({product.liked}%)
          </p>
        </div>

        <div className="flex text-sm font-extralight">
          <p className="mr-3 font-extralight">만족도</p>
          <p className="text-[#1C24E4] font-light">
            맛있어요 ({product.liked}%)
          </p>
        </div>
      </div>

      <div className="flex justify-between space-y-1.5">
        <div>
          <p className="text-[#CB2020] font-bold text-xl mb-2">
            {commaizeNumber(product.price)}원 / {product.weight}g
          </p>
          <p className="text-sm font-extralight">모레(수)까지 도착 예정</p>
          <p className="text-sm font-extralight">
            무료배송 (30,000원 이상 구매 시)
          </p>
        </div>

        <div className="flex items-end">
          {product.like ? (
            <img
              src={filledHeartIcon}
              alt="like"
              className="w-[22px] h-[19px]"
            />
          ) : (
            <img
              src={emptyHeartIcon}
              alt="unlike"
              className="w-[22px] h-[19px]"
            />
          )}
        </div>
      </div>

      <Horizon className="my-6" color="black" />
    </div>
  );
};

export default ProductDetail;
