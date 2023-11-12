import {
  Card,
  Chip,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function StatisticsCard({
  color,
  icon,
  title,
  value,
  footer,
  time,
  topFiveEmotions,
  handleEmotionClick,
}) {
  return (
    <Card>
      <CardHeader
        variant="gradient"
        color={color}
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {icon && icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {value}
        </Typography>
        {time && (
          <>
            <Typography className="inline font-normal text-blue-gray-600">
              &nbsp;At
            </Typography>
            <Typography color={color} className="inline font-normal">
              <strong className="red"> {time}</strong>
            </Typography>
          </>
        )}
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {/* {footer} */}
          <ul className="flex list-none flex-wrap gap-2">
            {topFiveEmotions?.map((data, index) => (
              <li
                onClick={() => handleEmotionClick(data?.text, data?.timeBegin)}
                key={index}
                className="flex items-center"
              >
                <Chip
                  key={index}
                  color={color}
                  variant="gradient"
                  size="lg"
                  value={`${data?.timeBegin?.minutes}:${
                    data?.timeBegin?.seconds.toString().length === 1 ? "0" : ""
                  }${data?.timeBegin?.seconds}`}
                  className="rounded-full"
                />
              </li>
            ))}
          </ul>
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
