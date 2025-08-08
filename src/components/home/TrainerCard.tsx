import { FaStar } from "react-icons/fa6";
import type { Trainer } from "../../utils/interface";

export function TrainerCard({
  trainer,
  size,
}: {
  trainer: Trainer;
  size: string;
}) {
  const cardWidth = size === "large" ? "w-[574px]" : "w-[220px]";
  const cardHeight = "h-[288px]";

  return (
    <div
      className={`relative rounded-[12px] overflow-hidden ${cardWidth} ${cardHeight} group cursor-pointer`}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden aspect-[4/3] ">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Layer عند الـ Hover */}
      <div className="absolute inset-0 bg-white/50 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out flex flex-col justify-center items-center p-4 text-center">
        <h3 className="text-lg font-semibold text-black-text">
          {trainer.name}
        </h3>
        <p className="text-sm text-gray-700 mb-2">{trainer.specialty}</p>
        <p className="text-xs text-gray-600 mb-3">{trainer.description}</p>
        <div className="flex justify-center gap-1">
          {[...Array(trainer.rating)].map((_, i) => (
            <FaStar key={i} size={16} className="text-yellow-500" />
          ))}
        </div>
      </div>
    </div>
  );
}
