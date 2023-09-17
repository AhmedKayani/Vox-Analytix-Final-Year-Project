import {
  HomeIcon,
  UserIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentArrowUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Home,
  UploadAudio,
  CallHistory,
  HelpAndSupport,
  Account,
} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <DocumentArrowUpIcon {...icon} />,
        name: "Upload Audio",
        path: "/upload-audio",
        element: <UploadAudio />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Call History",
        path: "/call-history",
        element: <CallHistory />,
      },
      {
        icon: <QuestionMarkCircleIcon {...icon} />,
        name: "Help & Support",
        path: "/help-and-support",
        element: <HelpAndSupport />,
      },
      {
        icon: <UserIcon {...icon} />,
        name: "Account",
        path: "/account",
        element: <Account />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Log Out",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ArrowRightOnRectangleIcon {...icon} />,
  //       name: "Log Out",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <UserPlusIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
