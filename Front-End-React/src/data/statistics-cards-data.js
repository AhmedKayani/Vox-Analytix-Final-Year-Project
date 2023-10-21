import {
  FaceFrownIcon,
  UserPlusIcon,
  UserIcon,
  ClockIcon,
  ChartBarIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "green",
    icon: PhoneIcon,
    title: "Total Calls Analyzed",
    value: "50",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: FaceFrownIcon,
    title: "Most Common Emotion",
    value: "Anger",
    footer: {
      color: "text-pink-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "blue",
    icon: ClockIcon,
    title: "Average Call Duration",
    value: "5 min.",
    footer: {
      color: "text-blue-500",
      value: "2 min.",
      label: "than last month",
    },
  },
  {
    color: "orange",
    icon: UserIcon,
    title: "Top Flagged Agent",
    value: "John Doe",
    footer: {
      color: "text-orange-500",
      value: "+25%",
      label: "than other agents",
    },
  },
];

export default statisticsCardsData;
