import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
import * as FcIcons from "react-icons/fc";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <RiIcons.RiContactsBookFill />,
    cName: "nav-text",
  },
  {
    title: "Hub",
    path: "/hub",
    icon: <ImIcons.ImStatsBars2 />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FcIcons.FcAbout />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <RiIcons.RiLoginCircleFill />,
    cName: "nav-text",
  },
];

export const SidebarDataNotLogged = [
  {
    title: "Contacts",
    path: "/contacts",
    icon: <RiIcons.RiContactsBookFill />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FcIcons.FcAbout />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <RiIcons.RiLoginCircleFill />,
    cName: "nav-text",
  },
];
