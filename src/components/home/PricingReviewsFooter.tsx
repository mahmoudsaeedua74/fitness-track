import { useState } from 'react';
import { Button } from '../ui/Button';

const PricingReviewsFooter = () => {
  const [activeTab, setActiveTab] = useState('Monthly');
  const [currentReview, setCurrentReview] = useState(0);

  const plans = [
    {
      name: 'Beginner Plan',
      price: '$10',
      period: 'Month',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      isPopular: false,
    },
    {
      name: 'Premium Plan',
      price: '$15',
      period: 'Month',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      isPopular: true,
    },
    {
      name: 'Premium Plan',
      price: '$20',
      period: 'Month',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      isPopular: false,
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Kerry Rohan',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      name: 'Kerry Rohan',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white">
      {/* Pricing Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Pricing Plan</p>
            <h2 className="text-4xl font-bold text-black-text mb-8">JOIN TODAY</h2>

            {/* Toggle Buttons */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-1 shadow-sm">
                <button
                  onClick={() => setActiveTab('Monthly')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === 'Monthly'
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setActiveTab('Yearly')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === 'Yearly'
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  plan.isPopular
                    ? 'bg-black text-white scale-105 shadow-xl'
                    : 'shadow-lg hover:shadow-2xl'
                }`}
              >
                <div className="text-center">
                  <h3
                    className={`text-lg font-medium mb-2 ${
                      plan.isPopular ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span
                      className={`text-sm ml-1 ${
                        plan.isPopular ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      / {plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-8 ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <span className={`mr-3 ${plan.isPopular ? 'text-white' : 'text-green-500'}`}>
                        ✓
                      </span>
                      <span className={plan.isPopular ? 'text-gray-300' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.isPopular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-gray-600 mb-2">Reviews</p>
              <h2 className="text-4xl font-bold text-black-text">YOUR OPINIONS</h2>
            </div>
            <Button variant="default" className="bg-black text-white hover:bg-gray-800">
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
                <div key={review.id} className={`${index === currentReview ? 'block' : 'hidden'}`}>
                  <h3 className="text-xl font-semibold text-black-text mb-2">{review.name}</h3>
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

      {/* Call Us Section */}
      <div
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/assets/banner.webp")',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
            Full (1550) × 749
          </div>
          <p className="text-white mb-4">Call Us Now</p>
          <h2 className="text-white text-4xl font-bold">+91 82000-60000</h2>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-black rounded mr-2"></div>
                <span className="font-bold text-xl">FITGURU</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Accusamus quos nesciunt veniam nam quis</p>
              <p className="text-gray-600 text-sm mb-4">shahshaan254@gmail.com</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  📘
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  🐦
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  📷
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Lorem Ipsum */}
            <div>
              <h3 className="font-semibold mb-4">Lorem Ipsum</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Lorem
                  </a>
                </li>
              </ul>
            </div>

            {/* Lorem Ipsum 2 */}
            <div>
              <h3 className="font-semibold mb-4">Lorem Ipsum</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black text-sm">
                    Lorem
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingReviewsFooter;
