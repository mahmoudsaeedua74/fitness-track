import { Link } from 'react-router-dom';
import type { Plan } from '../../utils/interface';
import { Button } from '../ui/Button';
interface PanelCardProps {
  data: Plan;
  isActive: boolean;
}
const PanelCard: React.FC<PanelCardProps> = ({ data, isActive }) => {
  return (
    <div
      className={`relative rounded-xl w-full max-w-sm mx-auto p-6 m-2 sm:p-8 flex flex-col transition-all duration-300 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]
        ${
          isActive
            ? 'bg-black text-white shadow-md scale-105 transform'
            : 'bg-white  border border-black text-black shadow-lg hover:shadow-lg hover:-translate-y-1'
        }
      `}
    >
      {data.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-2 sm:px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex-grow">
        <h3
          className={`text-lg sm:text-xl font-semibold mb-2 ${
            isActive ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {data.name}
        </h3>
        <div className="mb-4 flex items-baseline">
          <span className="text-3xl sm:text-4xl font-bold">{data.price}</span>
          <span className={`text-sm ml-1 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
            / {data.period}
          </span>
        </div>
        <p
          className={`text-sm leading-relaxed mb-6 sm:mb-8 ${
            isActive ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {data.description}
        </p>

        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {data.features.map((feature, idx) => (
            <li
              key={idx}
              className={`flex items-start text-sm ${isActive ? 'text-gray-300' : 'text-gray-700'}`}
            >
              <span
                className={`mr-3 font-bold flex-shrink-0 ${
                  isActive ? 'text-white' : 'text-green-500'
                }`}
              >
                ✓
              </span>
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link to={'/register'}>
        <Button
          variant="default"
          className={` py-3 w-full group  relative rounded-lg font-medium transition-all ${
            isActive
              ? ''
              : 'bg-black text-white hover:bg-white hover:text-black-text  border-black-text'
          }`}
        >
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
      </Link>
    </div>
  );
};

export default PanelCard;
