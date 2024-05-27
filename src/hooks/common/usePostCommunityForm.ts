import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PostData } from '@type/postData';
import { boardType } from '@type/community';
import { CommunityCropType } from '@type/crop';

const formSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요.'),
  content: z.string().min(1, '내용을 입력해주세요.'),
});

const usePostCommunityForm = () => {
  const [mode, setMode] = useState<boardType>('free');
  const [cropCategory, setCropCategory] = useState<CommunityCropType>();

  const changeMode = (value: string) => {
    setMode(value === '질문' ? 'question' : 'free');
  };

  const onSelectCrop = (crop: CommunityCropType) => {
    setCropCategory(crop);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>({
    resolver: zodResolver(formSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
    mode,
    cropCategory,
    changeMode,
    onSelectCrop,
  };
};

export default usePostCommunityForm;
