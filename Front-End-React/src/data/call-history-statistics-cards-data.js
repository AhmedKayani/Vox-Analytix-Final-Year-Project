import {
  FaceFrownIcon,
  UserPlusIcon,
  UserIcon,
  ClockIcon,
  ChartBarIcon,
  PhoneIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";

export const callHistoryStatisticsCardData = [
  {
    color: "green",
    icon: PhoneIcon,
    title: "Total Calls Analyzed",
    value: 14,
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "blue",
    icon: ClockIcon,
    title: "Average Call Duration",
    value: "3 min.",
    footer: {
      color: "text-blue-500",
      value: "2 min.",
      label: "than last month",
    },
  },
  // {
  //   color: "orange",
  //   icon: DocumentArrowDownIcon,
  //   title: "Export History",
  //   value: "PDF",
  //   footer: {
  //     color: "text-orange-500",
  //     value: "",
  //     label: "",
  //   },
  // },
];

export default callHistoryStatisticsCardData;
