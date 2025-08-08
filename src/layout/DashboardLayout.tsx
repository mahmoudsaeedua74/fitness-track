import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navbar/Sidebar';
export default function DashboardLayout() {
  return (
    <>
      {/* Navbar */}
      <Sidebar />
      {/* Main content area - scrollable */}
      <main className="  bg-[#F9FAFB] h-screen tajawal md:pe-[37px] pt-[28px] md:ps-[341.5px]">
        <Outlet />
      </main>
    </>
  );
}
