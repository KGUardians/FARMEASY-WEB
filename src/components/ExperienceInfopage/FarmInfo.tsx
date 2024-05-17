import Horizon from '@components/common/Line/Horizon';
import { useState } from 'react';
import { IoClipboardOutline, IoCheckmarkOutline } from 'react-icons/io5';

interface FarmInfoProps {
  locationInfo: string;
}

const FarmInfo = ({ locationInfo }: FarmInfoProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copyLocation = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <>
      <div className="flex flex-col gap-4 p-7">
        <h1 className="text-lg font-semibold">농장 정보</h1>

        <div className="flex items-center gap-2">
          <p className="font-semibold">{locationInfo}</p>
          <button
            onClick={() => copyLocation(locationInfo)}
            className="flex items-center gap-0.5 text-xs text-gray-500"
          >
            {isCopied ? (
              <>
                <IoCheckmarkOutline /> 복사 완료
              </>
            ) : (
              <>
                <IoClipboardOutline /> 복사
              </>
            )}
          </button>
        </div>
      </div>
      <Horizon color="black" />
    </>
  );
};

export default FarmInfo;
