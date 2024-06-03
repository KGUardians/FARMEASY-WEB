import server from './server';

const get = async (url: string) => {
  const res = await server.get(url);
  return res?.data?.data;
};

export default get;
