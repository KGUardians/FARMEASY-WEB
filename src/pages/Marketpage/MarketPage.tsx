import ProductListSection from '@components/Marketpage/ProductListSection';
import ProductSelectCard from '@components/Marketpage/ProductSelectCard';
import { Navbar } from '@components/common/Navbar/Navbar';
import { marketData } from '@mocks/mockData';

const MarketPage = () => {
  return (
    <section className="grid pb-4">
      <Navbar />

      <div className="px-5 mt-3">
        <ProductSelectCard />

        <ProductListSection productList={marketData} />
      </div>
    </section>
  );
};

export default MarketPage;
