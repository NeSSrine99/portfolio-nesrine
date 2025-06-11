const Services = [
  {
    id: 1,
    logo: "group.svg",
    name: "Designer",
    desc: "Creative designers craft stunning user interfaces, blending color, typography, and layout to ensure beautiful and intuitive digital experiences for every user.",
  },
  {
    id: 2,
    logo: "services (1).svg",
    name: "Développeur",
    desc: "Developers build the backbone of applications, writing clean and efficient code that powers modern websites, mobile apps, and custom software solutions.",
  },
  {
    id: 3,
    logo: "services.svg",
    name: "DevOps",
    desc: "DevOps engineers streamline software delivery by automating workflows, managing cloud infrastructure, and ensuring smooth and secure deployments across teams.",
  },
];

export async function GET() {
  return new Response(JSON.stringify(Services), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
