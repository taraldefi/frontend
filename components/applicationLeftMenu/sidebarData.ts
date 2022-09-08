import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",

    subNav: [
      {
        title: "Users",
        path: "/overview/users",
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",

    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",

        cName: "sub-nav",
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",

        cName: "sub-nav",
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Team",
    path: "/team",
  },
  {
    title: "Messages",
    path: "/messages",

    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
      },
      {
        title: "Message 2",
        path: "/messages/message2",
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
  },
];
