import ListCardService from "@/app/components/ListCardService";
import ListProjectCard from "./components/ListProjectCard";
import CarouselCertif from "./components/CarouselCertif";
import ScrollingSkills from "./components/ScrollingSkills";
import CarouselSoftSkills from "./components/CarouselSoftskills";
import softSkills from "./data/page";
import Carousel from "./components/CarouselCertif";
import About from "./components/About";
import TestimonialCarousel from "./components/TestimonialCard";
import DesignCard from "./components/DesignCard";
import DesignList from "./components/DesignList";
import TestimonialCard from "./components/TestimonialCard";
import ContactCard from "./components/ContactCard";
import Grid from "./components/Grid";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="my-20  bg-gray-50  ">
      <About />
      <Grid />
      <ListProjectCard />
      <ListCardService />
      <DesignList />
      <TestimonialsSection />
      <ContactCard />
    </main>
  );
}
