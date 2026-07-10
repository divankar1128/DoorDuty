import Navbar from "../../components/layout/Navbar";
import Hero from "../../features/home/Hero";
import PopularServices from "../../components/sections/PopularServices";
import HowItWorks from "../../components/sections/HowItWorks";
import BookingSteps from "../../components/sections/BookingSteps";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import Cities from "../../components/sections/Cities";
import CustomerReviews from "../../components/sections/CustomerReviews";
import CircularFAQ from "../../components/sections/CircularFAQ";
import Footer from "../../components/layout/Footer";
;
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularServices />
      <HowItWorks />
      <BookingSteps />
      <WhyChooseUs />
      <Cities />
      <CustomerReviews />

      <CircularFAQ />
      <Footer />

    </>
  );
}