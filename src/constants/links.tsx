import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

export const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    href: "/",
  },
  {
    id: 2,
    title: "Celulares",
    href: "/celulares",
  },
  {
    id: 3,
    title: "Nosotros",
    href: "/nosotros",
  },
];


export const socialLinks = [
  {
    id: 1,
    title: "Facebook",
    icon: <FaFacebook />,
    href: "https://www.facebook.com/",
  },
  {
    id: 2,
    title: "Instagram",
    icon: <GrInstagram />,
    href: "https://www.instagram.com/",
  },
  {
    id: 3,
    title: "Twitter",
    icon: <FaXTwitter />,
    href: "https://www.twitter.com/",
  },
  {
    id: 4,
    title: "Youtube",
    icon: <BsYoutube />,
    href: "https://www.youtube.com/",
  },
]; //   
