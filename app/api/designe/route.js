// app/api/designs/route.js

const Design = [
  {
    id: 1,
    images: ["/images/plantea1.png", "/images/plantea2.png"],
    link: "https://www.figma.com/design/gbv7JZvCEj9NAA62KCs6lK/Plantea-NesrineNasri?node-id=1-4222&t=zyYDzIAB8nekacvo-1",
  },
  {
    id: 2,
    images: [
      "/images/mansoury1.png",
      "/images/mansoury2.png",
      "/images/mansoury3.png",
      "/images/mansoury4.png",
    ],
    link: "https://www.figma.com/design/gbv7JZvCEj9NAA62KCs6lK/Plantea-NesrineNasri?node-id=1-4222&t=zyYDzIAB8nekacvo-1",
  },
  {
    id: 3,
    images: [
      "/images/e-commerce1.png",
      "/images/e-commerce2.png",
      "/images/e-commerce3.png",
      "/images/e-commerce4.png",
    ],
    link: "https://www.figma.com/design/gbv7JZvCEj9NAA62KCs6lK/Plantea-NesrineNasri?node-id=1-4222&t=zyYDzIAB8nekacvo-1",
  },
  {
    id: 4,
    images: [
      "/images/farmaconnect1.png",
      "/images/farmaconnect2.png",
      "/images/farmaconnect3.png",
      "/images/farmaconnect1.png",
      "/images/farmaconnect2.png",
      "/images/farmaconnect3.png",
    ],
    link: "https://www.figma.com/design/gbv7JZvCEj9NAA62KCs6lK/Plantea-NesrineNasri?node-id=1-4222&t=zyYDzIAB8nekacvo-1",
  },
];

export async function GET() {
  return new Response(JSON.stringify(Design), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
