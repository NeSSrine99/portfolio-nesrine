const Testimonials = [
  {
    id: 1,
    name: "Roua Sallami",
    title: "Front-End Developer",
    image: "/images/roua.jpeg",
    testimonial:
      "Working with this team has been an incredible experience. Their attention to detail and passion for quality .",
  },
  {
    id: 2,
    name: "Ikhlas Nasri",
    title: "Front-End Developer",
    testimonial:
      "Great experience working with the team. They delivered beyond expectations.",

    image: "/images/ikhlas.png",
  },
  {
    id: 3,
    name: "Rahma Habeili",
    title: "Mobile Developer",
    testimonial:
      "The service was smooth, professional, and efficient. Highly recommend!",

    image: "/images/rahma.jpg",
  },
  {
    id: 4,
    name: "Ahmed Tombari",
    title: "Full-Stack Developer",
    testimonial:
      "The service was smooth, professional, and efficient. Highly recommend!",

    image: "/images/ahmed.jpg",
  },
  {
    id: 5,
    name: "Ahmed Tombari",
    title: "Full-Stack Developer",
    testimonial:
      "The service was smooth, professional, and efficient. Highly recommend!",

    image: "/images/ahmed.jpg",
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
