// src/SignUpForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface FormInput {
  id: string;
  password: string;
  checkPassword: string;
  username: string;
  birthday: string;
  phoneNumber: string;
}

const formSchema = z.object({
  username: z.string().min(1, '이름을 입력해주세요.'),
  birthday: z
    .string()
    .regex(/^\d+$/, '숫자만 입력해주세요.(ex:20000510)')
    .transform(Number),
  phoneNumber: z.string().regex(/^\d+$/, "'-'를 제외한 숫자만 입력해주세요."),
  id: z
    .string()
    .min(4, '아이디는 4~12자이어야 합니다.')
    .max(12, '아이디는 4~12자이어야 합니다.'),
  password: z
    .string()
    .min(8, '8자 이상, 영문, 숫자, 특수문자(@$!%*#?&)를 사용하세요 .'),
  checkPassword: z.string().min(8, '비밀번호가 일치하지 않습니다.'),
});

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-10 p-8 space-y-8">
        <div>
          <Input
            label="이름"
            placeholder="실명을 입력해주세요"
            {...register('username')}
          />
          {errors.username && <ErrorMessage text={errors.username.message} />}
        </div>

        <div>
          <Input
            label="생년월일 (8자리)"
            placeholder="ex) 20000510"
            {...register('birthday')}
          />
          {errors.birthday && <ErrorMessage text={errors.birthday.message} />}
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
            label="아이디"
            placeholder="아이디를 입력하세요."
            {...register('id')}
          />
          {errors.id && <ErrorMessage text={errors.id.message} />}
        </div>

        <div>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            {...register('password')}
          />
          {errors.password && <ErrorMessage text={errors.password.message} />}
        </div>

        <div>
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 입력하세요."
            {...register('checkPassword')}
          />
          {errors.checkPassword && (
            <ErrorMessage text={errors.checkPassword.message} />
          )}
        </div>
      </form>

      <Button className="w-full hover:bg-blue-500" type="submit">
        회원가입
      </Button>
    </div>
  );
};

export default SignUpForm;
