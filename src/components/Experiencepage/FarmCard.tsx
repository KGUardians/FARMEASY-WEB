import emptyHeart from '../../../public/emptyHeart.svg';
import filledHeart from '../../../public/filledHeart.svg';
import { Link } from 'react-router-dom';

interface FarmCardProps {
  url: string;
  farmName: string;
  location: string;
  like: boolean | undefined;
  title: string;
  date: string;
}

const FarmCard = ({
  url,
  farmName,
  location,
  like,
  title,
  date,
}: FarmCardProps) => {
  return (
    <Link
      to=""
      className="flex flex-col gap-2 w-full h-[220px] p-4 rounded-lg bg-gray-100"
    >
      <img
        src={url}
        alt="image"
        className="w-full h-[83px] rounded-xl object-cover"
      />

      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm">{farmName}</p>
            {like === true ? (
              <img src={filledHeart} alt="liked" />
            ) : (
              <img src={emptyHeart} alt="unliked" />
            )}
          </div>
          <p className="text-xs">{location}</p>
        </div>

        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm font-semibold text-fp-darkgreen">{date}</p>
      </div>
    </Link>
  );
};

export default FarmCard;
