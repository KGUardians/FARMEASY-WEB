import classNames from 'classnames';

interface TabBarProps {
  className?: string;
  title: string[];
  getter: string;
  setter: (value: string) => void;
}

const TabBar = ({ className, title, getter, setter }: TabBarProps) => {
  return (
    <div className={classNames('flex w-full gap-6', className)}>
      {title.map((value, index) => {
        if (value)
          return (
            <div
              key={index}
              className="cursor-pointer grow"
              onClick={() => setter(value)}
            >
              <p
                className={classNames('text-center text-lg', {
                  'font-semibold text-fp-darkgreen': getter === title[index],
                })}
              >
                {value}
              </p>

              <div
                className={classNames(
                  'mt-1.5 rounded-full border border-fp-darkgreen',
                  {
                    hidden: getter !== title[index],
                  },
                )}
              />
            </div>
          );
      })}
    </div>
  );
};

export default TabBar;
