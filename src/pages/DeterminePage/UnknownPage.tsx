import Button from '@components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import failIcon from '/failIcon.svg';

const UnknownPage = () => {
  const navigate = useNavigate();

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
