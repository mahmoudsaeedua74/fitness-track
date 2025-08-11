import { useEffect, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import CloseCircleIcon from '../icon/sidebar/CloseCircleIcon';
import SidebarLinks from './SidebarLinks';

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="flex  justify-between py-5 items-center px-[22px] md:hidden inter">
        <img
          src="/assets/logo.png"
          alt="logo of page"
          className="order-2 w-[95px] bg-black h-[31px] sm:w-[120px] sm:h-[39px]"
        />
        <button
          onClick={() => setOpen(!isOpen)}
          className="size-9 object-cover cursor-pointer hover:bg-border-color rounded-full flex items-center justify-center"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <nav className="bg-[#2C2C2C] text-gray-color font-semibold py-10 px-[17.75px] fixed top-0 bottom-0 w-[311.5px] items-center flex-col justify-between z-50 hidden md:flex">
        <SidebarLinks onNavClick={handleNavLinkClick} />
      </nav>

      {/* Mobile Sidebar + Overlay */}
      <div
        className={`fixed inset-0 z-50   w-[60%]  md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/90" onClick={() => setOpen(false)} />

        {/* Sidebar */}
        <nav
          className={`absolute left-0 top-0 bottom-0 w-full bg-[#2C2C2C]   font-semibold py-10 px-[17.75px] flex flex-col justify-between transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="w-fit ms-auto">
            <button
              onClick={() => setOpen(false)}
              className="mb-4 p-2 text-white hover:text-gray-400 transition-colors"
            >
              <CloseCircleIcon />
            </button>
          </div>

          <SidebarLinks onNavClick={handleNavLinkClick} />
        </nav>
      </div>
    </>
  );
}
