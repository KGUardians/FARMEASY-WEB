import { getMarketPost } from '@/apis/marketApi';
import ProductListSection from '@components/MarketPage/ProductListSection';
import ProductSelectCard from '@components/MarketPage/ProductSelectCard';
import { Navbar } from '@components/common/Navbar/Navbar';
import { useQuery } from '@tanstack/react-query';

const MarketPage = () => {

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['marketData'],
    queryFn: getMarketPost,
  });

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (isError) {
    console.error(error);
    return <div>오류 발생</div>;
  }

  return (
    <section className="grid pb-4">
      <Navbar />
      <div className="px-5 mt-3">
        <ProductSelectCard />
        <ProductListSection productList={data} />
      </div>
    </section>
  );
};

export default MarketPage;
