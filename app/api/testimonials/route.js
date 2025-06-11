// app/api/testimonials/route.js (إذا كنت تستخدم Next.js 13 أو 14 مع App Router)

const Testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Product Manager at TechCorp",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?semt=ais_hybrid&w=740",
    testimonial:
      "Working with this team has been an incredible experience. Their attention to detail and passion for quality .",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Marketing Manager",
    testimonial:
      "Great experience working with the team. They delivered beyond expectations.",

    image:
      "https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    name: "Lisa Ray",
    title: "Product Designer",
    testimonial:
      "The service was smooth, professional, and efficient. Highly recommend!",

    image:
      "https://img.freepik.com/photos-premium/jeune-homme-isole-bleu_1368-124991.jpg?semt=ais_hybrid&w=740",
  },
];

export async function GET() {
  return new Response(JSON.stringify(Testimonials), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
