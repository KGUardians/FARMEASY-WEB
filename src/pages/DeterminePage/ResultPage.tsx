import successIcon from '/successIcon.svg';
import failIcon from '/failIcon.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@components/common/Button/Button';
import useCropStore from '@store/cropStore';

const ResultPage = () => {
  const selectedCrop = useCropStore((state) => state.selectedCrop);
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/');
  };

  const handleFail = () => {
    navigate('/');
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      {selectedCrop !== null && selectedCrop >= 1 && selectedCrop <= 5 ? (
        <>
          <div className="flex flex-col items-center">
            <img src={successIcon} alt="success" />
            <p className="mt-4 text-lg">해충이 발견되지 않았습니다!</p>
          </div>
          <div className="absolute top-[640px]">
            <Button onClick={handleSuccess} className="w-[340px]">
              돌아가기
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <img src={failIcon} alt="fail" />
            <p className="mt-4 text-lg">ㅇㅇㅇㅇ에 문제가 있는 것 같습니다.</p>
          </div>
          <div className="absolute top-[640px]">
            <Button onClick={handleFail} className="w-[340px]">
              질문하러 가기
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default ResultPage;
