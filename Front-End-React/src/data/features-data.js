import {
  FaceFrownIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import {
  faFaceAngry, // For Anger
  faFaceMeh, // For Disgust
  faFaceFrown, // For Disappointment
  faFaceSadTear, // For Distress
  faFaceSurprise, // For Surprise
} from "@fortawesome/free-solid-svg-icons";

export const featuresData = [
  {
    color: "pink",
    title: "Emotion Detection",
    icon: FaceFrownIcon,
    description:
      "Our system accurately detects and reports on the top five instances of key negative emotions in your call data.",
  },
  {
    color: "blue",
    title: "Data Visualization",
    icon: ChartBarIcon,
    description:
      "Enhance your understanding of the results with intuitive data visualization tools.",
  },
  {
    color: "orange",
    title: "Seamless Communication",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Facilitate efficient communication between Analysts and Admins directly from the dashboard.",
  },
];

export default featuresData;
