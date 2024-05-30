import Button from '@components/common/Button/Button';
import failIcon from '/failIcon.svg';
import { useNavigate } from 'react-router-dom';

const AbnormalPage = () => {
  const navigate = useNavigate();

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
