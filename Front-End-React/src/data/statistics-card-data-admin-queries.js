import {
  UserIcon,
  PhoneIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardDataAdminQueries = [
  {
    color: "green",
    icon: PhoneIcon,
    title: "Total Queries",
    value: "10",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Unresolved Queries",
    value: "7",
    footer: {
      color: "text-pink-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "blue",
    icon: UserGroupIcon,
    title: "Resolved Queries",
    value: "3",
    footer: {
      color: "text-blue-500",
      value: "2 min.",
      label: "than last month",
    },
  },
  // Add more objects for additional statistics cards
];

export default statisticsCardDataAdminQueries;
