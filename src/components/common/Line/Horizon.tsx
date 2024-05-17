import classNames from 'classnames';
import { HorizonColorType } from './Horizon.type';
import { HorizonColors } from './Horizon.style';

export interface HorizonProps {
  color?: HorizonColorType;
  className?: string;
}

const Horizon = ({ className, color = 'default' }: HorizonProps) => {
  return (
    <div
      className={classNames(
        `h-[1px] my-2 w-full`,
        className,
        HorizonColors[color],
      )}
    ></div>
  );
};

export default Horizon;
