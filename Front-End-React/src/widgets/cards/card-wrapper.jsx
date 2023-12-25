import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function CardWrapper(props) {
  return (
    <Card
      className={`w-full rounded-lg bg-white shadow-md xl:col-span-${props.span}`}
    >
      <CardHeader className="p-5" variant="gradient" color="blue">
        <Typography variant="h6" color="white">
          {props.title}
        </Typography>
      </CardHeader>
      <CardBody className="w-full">
        <div className="w-full">{props.children}</div>
      </CardBody>
      {props.footer && (
        <CardFooter className="pt-0">
          <Typography variant="paragraph">{props.footer}</Typography>
        </CardFooter>
      )}
    </Card>
  );
}

export default CardWrapper;
