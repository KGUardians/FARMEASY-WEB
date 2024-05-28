import { commaizeNumber } from '@toss/utils';
import emptyHeartIcon from '/emptyHeart.svg';
import filledHeartIcon from '/filledHeart.svg';
import { Link } from 'react-router-dom';

interface ListItemProps {
  id: number;
  to: string;
  image: string[];
  like: boolean;
  type: string;
  price?: number;
  weight?: number;
  farmName: string;
  place: string;
}

const ListItem = ({
  id,
  to,
  image,
  type,
  like = false,
  price,
  weight,
  farmName,
  place,
}: ListItemProps) => {
  return (
    <Link
      to={`/${to}/${id}`}
      key={id}
      className="flex flex-col gap-0.5 mt-3 text-xs"
    >
      <img
        src={image[0]}
        alt={image[0]}
        className="rounded-md min-w-[100px] h-[100px] object-cover"
      />
      <div className="flex justify-between mt-1">
        <p className="text-xs">{type}</p>
        {like ? (
          <img src={filledHeartIcon} alt="like" />
        ) : (
          <img src={emptyHeartIcon} alt="unlike" />
        )}
      </div>
      {price && weight && (
        <p className="font-semibold">
          {commaizeNumber(price)}원 / {weight}g
        </p>
      )}
      <p>{farmName}</p>
      <p className="text-[10px]">{place}</p>
    </Link>
  );
};

export default ListItem;
