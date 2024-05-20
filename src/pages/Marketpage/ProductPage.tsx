import { CarouselDefault } from '@components/common/Carousel/Carousel';
import TopBar from '@components/common/TopBar/TopBar';
import ProductDetail from '@components/MarketProductPage/ProductDetailInfo';
import { useParams } from 'react-router-dom';
import BottomBar from '@components/MarketProductPage/BottomBar';
import { marketData } from '@mocks/mockData';
import ProductDetailOption from '@components/MarketProductPage/ProductDetailOption';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const product = marketData.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <section className="grid pt-5 pb-4">
      <TopBar title={'농산물 직거래'} />

      <CarouselDefault url={product.url} />

      <ProductDetail product={product} />

      <ProductDetailOption />

      <BottomBar />
    </section>
  );
};

export default ProductPage;
