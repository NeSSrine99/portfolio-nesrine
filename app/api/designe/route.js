const Design = [
  {
    id: 1,
    images: ["/images/plantea1.png", "/images/plantea2.png"],
    link: "https://www.figma.com/design/gbv7JZvCEj9NAA62KCs6lK/Plantea-NesrineNasri?node-id=19-149&t=ufgriHs1ctTQ4Bv3-1",
  },
  {
    id: 2,
    images: [
      "/images/mansoury1.png",
      "/images/mansoury2.png",
      "/images/mansoury3.png",
      "/images/mansoury4.png",
    ],
    link: "https://www.figma.com/design/kR0MVpCIzkpVgQAJetRRrB/ExamenBlancNesrin?node-id=1-1138&t=loJMGAFHr22GKK6f-1",
  },
  {
    id: 3,
    images: [
      "/images/e-commerce1.png",
      "/images/e-commerce2.png",
      "/images/e-commerce3.png",
      "/images/e-commerce4.png",
    ],
    link: "https://www.figma.com/design/ytYDDawWwFCedmfvzFAyfL/E-commerce-nesrin?node-id=50-2&t=m0JfcqiO5ibyaBvR-1",
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
    link: "https://www.figma.com/design/HBG7Y7jJaG6lMn99sXi13g/PharmaConnect?node-id=11-35&t=79CcdotHtGF6yiIB-1",
  },
  {
    id: 5,
    images: ["/images/handmade.png"],
    link: "https://www.figma.com/design/lRcV12xMHsGydoCERyHDMS/HandmadesNesrine?node-id=0-1&t=4GqEaK53Yla6D0BU-1",
  },
  {
    id: 6,
    images: ["/images/portfolio.png"],
    link: "https://www.figma.com/design/mvBkxCqHtPLCW3EUNA16cY/PortfolioNesrine?node-id=33-768&t=oKpr1zbK812DZzW3-1",
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
