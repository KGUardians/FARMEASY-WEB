import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='bg-slate-200'>
      <section className='min-h-screen bg-white w-[400px] mx-auto'>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
