import { useState } from "react";
import { Button } from "../ui/Button";

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Kerry Rohan",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      name: "Kerry Rohan",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-gray-600 mb-2">Reviews</p>
            <h2 className="text-4xl font-bold text-black-text">
              YOUR OPINIONS
            </h2>
          </div>
          <Button
            variant="default"
            className="bg-black text-white hover:bg-gray-800"
          >
            + Your Opinions
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Images */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-xs">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src="/assets/banner.webp"
                  alt="Reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src="/assets/banner.webp"
                  alt="Reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src="/assets/banner.webp"
                  alt="Reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src="/assets/banner.webp"
                  alt="Reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`${index === currentReview ? "block" : "hidden"}`}
              >
                <h3 className="text-xl font-semibold text-black-text mb-2">
                  {review.name}
                </h3>
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <p className="text-gray-600 leading-relaxed">{review.text}</p>
              </div>
            ))}

            {/* Navigation */}
            <div className="flex space-x-4">
              <button
                onClick={prevReview}
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
