import ListCardService from "@/app/components/ListCardService";
import ServiceCard from "@/app/components/ServiceCard";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import ListProjectCard from "./components/ListProjectCard";

export default function Home() {
  return (
    <div className="my-9 lg:mx-[80px] md:mx-[50px] mx-[16px]  ">
      <ListCardService />
      <ListProjectCard />
    </div>
  );
}
