import Input from '@components/common/Input/Input';
import logo from '/fullLogo.svg';
import Button from '@components/common/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface FormInput {
  id: string;
  password: string;
}

const SignInPage = () => {
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <section className="w-[60%] h-screen mx-auto place-content-center">
      <div className="flex flex-col place-self-center justify-center">
        <img src={logo} alt="farmpal" className="w-[60%] mx-auto my-10" />

        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="아이디" {...register('id')} />
          <Input placeholder="비밀번호" {...register('password')} />

          <Button type="submit">로그인하기</Button>
        </form>
      </div>

      <Link to="/signup">
        <p className="text-sm text-gray-300 text-center mt-2">
          아직 회원이 아니신가요?
        </p>
      </Link>
    </section>
  );
};

export default SignInPage;
