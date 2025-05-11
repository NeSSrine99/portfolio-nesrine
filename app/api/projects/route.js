const Projects = [
  {
    id: 1,
    imageDev: "/images/Emc.png",
    imageFigma: "/images/VideoEmc.webm",
    name: "Emc",
    nameSociete: "Tak&Me",
    role: "stagieur in Front-End",
    linkSociete:
      "https://www.linkedin.com/company/tekandme/posts/?feedView=all",
    desc: "EMC is a robust web-based content management platform with an integrated, user-friendly dashboard, enabling continuous and efficient content control through advanced features.",
    liveSite: "https://www.emc.mc/",
    codeGitlab: "",
    skills: [
      "Next.js",
      "Scss",
      "Strapi",
      "Redux Toolkit",
      "BootStrap",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    imageDev: "/images/e-commerce.png",
    imageFigma: "/images/videoE-commerce.mp4",
    name: "Naïma",
    desc: "Naïma is a powerful e-commerce platform with an integrated dashboard, allowing smooth management of products, orders, and customers through an intuitive interface and advanced tools.",
    liveSite: "",
    codeGitlab: "https://gitlab.com/devopsproject7692523/e-commerce.git",
    skills: ["Next.js", "Tailwind css", "Strapi", "clerk", "hyperUI"], // المهارات
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
    skills: ["React", "MySQL", "Node.js"],
  },

  {
    id: 4,
    imageDev: "/images/Emc.png",
    imageFigma: "/images/mohsen-taheri-fZRsSiTCAR4-unsplash.jpg",
    name: "Emc",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    liveSite: "https://www.emc.mc/",
    codeGitlab: "https://gitlab.com/devopsproject7692523/farmaconnect.git",
    skills: ["React", "Node.js", "MongoDB"], // المهارات
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
