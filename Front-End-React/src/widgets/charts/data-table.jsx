import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@/utils";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// The table head.
const TABLE_HEAD = ["Duration", "Date", "Agent", "Reason", ""];

// Dummy values for the table rows.
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
  // These states contains the past analysis data.
  const [analysis, setAnalysis] = useState([]);

  // This is used to get the analysis data from the backend database.
  const { isLoading, error } = useQuery({
    queryKey: ["analysis"],
    queryFn: () =>
      ApiClient.get("/dataAnalysis", {
        // ID of the user who is logged in. Currently a dummy value.
        owner: 1,
      }).then((res) => {
        setAnalysis(res?.data);
        return res.data;
      }),
  });

  console.log(`analysis from the database: ${analysis}`);

  // Currently using dummy values for the table rows.
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
