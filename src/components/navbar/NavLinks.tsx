import { motion } from "framer-motion";
import { links } from "../../utils";
import { menuItemVariants } from "../../utils/animation";
const NavLinks = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      {links.map((link, index) => (
        <motion.a
          key={link.id}
          className={`lg:text-lg py-4 cursor-pointer duration-300 transition-all ${
            isMobile
              ? "text-[#9E9E9E]  hover:bg-white rounded-xl px-5 w-[150px]  hover:text-black-text"
              : "hover:text-white relative text-[#9E9E9E] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-[2px]  after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0"
          }`}
          variants={menuItemVariants}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {link.name}
        </motion.a>
      ))}
    </>
  );
};
export default NavLinks;
