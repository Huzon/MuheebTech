export type Project = {
  id: string;
  category: string;
  title: string;
  summary: string;
  cover: string;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: "home-interior-transformation",
    category: "Residential interiors",
    title: "Home Interior Transformation",
    summary: "Coordinated interior finishes, furniture and detailing brought together as one completed space.",
    cover: "/projects/home/IMG_8559.webp",
    images: [
      { src: "/projects/home/IMG_8559.webp", alt: "Completed home interior" },
      { src: "/projects/home/IMG_9306.webp", alt: "Living room furniture and wall treatment" },
      { src: "/projects/home/IMG_9321.webp", alt: "Bedroom interior with coordinated finishes" },
      { src: "/projects/home/IMG_5169.webp", alt: "Residential interior execution detail" },
    ],
  },
  {
    id: "office-fitout",
    category: "Commercial interiors",
    title: "Office Fit-Out & Joinery",
    summary: "Practical commercial execution combining workspace details, built-ins and finishing works.",
    cover: "/projects/office/IMG_0447.webp",
    images: [
      { src: "/projects/office/IMG_0447.webp", alt: "Completed office interior" },
      { src: "/projects/office/IMG_5742.webp", alt: "Office reception execution" },
      { src: "/projects/office/IMG_8263.webp", alt: "Commercial joinery detail" },
      { src: "/projects/office/IMG_9329.webp", alt: "Finished home office space" },
    ],
  },
  {
    id: "custom-furniture",
    category: "Custom joinery",
    title: "Made-to-Measure Furniture",
    summary: "Custom furniture and storage made to suit the dimensions, function and visual intent of the space.",
    cover: "/projects/furniture/IMG_8638.webp",
    images: [
      { src: "/projects/furniture/IMG_8638.webp", alt: "Custom mirrored wardrobe" },
      { src: "/projects/furniture/IMG_8261.webp", alt: "Made-to-measure furniture detail" },
      { src: "/projects/furniture/IMG_9637.webp", alt: "Completed custom furniture installation" },
    ],
  },
  {
    id: "feature-walls",
    category: "Interior finishes",
    title: "Feature Walls & Finish Details",
    summary: "Wall cladding, integrated lighting and finishing details executed to shape the character of a room.",
    cover: "/projects/wall/IMG_4777.webp",
    images: [
      { src: "/projects/wall/IMG_4777.webp", alt: "Custom feature wall with lighting" },
      { src: "/projects/wall/IMG_4794.webp", alt: "Wall cladding installation detail" },
      { src: "/projects/wall/IMG_8283.webp", alt: "Completed interior feature wall" },
    ],
  },
];
