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
        path: "/services/webDevelopment",
        newTab: false,
        submenu: [
          {
            id: 411,
            title: "MEAN Development",
            path: "/about",
            newTab: false,
          },
          {
            id: 412,
            title: "MERN Development",
            path: "/about",
            newTab: false,
          },
          {
            id: 413,
            title: "PHP",
            path: "/about",
            newTab: false,
          },
        ],
      },
      {
        id: 42,
        title: "UI/UX Designing",
        path: "/services/ui-ux-designing",
        newTab: false,
      },
      {
        id: 43,
        title: "Mobile App Development",
        path: "/services/mobile-application",
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
