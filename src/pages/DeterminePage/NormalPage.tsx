import Button from '@components/common/Button/Button';
import successIcon from '/successIcon.svg';
import { useNavigate } from 'react-router-dom';

const NormalPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img src={successIcon} alt="success" />
        <p className="mt-4 text-lg">해충이 발견되지 않았습니다!</p>
      </div>
      <div className="absolute top-[640px]">
        <Button onClick={() => navigate('/')} className="w-[340px]">
          홈으로 돌아가기
        </Button>
      </div>
    </section>
  );
};

export default NormalPage;
