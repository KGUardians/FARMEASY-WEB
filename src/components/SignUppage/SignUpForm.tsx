// src/SignUpForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';

interface FormInput {
  username: string;
  birthday: string;
  phoneNumber: string;
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

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
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <ErrorMessage text={errors.confirmPassword.message} />
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
