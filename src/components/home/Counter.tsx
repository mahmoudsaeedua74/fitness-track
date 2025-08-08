import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterBoxProps {
  value: string;
  label: string;
}

export default function CounterBox({ value, label }: CounterBoxProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  const [count, setCount] = useState<number>(0);
  const [hasCounted, setHasCounted] = useState<boolean>(false);

  useEffect(() => {
    if (!isInView || hasCounted) return;

    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    const duration = 1000; // مدة العد
    const stepTime = Math.max(Math.floor(duration / numericValue), 20);
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= numericValue) {
        clearInterval(timer);
        setHasCounted(true);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, hasCounted, value]);

  const suffix = value.replace(/[0-9]/g, "");

  return (
    <div
      className="rounded-[10px] bg-[#E0E0E033] bg-opacity-90 text-white flex flex-col items-center justify-center
        h-[115px] w-[105px] px-[10px] py-[12px] gap-[8px]
        sm:h-[130px] sm:w-[140px] sm:px-[14px] sm:py-[16px] sm:gap-[10px]
        md:h-[145px] md:w-[180px] md:px-[18px] md:py-[20px] md:gap-[12px]
        lg:h-[195px] lg:w-[308px] lg:px-[22px] lg:py-[32px] lg:gap-2"
    >
      <p
        ref={ref}
        className="font-bold  text-center leading-none
          text-[26px]
          sm:text-[35px]
          md:text-[50px] 
          lg:text-[80px]"
      >
        {count}
        {suffix}
      </p>

      <p
        className="font-medium  text-center leading-tight
          text-[14px]
          sm:text-[16px]
          md:text-[20px]
          lg:text-[24px]"
      >
        {label}
      </p>
    </div>
  );
}
