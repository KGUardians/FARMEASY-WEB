import { IoAlertCircleOutline } from 'react-icons/io5';

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <span className="flex gap-0.5 items-center text-xs text-red-600 mt-0.5">
      <IoAlertCircleOutline />
      {text}
    </span>
  );
};

export default ErrorMessage;
