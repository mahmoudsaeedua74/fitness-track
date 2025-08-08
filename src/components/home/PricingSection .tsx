import PanelCard from './PanelCard';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { plans } from '../../utils';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-[#eeeeee] py-12 md:py-[77px] md:px-[60px]">
      {/* Toggle Buttons And Tile */}
      <div className="flex justify-around sm:flex-row flex-col sm:text-start text-center items-center md:px-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-gray-600 mb-4 text-2xl">Pricing Plan</p>
          <h2 className="text-[48px] font-bold text-black-text ">Join Today</h2>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-md p-1 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <button className="px-6 py-2 rounded-full transition-all  bg-black text-white">
            Monthly
          </button>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="w-full p-[50px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          centerInsufficientSlides={true}
          loop={false}
          grabCursor={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
          }}
          breakpoints={{
            540: { slidesPerView: 1, centeredSlides: true, spaceBetween: 20 },
            850: { slidesPerView: 2, centeredSlides: true, spaceBetween: 24 },
            1280: { slidesPerView: 3, centeredSlides: true, spaceBetween: 24 },
          }}
          className="panel-swiper"
          initialSlide={1}
        >
          {plans.map((panel, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center p-8 sm:py-20 cursor-pointer"
            >
              <PanelCard data={panel} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PricingSection;
