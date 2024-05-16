import { ProductInfo } from '../../types/productList';
import ProductCard from './ProductCard';

interface ProductListProps {
  productList: ProductInfo[];
}

const ProductListSection = ({ productList }: ProductListProps) => {
  return (
    <div className="justify-items-center mt-[-16px] px-2">
      {productList.map((item) => (
        <ProductCard
          key={item.id}
          url={item.url}
          like={item.like}
          liked={item.liked}
          type={item.type}
          price={item.price}
          weight={item.weight}
          farmName={item.farmName}
          place={item.place}
        />
      ))}
    </div>
  );
};

export default ProductListSection;
