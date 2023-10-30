import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Duration", "Date", "Agent", "Reason", ""];

const TABLE_ROWS = [
  {
    Duration: "3 min",
    Date: "2 Aug, 2023",
    Agent: "John Michael",
    Reason: "Incomplete information...",
  },
  {
    Duration: "4 min",
    Date: "4 Aug, 2023",
    Agent: "Alexa Liras",
    Reason: "Inadequate call resolution...",
  },
  {
    Duration: "2 min",
    Date: "5 Aug, 2023",
    Agent: "Laurent Perrier",
    Reason: "Lack of empathy...",
  },
  {
    Duration: "5 min",
    Date: "6 Aug, 2023",
    Agent: "Michael Levi",
    Reason: "Unprofessional behavior...",
  },
  {
    Duration: "1 min",
    Date: "7 Aug, 2023",
    Agent: "Richard Gran",
    Reason: "Long call duration...",
  },
];

export function DataTable() {
  return (
    <Card>
      <CardHeader className="p-5" variant="gradient" color="blue">
        <Typography variant="h6" color="white">
          Analysis History
        </Typography>
      </CardHeader>
      <CardBody className="overflow-x-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ Agent, Duration, Date, Reason }, index) => (
              <tr key={index} className="">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Duration}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Date}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Agent}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Reason}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    :
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default DataTable;
