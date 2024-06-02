import server from './server';

const get = async (url: string) => {
  const res = await server.get(url);
  return res.data;
};

export const getMarketPost = async () => {
  try {
    const data = await get('/market');
    return data.result.data.content;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};
