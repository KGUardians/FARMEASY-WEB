import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';
import { PostData } from '@type/postData';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputContentProps {
  register: UseFormRegister<PostData>;
  error?: FieldErrors;
}

const InputContent = ({ register, error }: InputContentProps) => {
  return (
    <div>
      <h1 className="font-bold mb-3">내용</h1>
      <textarea
        {...register('content')}
        id="post-content"
        className="w-full p-2 h-44 text-sm bg-gray-200 rounded-md outline-none resize-none"
        placeholder="내용을 입력해주세요."
      />
      {error?.content && typeof error.content.message === 'string' && (
        <ErrorMessage text={error.content.message} />
      )}
    </div>
  );
};

export default InputContent;
