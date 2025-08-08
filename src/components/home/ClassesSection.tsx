import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "../ui/Heading";
import {
  classCardVariants,
  classContainerVariants,
  tabItemVariants,
  tabsContainerVariants,
} from "../../utils/animation";
import { categories, classesData } from "../../utils";

export default function ClassesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredClasses =
    activeCategory === "All"
      ? classesData
      : classesData.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-[#eeeeee] py-12 md:py-[112px]">
      <div className="container mx-auto px-4 md:mb-20">
        <Heading
          title="Explore Our Classes"
          description=" Discover a variety of classes designed to help you achieve your
            fitness goals — whether you’re into high-energy cardio, strength
            building, mindful yoga, or just having fun dancing."
        />

        {/* Tabs */}

        <motion.div
          className="flex justify-center gap-3 mb-10 flex-wrap"
          variants={tabsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              variants={tabItemVariants}
              className={`relative px-5 py-1 font-medium rounded-full border transition-all duration-300
        ${
          activeCategory === category
            ? "bg-black-text text-white border-black-text shadow-lg scale-105"
            : "bg-white text-black-text border-gray-300 hover:bg-gray-100"
        }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards with animation */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0"
          variants={classContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          <AnimatePresence mode="wait">
            {filteredClasses.map((item) => (
              <motion.div
                key={item.id}
                variants={classCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="relative rounded-lg overflow-hidden group cursor-pointer"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
