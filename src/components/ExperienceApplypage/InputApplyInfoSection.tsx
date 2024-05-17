import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@components/common/Input/Input';
import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';
import Button from '@components/common/Button/Button';
import Horizon from '@components/common/Line/Horizon';

interface FormInput {
  name: string;
  phoneNumber: string;
  numberOfParticipants: string;
}

const InputApplyInfoSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <form className="flex flex-col gap-5 p-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-lg font-semibold">지원정보</h1>

      <div>
        <Input
          label="이름"
          placeholder="실명을 입력해주세요"
          {...register('name', { required: '이름을 입력해주세요.' })}
        />
        {errors.name && <ErrorMessage text="이름을 입력해주세요" />}
      </div>

      <div>
        <Input
          label="휴대폰 번호"
          placeholder="숫자만 입력해주세요(-제외)"
          {...register('phoneNumber', {
            required: '휴대폰 번호를 입력해주세요.',
            pattern: {
              value: /^[0-9]+$/,
              message: "'-'를 제외한 숫자만 입력해주세요.",
            },
          })}
        />
        {errors.phoneNumber && (
          <ErrorMessage text="휴대폰 번호를 다시 입력해주세요(-제외, 숫자만)" />
        )}
      </div>

      <div>
        <Input
          label="체험 인원 수"
          placeholder="숫자만 입력해주세요"
          {...register('numberOfParticipants', {
            required: '체험 인원수를 입력해주세요.',
            pattern: {
              value: /^[0-9]+$/,
              message: '숫자만 입력해주세요.',
            },
          })}
        />
        {errors.numberOfParticipants && (
          <ErrorMessage text="체험 인원 수를 입력해주세요(숫자만)" />
        )}
      </div>

      <Horizon color="darkgray" className="my-10" />

      <Button type="submit">신청하기</Button>
    </form>
  );
};

export default InputApplyInfoSection;
