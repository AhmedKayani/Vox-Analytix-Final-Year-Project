import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "@/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// The table head.
const TABLE_HEAD = ["Duration", "Date", "Agent", "Reason", ""];

export function DataTable() {
  // useState varibale contains the past analysis data.
  const [analysis, setAnalysis] = useState([]);

  // This is used to get the analysis data from the backend database.
  const { isLoading, error, data } = useQuery({
    queryKey: ["analysis"],
    queryFn: () =>
      ApiClient.get("/analysis/dataAnalysis", {
        // ID of the user who is logged in. Currently a dummy value.
        owner: 1,
      }),
  });

  // For updating the analysis state variable.
  useEffect(() => {
    if (data) {
      setAnalysis(data.data);
    }
  }, [data]);

  console.log("analysis from the database:", analysis);

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
            {/* Displaying the past analysis */}
            {!isLoading &&
              analysis &&
              analysis.map((item, index) => (
                <tr key={index}>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {`${item.duration} min`}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.agent_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {/* Only showing the first 9 words of reason for the call rejection. */}
                      {`${item.reason.split(" ").slice(0, 9).join(" ")} ...`}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Link
                      key={index}
                      to={{
                        pathname: "/dashboard/result-past-page",
                      }}
                      state={{
                        isDBData: true,
                        analysisData: item.description,
                        url: item.file_url,
                        fileName: item.file_name,
                        agentName: item.agent_name,
                        reason: item.reason,
                      }}
                      className="text-blue-gray font-medium"
                    >
                      :
                    </Link>
                  </td>
                  {/* Add more cells as needed */}
                </tr>
              ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default DataTable;
