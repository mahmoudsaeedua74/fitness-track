import HomeHeader from "../components/home/Header";
import StatsSection from "../components/home/StatsSection";
import Trainers from "../components/home/TrainersSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PricingSection from "../components/home/PricingSection ";
import ReviewsSection from "../components/home/ReviewsSection";
import CallUsSection from "../components/home/CallUsSection";
import Footer from "../components/home/Footer";
import Navbar from "../components/navbar/Navbar";
import ClassesSection from "../components/home/ClassesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <StatsSection />
      <WhyChooseUs />
      <ClassesSection />
      <Trainers />
      <PricingSection />
      <ReviewsSection />
      <CallUsSection />
      <Footer />
    </>
  );
}
