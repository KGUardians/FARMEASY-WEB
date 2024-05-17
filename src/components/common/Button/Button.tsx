import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { ButtonColorType } from './Button.type';
import { buttonColors } from './Button.style';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColorType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, color = 'green', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          `py-2 border rounded-lg text-lg font-semibold`,
          buttonColors[color],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
