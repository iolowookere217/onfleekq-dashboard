import { FiBook, FiUserPlus } from "react-icons/fi";
import { RiPieChart2Fill } from "react-icons/ri";
import { BiSolidMessageMinus } from "react-icons/bi";

import { LuClapperboard } from "react-icons/lu";

export const sideNavData = [
  {
    to: "dashboard/a",
    icon: RiPieChart2Fill,
    tabName: "Summary",
  },
  {
    to: "dashboard/b",
    icon: BiSolidMessageMinus,
    tabName: "Inbox",
  },
  {
    to: "dashboard/c",
    icon: LuClapperboard,
    tabName: "video",
  },
];
