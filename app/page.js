import ListCardService from "@/app/components/ListCardService";
import ListProjectCard from "./components/ListProjectCard";
import CarouselCertif from "./components/CarouselCertif";
import ScrollingSkills from "./components/ScrollingSkills";
import CarouselSoftSkills from "./components/CarouselSoftskills";
import softSkills from "./data/page";
import Carousel from "./components/CarouselCertif";
import About from "./components/About";

export default function Home() {
  return (
    <div className="my-20 lg:mx-[80px] md:mx-[50px] mx-[16px]  ">
      <About />
      <div className="bg-cyan-900 p-4">
        <ScrollingSkills className="col-end-2 " />
        <div className="grid lg:grid-cols-2 justify-between">
          <CarouselSoftSkills skills={softSkills} />
          <Carousel />
        </div>
      </div>
      <ListProjectCard />
      <ListCardService />
    </div>
  );
}
