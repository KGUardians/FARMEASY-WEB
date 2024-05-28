import Button from '@components/common/Button/Button';

const BottomBar = () => {
  return (
    <div className="flex justify-center">
      <Button color="white" className="w-[44%] mx-1">
        장바구니 담기
      </Button>
      <Button className="w-[44%] mx-1">바로구매</Button>
    </div>
  );
};

export default BottomBar;
