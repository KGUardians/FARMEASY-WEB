import Button from '@components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-24"></div>
      <div className="fixed bottom-0 flex justify-between p-4 w-[100vw] max-w-[440px] h-20 bg-white">
        <Button color="white" className="w-1/2">
          문의하기
        </Button>
        <Button onClick={() => navigate('/')} color="green" className="w-1/2">
          신청하기
        </Button>
      </div>
    </>
  );
};

export default BottomBar;
