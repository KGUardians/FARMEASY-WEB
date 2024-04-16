import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar/Navbar';

const Layout = () => {
  return (
    <main className="flex flex-col items-center bg-slate-200">
      <section className="min-h-screen bg-white w-[400px] mx-auto overflow-y-auto overflow-x-hidden scrollbar-hidden">
        <Navbar />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
