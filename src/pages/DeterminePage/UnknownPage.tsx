import Button from '@components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import failIcon from '/failIcon.svg';
import { useEffect, useState } from 'react';
import Spinnner from '/spinner.svg';

const UnknownPage = () => {
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
        <img src={failIcon} alt="fail" />
        <p className="mt-4 text-lg">인식이 불가능해요 !</p>
        <p className="text-lg">사진을 다시 업로드해주세요.</p>
      </div>
      <div className="absolute top-[640px]">
        <Button onClick={() => navigate('/determine')} className="w-[340px]">
          다시 판별하기
        </Button>
      </div>
    </section>
  );
};

export default UnknownPage;
