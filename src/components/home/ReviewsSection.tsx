import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from '../ui/Button';
import { FaStar } from 'react-icons/fa6';

const reviews = [
  {
    id: 1,
    name: 'Kerry Rohan',
    rating: 4,
    text: 'The trainers here are fantastic, and the environment keeps me motivated every day. Highly recommend!',
  },
  {
    id: 2,
    name: 'Emily Parker',
    rating: 5,
    text: 'Excellent gym facilities with modern equipment. The classes helped me improve my strength and cardio.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    rating: 4,
    text: 'Friendly staff and personalized training programs that really work for my goals.',
  },
  {
    id: 4,
    name: 'Sophia Wilson',
    rating: 5,
    text: 'Great atmosphere, very clean, and the trainers are super supportive.',
  },
  {
    id: 5,
    name: 'James Lee',
    rating: 4,
    text: 'Love the flexible schedule and the variety of classes available here!',
  },
  {
    id: 6,
    name: 'Olivia Smith',
    rating: 5,
    text: 'Love the flexible schedule and the variety of classes available here!',
  },
];

const renderStars = (rating: number) =>
  [...Array(5)].map((_, i) => (
    <span key={i} className={`text-xl ${i < rating ? 'text-[#424242]' : 'text-gray-300'}`}>
      <FaStar />
    </span>
  ));
export default function ReviewsSection() {
  return (
    <section className="bg-[#eeeeee] py-12 md:py-[98px] md:px-[60px]">
      <div className="px-[60px]">
        {/* Header */}
        <div className="flex justify-around items-center mb-[80px]">
          <div>
            <p className="text-gray-600 uppercase tracking-wide mb-2">Reviews</p>
            <h2 className="text-4xl font-bold text-black-text">Your Review</h2>
          </div>
          <Button variant="opinion" size={'lg'}>
            Your Opinion +
          </Button>
        </div>

        {/* Main content flex container */}
        <div className="flex gap-[116px] items-center mt-[80px] flex-col lg:flex-row">
          {/* Left side: Image */}
          <img
            src="/assets/group.png"
            alt="Reviewers group"
            className="w-[435px] h-[335px] object-cover flex-shrink-0 max-w-full"
          />

          {/* Right side: Reviews + navigation buttons */}
          <div className="flex flex-col flex-1 min-w-0 w-full">
            {/* Add explicit width and overflow handling */}
            <div className="w-full overflow-hidden">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                slidesPerGroup={1} // Move one slide at a time
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    slidesPerGroup: 1,
                  },
                }}
                className="reviews-swiper w-full "
                style={{
                  width: '100%',
                  overflow: 'visible', // Allow slides to be visible
                }}
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id} className="h-auto">
                    <div className="bg-white border border-gray-300 rounded-xl px-6 py-20 shadow-md flex flex-col h-full min-h-[200px] ">
                      <h3 className="text-xl font-semibold text-[#424242] mb-3">{review.name}</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        {renderStars(review.rating)}
                        <span className="text-gray-500 font-semibold text-sm">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="text-[#757575] flex-grow leading-relaxed">{review.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation buttons below swiper */}
            <div className="flex justify-center gap-6 mt-8">
              <button
                className="swiper-button-prev-custom px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
                aria-label="Previous Review"
              >
                ← Prev
              </button>
              <button
                className="swiper-button-next-custom px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
                aria-label="Next Review"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
