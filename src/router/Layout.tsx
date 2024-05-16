import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="flex flex-col items-center">
      <section className="min-h-screen bg-white w-[100vw] max-w-[440px] mx-auto overflow-y-auto overflow-x-hidden scrollbar-hidden">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
