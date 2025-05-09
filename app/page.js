import ListCardService from "@/app/components/ListCardService";
import ListProjectCard from "./components/ListProjectCard";
import CarouselCertif from "./components/CarouselCertif";
import ScrollingSkills from "./components/ScrollingSkills";
import CarouselSoftSkills from "./components/CarouselSoftskills";
import softSkills from "./data/page";

export default function Home() {
  return (
    <div className="my-9 lg:mx-[80px] md:mx-[50px] mx-[16px]  ">
      <ListCardService />
      <ListProjectCard />
      <CarouselCertif />
      <ScrollingSkills />
      <CarouselSoftSkills skills={softSkills} />
    </div>
  );
}
