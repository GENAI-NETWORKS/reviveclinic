import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Fab from './Fab';
import BottomNav from './BottomNav';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Fab />
      <BottomNav />
    </>
  );
}
