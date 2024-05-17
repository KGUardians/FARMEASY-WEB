import { useParams } from 'react-router-dom';
import { ProductInfo } from '../../types/productList';
import { CarouselDefault } from '../../components/common/Carousel/Carousel';
import { commaizeNumber } from '@toss/utils';
import emptyHeartIcon from '../../../public/emptyHeart.svg';
import filledHeartIcon from '../../../public/filledHeart.svg';
import Button from '../../components/common/Button/Button';
import TopBar from '@components/common/TopBar/TopBar';

const ProductPage = ({ productList }: { productList: ProductInfo[] }) => {
  const { id } = useParams<{ id: string }>();

  const product = productList.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="grid pt-5 pb-4">
      {/* <BackBar title={'농산물 직거래'} /> */}
      <TopBar title={'농산물 직거래'} />

      <CarouselDefault url={product.url} />

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

        <div className="h-[1px] my-6 w-full bg-[#8D8D8D]"></div>

        <div>
          <p className="text-lg font-semibold">더 많은 옵션 보기</p>
        </div>

        <div className="h-[1px] my-6 w-full bg-[#8D8D8D]"></div>
      </div>

      <div className="flex justify-center">
        <Button color="white" className="w-[190px]">
          장바구니 담기
        </Button>
        <Button className="w-[190px]">바로구매</Button>
      </div>
    </div>
  );
};

export default ProductPage;
