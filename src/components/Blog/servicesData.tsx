import { Blog } from "@/types/blog";

const servicesData: Blog[] = [
  {
    id: 1,
    title: "Web Development",
    paragraph:
      "Crafting websites, apps, and digital solutions tailored for businesses.",
    image: "/imagesBrains/resources/feature-1-1.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Mobile App Development",
    paragraph: "Unleashing Innovation in the Palm of Your Hand.",
    image: "/imagesBrains/resources/feature-1-2.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Digital Marketing",
    paragraph: "Strategic Promotion for Online Triumph.",
    image: "/imagesBrains/resources/feature-1-3.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default servicesData;
