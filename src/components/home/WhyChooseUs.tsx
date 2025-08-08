import { FaDumbbell } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { PiBoxingGloveFill, PiBarbellDuotone } from "react-icons/pi";
import { Heading } from "../ui/Heading";
import { motion } from "framer-motion";
import {
  featureItem,
  featuresContainer,
  imageVariant,
} from "../../utils/animation";

const features = [
  {
    id: 1,
    icon: <FaDumbbell size={24} className="text-white" />,
    title: "Expert Trainers",
    description:
      "Train with certified professionals who create personalized programs tailored to your fitness level and goals.",
  },
  {
    id: 2,
    icon: <GrYoga size={24} className="text-white" />,
    title: "Modern Equipment",
    description:
      "Access state-of-the-art machines and free weights designed for maximum performance and safety.",
  },
  {
    id: 3,
    icon: <PiBoxingGloveFill size={24} className="text-white" />,
    title: "Flexible Schedule",
    description:
      "Enjoy a variety of classes and open gym hours that fit seamlessly into your busy lifestyle.",
  },
  {
    id: 4,
    icon: <PiBarbellDuotone size={24} className="text-white" />,
    title: "Personal Training",
    description:
      "Work one-on-one with dedicated coaches who keep you motivated and on track to achieve results faster.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#eeeeee] py-12 md:py-[112px]">
      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 mb-20">
        <Heading
          title="Why Choose Us"
          description="We’re more than just a gym — we’re a community committed to helping you reach your fitness goals. With expert trainers, cutting-edge equipment, and a motivating environment, we make every workout count."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-6 order-2 lg:order-1"
            variants={featuresContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={featureItem}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="bg-[#3B3B3B] p-6 rounded-lg shadow-md  transition-all duration-300 cursor-pointer flex-1 min-w-[calc(50%-0.75rem)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-black-text rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Images Section */}
          <motion.div
            className="flex gap-4 w-full order-1 lg:order-2"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col gap-4 flex-1">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
                <img
                  src="/assets/whyUsOne.webp"
                  alt="Gym equipment"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
                <img
                  src="/assets/whyUsT.webp"
                  alt="Training session"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            <div className="relative flex-1 rounded-lg overflow-hidden aspect-[8/7] group">
              <img
                src="/assets/whyUsThree.webp"
                alt="Fitness training"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
