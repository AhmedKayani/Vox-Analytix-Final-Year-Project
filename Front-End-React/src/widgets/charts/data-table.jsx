import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Duration", "Date", "Agent", "Negative Emotions", ""];

const TABLE_ROWS = [
  {
    Duration: "3 min",
    Date: "2 Aug, 2023",
    Agent: "John Michael",
    Emotions: "😑 😥",
  },
  {
    Duration: "4 min",
    Date: "4 Aug, 2023",
    Agent: "Alexa Liras",
    Emotions: "😠",
  },
  {
    Duration: "2 min",
    Date: "5 Aug, 2023",
    Agent: "Laurent Perrier",
    Emotions: "😥",
  },
  {
    Duration: "5 min",
    Date: "6 Aug, 2023",
    Agent: "Michael Levi",
    Emotions: "😑 😠",
  },
  {
    Duration: "1 min",
    Date: "7 Aug, 2023",
    Agent: "Richard Gran",
    Emotions: "😥 😠",
  },
];

export function DataTable() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
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
          {TABLE_ROWS.map(({ Agent, Duration, Date, Emotions }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
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
                  {Emotions}
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
    </Card>
  );
}

export default DataTable;
