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
      "Working with you was a true pleasure. Your motivation and positive energy really stood out in our group.",

    image: "/images/rahma.jpg",
  },
  {
    id: 4,
    name: "Ahmed Tombari",
    title: "Full-Stack Developer",
    testimonial:
      "Your listening and team spirit made all the difference. I’m glad to have shared this journey with you.",

    image: "/images/ahmed.jpg",
  },
  {
    id: 5,
    name: "Fatma Akermi",
    title: "Full-Stack Developer",
    testimonial:
      " Thank you for your creativity and spontaneity. You always surprised us in the best ways.",

    image: "/images/fatma1.png",
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
