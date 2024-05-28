import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@components/common/Input/Input';
import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';
import Button from '@components/common/Button/Button';
import Horizon from '@components/common/Line/Horizon';
import { z } from 'zod';

interface FormInput {
  name: string;
  phoneNumber: string;
  numberOfParticipants: string;
}
const formSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  phoneNumber: z.string().regex(/^\d+$/, "'-'를 제외한 숫자만 입력해주세요."),
  numberOfParticipants: z
    .string()
    .regex(/^\d+$/, '숫자만 입력해주세요.')
    .transform(Number),
});

const InputApplyInfoSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <form className="flex flex-col gap-5 p-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-lg font-semibold">지원정보</h1>
      <div>
        <Input
          label="이름"
          placeholder="실명을 입력해주세요"
          {...register('name')}
        />
        {errors.name && <ErrorMessage text={errors.name.message} />}
      </div>

      <div>
        <Input
          label="휴대폰 번호"
          placeholder="숫자만 입력해주세요(-제외)"
          {...register('phoneNumber')}
        />
        {errors.phoneNumber && (
          <ErrorMessage text={errors.phoneNumber.message} />
        )}
      </div>

      <div>
        <Input
          label="체험 인원 수"
          placeholder="숫자만 입력해주세요"
          {...register('numberOfParticipants')}
        />
        {errors.numberOfParticipants && (
          <ErrorMessage text={errors.numberOfParticipants.message} />
        )}
      </div>

      <Horizon color="darkgray" className="my-10" />

      <Button type="submit">신청하기</Button>
    </form>
  );
};

export default InputApplyInfoSection;
