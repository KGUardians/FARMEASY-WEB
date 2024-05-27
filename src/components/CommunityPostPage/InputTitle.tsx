import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';
import Input from '@components/common/Input/Input';
import { PostData } from '@type/postData';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputTitleProps {
  register: UseFormRegister<PostData>;
  error?: FieldErrors;
}

const InputTitle = ({ register, error }: InputTitleProps) => {
  return (
    <div>
      <h1 className="font-bold my-3">제목</h1>
      <Input
        {...register('title')}
        id="post-title"
        placeholder="제목을 입력해주세요."
      />
      {error?.title && typeof error.title.message === 'string' && (
        <ErrorMessage text={error.title.message} />
      )}
    </div>
  );
};

export default InputTitle;
