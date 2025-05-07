const Services = [
  {
    id: 1,
    logo: "designe.svg",
    name: "designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
  {
    id: 2,
    logo: "designe.svg",
    name: "FrontEnd Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
  {
    id: 3,
    logo: "designe.svg",
    name: "Tester",
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
