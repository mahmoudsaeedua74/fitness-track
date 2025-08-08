import { useState } from "react";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  const plans = [
    {
      name: "Beginner Plan",
      price: "$10",
      period: "Month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      isPopular: false,
    },
    {
      name: "Premium Plan",
      price: "$15",
      period: "Month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      isPopular: true,
    },
    {
      name: "Premium Plan",
      price: "$20",
      period: "Month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-2">Pricing Plan</p>
          <h2 className="text-4xl font-bold text-black-text mb-8">
            JOIN TODAY
          </h2>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-sm">
              <button
                onClick={() => setActiveTab("Monthly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === "Monthly"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab("Yearly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === "Yearly"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black"
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
                  ? "bg-black text-white scale-105 shadow-xl"
                  : "shadow-lg hover:shadow-2xl"
              }`}
            >
              <div className="text-center">
                <h3
                  className={`text-lg font-medium mb-2 ${
                    plan.isPopular ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.isPopular ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    / {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mb-8 ${
                    plan.isPopular ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span
                      className={`mr-3 ${
                        plan.isPopular ? "text-white" : "text-green-500"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={
                        plan.isPopular ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.isPopular
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
