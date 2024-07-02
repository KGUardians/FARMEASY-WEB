import Input from '@components/common/Input/Input';
import logo from '/fullLogo.svg';
import Button from '@components/common/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '@store/authStore';
import server from '@/apis/server';

interface FormInput {
  id: string;
  password: string;
}

const SignInPage = () => {
  const navigate = useNavigate();
  const authLogin = useAuthStore((state) => state.authLogin);
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const res = await server.post(`/auth/sign-in`, {
      username: data.id,
      password: data.password,
    });

    if (res.data.success) {
      const { accessToken, refreshToken } = res.data;
      console.log(res.data);

      authLogin(accessToken);

      sessionStorage.setItem('i', refreshToken);

      navigate('/');
    } else {
      return;
    }
  };

  return (
    <section className="w-[60%] h-screen mx-auto place-content-center">
      <div className="flex flex-col place-self-center justify-center">
        <img src={logo} alt="farmpal" className="w-[60%] mx-auto my-10" />

        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="아이디" {...register('id')} />
          <Input placeholder="비밀번호" {...register('password')} />

          <Button type="submit" className="mt-14">
            로그인하기
          </Button>
        </form>
      </div>

      <Link to="/signup">
        <p className="text-xs text-gray-300 text-center mt-2">
          아직 회원이 아니신가요?
        </p>
      </Link>
    </section>
  );
};

export default SignInPage;
