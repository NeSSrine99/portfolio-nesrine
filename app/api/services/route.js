const Services = [
  {
    id: 1,
    logo: "group.svg",
    name: "Designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
  {
    id: 2,
    logo: "services (1).svg",
    name: "Développer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
  {
    id: 3,
    logo: "services.svg",
    name: "Devops",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
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
