import { imageVariant } from "../../utils/animation";
import { Heading } from "../ui/Heading";
import { TrainerCard } from "./TrainerCard";
import { motion } from "framer-motion";

const trainers = [
  {
    id: 1,
    name: "John Smith",
    specialty: "Yoga Instructor",
    description:
      "Highly skilled in advanced yoga techniques with 10+ years of experience.",
    image: "/assets/trainer.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    specialty: "Strength Training",
    description: "Expert in building strength programs for all levels.",
    image: "/assets/trainer2.webp",
    rating: 4,
  },
  {
    id: 3,
    name: "Mike Davis",
    specialty: "Cardio Expert",
    description: "Specializes in endurance and high-intensity training.",
    image: "/assets/trainer3.webp",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Wilson",
    specialty: "CrossFit Trainer",
    description: "Passionate about functional training and team workouts.",
    image: "/assets/trainer4.webp",
    rating: 4,
  },
  {
    id: 5,
    name: "David Brown",
    specialty: "Nutritionist",
    description: "Helps clients achieve goals with customized meal plans.",
    image: "/assets/trainer5.webp",
    rating: 5,
  },
  {
    id: 6,
    name: "Lisa Garcia",
    specialty: "Personal Trainer",
    description: "Dedicated to guiding clients towards lasting results.",
    image: "/assets/trainer6.webp",
    rating: 5,
  },
];

export default function TrainersSection() {
  return (
    <section className="bg-[#eeeeee] py-12 md:py-[112px]">
      <div className="container mx-auto px-4 md:mb-20">
        <Heading
          title=" Meet Our Trainers"
          description="Our certified trainers bring years of experience, passion, and dedication to help you reach your fitness goals. From strength training to yoga and nutrition, each trainer is committed to guiding, motivating, and supporting you every step of the way."
        />
        {/* Trainers Grid */}
        <motion.div
          className="space-y-6"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex gap-6 justify-center">
            {trainers.slice(0, 3).map((trainer, index) => (
              <TrainerCard
                trainer={trainer}
                size={index === 1 ? "large" : "small"}
                key={trainer.id}
              />
            ))}
          </div>

          <div className="flex gap-6 justify-center">
            {trainers.slice(3, 6).map((trainer, index) => (
              <TrainerCard
                trainer={trainer}
                size={index === 1 ? "large" : "small"}
                key={trainer.id}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
