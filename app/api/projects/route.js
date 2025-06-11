import { FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk, SiRedux, SiSass, SiStrapi } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Projects = [
  {
    id: 1,
    imageDev: "/images/Emc.png",
    imageFigma: "/images/VideoEmc.webm",
    name: "Emc",
    nameSociete: "Tak&Me",
    role: "Stagieur In Front-End",
    linkSociete:
      "https://www.linkedin.com/company/tekandme/posts/?feedView=all",
    desc: "EMC is a robust web-based content management platform with an integrated, user-friendly dashboard, enabling continuous and efficient content control through advanced features.",
    liveSite: "https://www.emc.mc/",
    codeGitlab: "",
    iconLists: [
      "/images/Nextjs.png",
      "/images/redux.svg",
      "/images/scss.svg",
      "/images/bootstrap.svg",
      "/images/strapi.svg",
    ],
  },
  {
    id: 2,
    imageDev: "/images/e-commerce.png",
    imageFigma: "/images/videoE-commerce.mp4",
    name: "Naïma",
    nameSociete: "Personal",
    role: "Full-Stack",
    linkSociete: "www.linkedin.com/in/nesrine-nasri-b6a348244",
    desc: "Naïma is a powerful e-commerce platform with an integrated dashboard, allowing smooth management of products, orders, and customers through an intuitive interface and advanced tools.",
    liveSite: "",
    codeGitlab: "https://gitlab.com/devopsproject7692523/e-commerce.git",
    iconLists: [
      "/images/Nextjs.png",
      "/images/tail.svg",
      "/images/clerk.svg",
      "/images/strapi.svg",
    ],
  },
  {
    id: 3,
    imageDev: "/images/Ipalm-site.png",
    imageFigma: "/images/Ipalm-site.png",
    nameSociete: "iPalm",
    name: " ipalm ",
    role: "stagieur in Front-End",
    linkSociete:
      "https://www.linkedin.com/company/ipalmtech/posts/?feedView=all",
    desc: "During my internship, I helped build the company website using React.js and Node.js, focusing on responsive UI, client-server integration, and performance optimization.",
    liveSite: "http://www.ipalm.tn",
    codeGitlab: "https://github.com/iPalmTech/ipalm-site.git",
    iconLists: [
      "/images/re.svg",
      "/images/strapi.svg",
      "/images/gatsby.svg",
      "/images/i18n.svg",
    ],
  },

  {
    id: 4,
    imageDev: "/images/imgFarmaconnect.png",
    imageFigma: "/images/vedioFarmaconnect.mp4",
    name: "Farmaconnect",
    nameSociete: "Personal",
    role: "Full-Stack",
    linkSociete: "www.linkedin.com/in/nesrine-nasri-b6a348244",
    desc: "A modern pharmacy website that allows users to browse and order medicines online, view product details, and get health advice through a user-friendly interface.",
    liveSite: "",
    codeGitlab: "https://gitlab.com/devopsproject7692523/farmaconnect.git",
    iconLists: ["/images/Nextjs.png", "/images/tail.svg", "/images/clerk.svg"],
  },

  {
    id: 5,
    imageDev: "/images/rent-house.png",
    imageFigma: "/images/vedioRentHouse.mp4",
    name: "Rent House",
    nameSociete: "Personal",
    role: "Full-Stack",
    linkSociete: "www.linkedin.com/in/nesrine-nasri-b6a348244",
    desc: "A modern rental website that allows users to browse and book houses online, view property details, and get in touch with landlords through a user-friendly interface.",
    liveSite: "https://rent-house-wheat.vercel.app/",
    codeGitlab: "https://github.com/NeSSrine99/ExamenBlanc",
    iconLists: ["/images/Nextjs.png", "/images/tail.svg"],
  },

  {
    id: 6,
    imageDev: "/images/loca-tunisie.png",
    imageFigma: "/images/vedioLocaTunisie.mp4",
    name: "Loca Tunisie",
    nameSociete: "Personal",
    role: "Full-Stack",
    linkSociete: "www.linkedin.com/in/nesrine-nasri-b6a348244",
    desc: "A modern rental website that allows users to browse and book houses online, view property details, and get in touch with landlords through a user-friendly interface.",
    liveSite: "https://loca-tunisie-three.vercel.app/",
    codeGitlab: "https://github.com/NeSSrine99/Loca-Tunisie",
    iconLists: ["/images/Nextjs.png", "/images/tail.svg"],
  },
  {
    id: 7,
    imageDev: "/images/foodzy.png",
    imageFigma: "/images/vedioFoodzy.mp4",
    name: "Foodzy",
    nameSociete: "Personal",
    role: "Full-Stack",
    linkSociete: "www.linkedin.com/in/nesrine-nasri-b6a348244",
    desc: "A modern food delivery website that allows users to browse and order food online, view restaurant details, and get in touch with delivery personnel through a user-friendly interface.",
    liveSite: "https://foodzy-three.vercel.app/",
    codeGitlab: "https://github.com/NeSSrine99/foodzy",
    iconLists: ["/images/Nextjs.png", "/images/tail.svg"],
  },
  {
    id: 8,
    imageDev: "/images/portfolio.png",
    imageFigma: "/images/vedioFoodzy.mp4",
    name: "Foodzy",
    nameSociete: "Personal",
    role: "Full-Stack",
    linkSociete: "www.linkedin.com/in/nesrine-nasri-b6a348244",
    desc: "A personal portfolio website showcasing my projects, skills, certifications, and professional experience, designed with a modern UI to highlight my work and expertise.",
    liveSite: "https://deft-gaufre-8580b0.netlify.app/",
    codeGitlab: "https://gitlab.com/devopsproject7692523/nesrin-portfolio",
    iconLists: [
      "/images/Nextjs.png",
      "/images/tail.svg",
      "/images/sentry.svg",
      "/images/ts.svg",
    ],
  },
];

export async function GET() {
  return new Response(JSON.stringify(Projects), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
