import Button from '@components/common/Button/Button';
import successIcon from '/successIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinnner from '/spinner.svg';


const NormalPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3초 후에 로딩 상태를 false로 변경

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center h-screen space-y-3">
        <img src={Spinnner} alt="Loading spinner" className="animate-spin-slow" />
        <p>인식 중 입니다...</p>
      </section>
    );
  }

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
