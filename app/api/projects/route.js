const Projects = [
  {
    id: 1,
    imageDev: "/images/Emc.png",
    imageFigma: "/images/mohsen-taheri-fZRsSiTCAR4-unsplash.jpg",
    name: "Emc",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    liveSite: "https://www.emc.mc/",
    codeGitlab: "https://gitlab.com/devopsproject7692523/farmaconnect.git",
    skills: ["JavaScript", "React", "Next.js", "Strapi"], // المهارات
  },
  {
    id: 2,
    imageDev: "/images/Emc.png",
    imageFigma: "/images/mohsen-taheri-fZRsSiTCAR4-unsplash.jpg",
    name: "Emc",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    liveSite: "https://www.emc.mc/",
    codeGitlab: "https://gitlab.com/devopsproject7692523/farmaconnect.git",
    skills: ["HTML", "CSS", "JavaScript", "Node.js"], // المهارات
  },
  {
    id: 3,
    imageDev: "/images/Emc.png",
    imageFigma: "/images/mohsen-taheri-fZRsSiTCAR4-unsplash.jpg",
    name: "Emc",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    liveSite: "https://www.emc.mc/",
    codeGitlab: "https://gitlab.com/devopsproject7692523/farmaconnect.git",
    skills: ["PHP", "MySQL", "Laravel"], // المهارات
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
