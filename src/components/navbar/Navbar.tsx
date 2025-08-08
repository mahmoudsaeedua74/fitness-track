import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavLinks from './NavLinks';
import { Button } from '../ui/Button';
import MenuIcon from '../icon/sidebar/MenuIcon';
import {
  containerVariant,
  menuItemVariants,
  overlayVariants,
  sidebarVariants,
} from '../../utils/animation';
import CloseCircleIcon from '../icon/sidebar/CloseCircleIcon';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false), []);

  // Body overflow management
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="mx-10 rounded-xl  px-[60px]   sticky top-2  sm:block z-50 bg-[#010101] lg:border-none border-b-[0.5px] ">
        <motion.div
          className="flex justify-between items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Link to={''}>
            <img
              src="/assets/logo.png"
              loading="eager"
              alt="logo of page"
              className="lg:block hidden  object-contain"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            <NavLinks isMobile={false} />
          </div>
          <div className="flex items-center gap-2 w-full lg:w-fit justify-between ">
            <Button variant="default" className="order-1 sm:order-none group  relative">
              <span className="absolute end-0 pr-4 duration-200 ease-out group-hover:-translate-x-1">
                <svg
                  className="w-5 h-5 text-[#11111]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-all duration-200 ease-in-out group-hover:scale-90">
                Join Now
              </span>
            </Button>

            <div className="flex order-3 gap-2 items-center  justify-center">
              <motion.button
                onClick={() => setOpen(!isOpen)}
                className="size-6 cursor-pointer rounded-full lg:hidden flex items-center justify-center"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MenuIcon className="text-white size-10" />
              </motion.button>
            </div>
            <Link to={'/'} className="order-1 ">
              <motion.img
                src="/assets/logo.png"
                alt="logo of page"
                className="w-[95px] h-[31px] sm:w-[120px] sm:h-[39px] md:w-[140px] md:h-[46px] lg:w-[180px] lg:h-[56px] block lg:hidden"
              />
            </Link>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={handleClose}
            />

            <motion.aside
              className={`fixed top-0 start-0 h-full rounded-e-xl w-[60%] px bg-black-text text-gray-color z-50 lg:hidden pt-10 px-5 flex flex-col items-start`}
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.button
                onClick={handleClose}
                className="mb-4 p-2 self-end"
                variants={menuItemVariants}
              >
                <CloseCircleIcon className="text-white  hover:text-gray-400 transition-all duration-300 hover:scale-110 hover:rotate-90 size-8" />
              </motion.button>

              <motion.div
                className="font-semibold gap-2 flex flex-col w-full"
                variants={containerVariant}
                initial="closed"
                animate="open"
              >
                <NavLinks isMobile={true} />
              </motion.div>

              <motion.div className="w-full" variants={menuItemVariants}>
                <Button variant="default" className="order-1 mt-10 sm:order-none group  relative">
                  <span className="absolute end-0 pr-4 duration-200 ease-out group-hover:-translate-x-1">
                    <svg
                      className="w-5 h-5 text-[#11111]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-all duration-200 ease-in-out group-hover:scale-90">
                    Join Now
                  </span>
                </Button>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
