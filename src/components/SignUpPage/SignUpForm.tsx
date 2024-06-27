import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/schema/SignUp';

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
  checkPassword: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="mb-10 space-y-8">
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

        <Button className="w-full hover:bg-lime-200 ease-in" type="submit">
          회원가입
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
