import { useState, useEffect } from 'react';
import Button from '@components/common/Button/Button';
import failIcon from '/failIcon.svg';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const AbnormalPage = () => {
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
      <section className="flex flex-col items-center justify-center h-screen">
        <Spinner />
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img src={failIcon} alt="fail" />
        <p className="mt-4 text-lg">농부님의 작물은 시들음병이 의심돼요!</p>
      </div>
      <div className="absolute top-[640px]">
        <Button
          onClick={() => navigate('/communitypost')}
          className="w-[340px]"
        >
          질문하러 가기
        </Button>
      </div>
    </section>
  );
};

export default AbnormalPage;
