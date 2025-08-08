import { cardVariants, counterContainerVariants } from "../../utils/animation";
import Counter from "./Counter";
import { motion } from "framer-motion";
const stats: { target: string; label: string; id: number }[] = [
  { target: "95%", id: 1, label: "Customer Satisfaction" },
  { target: "786+", id: 2, label: "Happy Members" },
  { target: "10+", id: 3, label: "Certified Trainers" },
  { target: "5+", id: 4, label: "Years of Service" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#111111] py-16 flex justify-center text-center items-center">
      <motion.div
        variants={counterContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="flex flex-wrap justify-center items-center gap-2 lg:gap-[64px] "
      >
        {stats.map((counter) => (
          <motion.div key={counter.id} variants={cardVariants}>
            <Counter value={counter.target} label={counter.label} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
