import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },

  {
    id: 3,
    title: "Services",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Web Development",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "UI/UX Designing",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Mobile App Development",
        path: "/contact",
        newTab: false,
      },
      {
        id: 44,
        title: "Degital Marketing",
        path: "/contact",
        newTab: false,
      },
      {
        id: 45,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 46,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 47,
        title: "Blog Grid Page",
        path: "/services",
        newTab: false,
      },
      {
        id: 48,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 49,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },

      {
        id: 50,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;