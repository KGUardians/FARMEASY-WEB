import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div>
        {label && <p className="my-1 text-sm">{label}</p>}
        <input
          ref={ref} // ref를 input에 연결합니다.
          {...rest} // 나머지 props를 input에 전달합니다.
          className="w-full h-10 p-2 text-sm bg-gray-200 rounded-md outline-none"
        />
      </div>
    );
  },
);

export default Input;
