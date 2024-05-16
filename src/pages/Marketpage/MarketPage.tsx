import ProductListSection from '../../components/Marketpage/ProductListSection';
import ProductSelectCard from '../../components/Marketpage/ProductSelectCard';
import { marketData } from '../../mocks/mockData';

const MarketPage = () => {
  return (
    <section className="grid px-6 pt-5 pb-4">
      <ProductSelectCard />
      <ProductListSection productList={marketData} />
    </section>
  );
};

export default MarketPage;
