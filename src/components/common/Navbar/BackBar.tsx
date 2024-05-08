import { useNavigate } from 'react-router-dom';
import backIcon from '../../../../public/backIcon.svg';

const BackBar = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex px-6 gap-2 pt-6 mb-3">
      <button onClick={goBack}>
        <img src={backIcon} alt="" />
      </button>
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default BackBar;
