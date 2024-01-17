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

// importing dataset
import { AnalystQueriesData } from "@/data/analyst-queries-data";

// The table head.
const TABLE_HEAD = ["Date", "Status", "Message"];

export function DataTableQueries() {
  // console.log("analysis from the database:", analysis);

  // Currently using dummy values for the table rows.
  return (
    <Card>
      <CardHeader className="p-5" variant="gradient" color="blue">
        <Typography variant="h6" color="white">
          Your Recent Queries
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
            {/* Displaying the queries */}
            {AnalystQueriesData &&
              AnalystQueriesData.map((item, index) => (
                <tr key={index}>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {`${item.date}`}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.status}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.message}
                    </Typography>
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

export default DataTableQueries;
