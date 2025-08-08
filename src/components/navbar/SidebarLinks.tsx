import { NavLink } from 'react-router-dom';
import { Button } from '../ui/Button';
import ExpertIcon from '../icon/sidebar/ExpertIcon';
import CloseCircleIcon from '../icon/sidebar/CloseCircleIcon';

const mainLinks = [
  {
    to: '/dashboard',
    icon: <CloseCircleIcon className="w-6 h-6" />,
    label: 'navbar.dashboard',
  },
  {
    to: '/member',
    icon: <CloseCircleIcon className="w-6 h-6" />,
    label: 'navbar.content_makers',
  },
  {
    to: '/dashboard/verifications',
    icon: <CloseCircleIcon className="w-6 h-6" />,
    label: 'navbar.verifications',
  },
  {
    to: '/dashboard/finance',
    icon: <CloseCircleIcon className="w-6 h-6" />,
    label: 'navbar.finance',
  },
  {
    to: '/dashboard/reports',
    icon: <CloseCircleIcon className="w-6 h-6" />,
    label: 'navbar.reports',
  },
  {
    to: '/dashboard/projects',
    icon: <CloseCircleIcon className="w-6 h-6" />,
    label: 'navbar.projects',
  },
];
type SidebarLinksProps = {
  onNavClick: () => void;
};
export default function SidebarLinks({ onNavClick }: SidebarLinksProps) {
  return (
    <div className="flex-col w-full justify-between h-full flex gap-8">
      <div className="gap-[6px] flex flex-col">
        <img src="/assets/logo.png" alt="logo" className="mx-auto bg-black mb-8 hidden md:block" />

        {mainLinks.map(({ to, icon, label }) => (
          <NavLink key={to} to={to} className="p-4 sidebar" onClick={onNavClick}>
            <div className="flex items-center gap-4">
              {icon}
              <span>{label}</span>
            </div>
          </NavLink>
        ))}

        {/* Rest of Main Sidebar Links */}
      </div>

      <div className="flex flex-col gap-8 w-full">
        <NavLink to={'/dashboard/setting'} className="p-4 sidebar" onClick={onNavClick}>
          <div className="flex items-center gap-4">
            <CloseCircleIcon className="w-6 h-6" />
            <span>Setting</span>
          </div>
        </NavLink>
        <Button
          variant="menu"
          className="!w-full inter justify-between hover:!text-black h-[52px] !py-[10px] !px-4 !text-base !text-gray-color group"
        >
          Sing Up
          <ExpertIcon className="text-gray-color group-hover:text-black transition-colors duration-200" />
        </Button>
      </div>
    </div>
  );
}
