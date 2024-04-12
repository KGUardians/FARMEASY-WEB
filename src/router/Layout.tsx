import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar/Navbar';

const Layout = () => {
  return (
    <main className="bg-slate-200 flex flex-col items-center">
      <section className="min-h-screen bg-white w-[400px] mx-auto overflow-auto scrollbar-hidden">
        <Navbar />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
