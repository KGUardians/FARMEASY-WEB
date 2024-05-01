import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar/Navbar';

const Layout = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/determine/result';

  return (
    <main className="flex flex-col items-center bg-slate-200">
      <section className="min-h-screen bg-white w-[100vw] max-w-[440px] mx-auto overflow-y-auto overflow-x-hidden scrollbar-hidden">
        {!hideNavbar && <Navbar />}
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
