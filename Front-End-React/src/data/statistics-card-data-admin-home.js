import {
  UserIcon,
  PhoneIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardDataAdminHome = [
  {
    color: "green",
    icon: PhoneIcon,
    title: "Total Calls",
    value: "50",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "blue",
    icon: UserIcon,
    title: "Total Analysts",
    value: "2",
    footer: {
      color: "text-pink-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "pink",
    icon: UserGroupIcon,
    title: "Total Queries",
    value: "10",
    footer: {
      color: "text-blue-500",
      value: "2 min.",
      label: "than last month",
    },
  },
  // Add more objects for additional statistics cards
];

export default statisticsCardDataAdminHome;
