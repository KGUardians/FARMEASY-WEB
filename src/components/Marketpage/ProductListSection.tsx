import { ProductInfo } from '@type/productList';
import ProductCard from './ProductCard';
import useCropStore from '@store/cropStore';

interface ProductListProps {
  productList: ProductInfo[];
}

const ProductListSection = ({ productList }: ProductListProps) => {
  const selectedCrop = useCropStore((state) => state.selectedCrop);
  const filteredProductList = selectedCrop
    ? productList.filter((product) => product.cropId === selectedCrop)
    : productList;

  return (
    <div className="mt-[-16px] px-2">
      {filteredProductList.length > 0 ? (
        filteredProductList.map((item) => (
          <ProductCard
            id={item.id}
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
        ))
      ) : (
        <div className="text-center text-gray-600 font-medium">
          <p>현재 해당 작물은 거래할 수 없습니다.</p>
          <p>다른 작물을 선택해보세요 !</p>
        </div>
      )}
    </div>
  );
};

export default ProductListSection;
