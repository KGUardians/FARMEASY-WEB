import { ProductInfo } from '@type/productList';
import ProductCard from './ProductCard';

interface ProductListProps {
  productList: ProductInfo[];
}

const ProductListSection = ({ productList }: ProductListProps) => {
  return (
    <div className="mt-[-16px] px-2">
      {productList.length > 0 ? (
        productList.map((item) => (
          <ProductCard
            id={item.postId}
            key={item.postId}
            url={[item.image.uniqueName]}
            liked={item.postLike}
            type={item.cropCategory}
            price={item.price}
            weight={item.gram}
            farmName={item.farmName}
            place={item.sigungu}
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
