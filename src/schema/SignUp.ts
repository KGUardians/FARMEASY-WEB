import { z } from 'zod';

export const SignUpSchema = z
  .object({
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
  })
  .refine((data) => data.password === data.checkPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['checkPassword'],
  });
