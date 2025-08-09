import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SocialLinks } from './SocialIcon';
import { containerVariants, itemVariants } from '../../utils/animation';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
  return (
    <header className="relative overflow-hidden h-screen w-full text-white ">
      {/* Background Image Zoom */}
      <motion.img
        initial={{ scale: 1.15, opacity: 90 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        src="/assets/banner.webp"
        alt="Gym background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Running Person Layer with 3D entrance */}
      <motion.img
        src="/assets/banner.webp"
        alt="Runner"
        className="absolute left-0 object-cover lg:object-contain bottom-0 h-full max-h-screen  z-10"
        initial={{ x: -120, scale: 1.1, rotateY: 15, opacity: 0 }}
        animate={{ x: 0, scale: 1, rotateY: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black z-10"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 w-full max-w-[800px] px-6 md:px-20 flex flex-col gap-6 justify-center h-full"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[48px] md:text-[72px] font-bold leading-[1.1]"
        >
          Elevate
          <br />
          your workout
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base md:text-xl text-gray-200">
          Join us for a unique fitness experience featuring yoga, dance, crossfit, and personalized
          training sessions. We help you become the best version of yourself!
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link to={'/register'}>
            <Button variant="default" className="order-1 mt-10 sm:order-none group relative">
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
                Get start
              </span>
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>
      </motion.div>
    </header>
  );
}
