import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

import { StatisticsCard } from "@/widgets/cards";

// Data for cards
import { statisticsCardsData, callHistoryStatisticsCardData } from "@/data";

// Table import
import { DataTable } from "@/widgets/charts";

export function CallHistory() {
  return (
    // <div className="mt-12 mb-8 flex flex-col gap-12">
    //   <Card>
    //     <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
    //       <Typography variant="h6" color="white">
    //         Authors Table
    //       </Typography>
    //     </CardHeader>
    //     <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
    //       <table className="w-full min-w-[640px] table-auto">
    //         <thead>
    //           <tr>
    //             {["author", "function", "status", "employed", ""].map((el) => (
    //               <th
    //                 key={el}
    //                 className="border-b border-blue-gray-50 py-3 px-5 text-left"
    //               >
    //                 <Typography
    //                   variant="small"
    //                   className="text-[11px] font-bold uppercase text-blue-gray-400"
    //                 >
    //                   {el}
    //                 </Typography>
    //               </th>
    //             ))}
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {authorsTableData.map(
    //             ({ img, name, email, job, online, date }, key) => {
    //               const className = `py-3 px-5 ${
    //                 key === authorsTableData.length - 1
    //                   ? ""
    //                   : "border-b border-blue-gray-50"
    //               }`;

    //               return (
    //                 <tr key={name}>
    //                   <td className={className}>
    //                     <div className="flex items-center gap-4">
    //                       <Avatar src={img} alt={name} size="sm" />
    //                       <div>
    //                         <Typography
    //                           variant="small"
    //                           color="blue-gray"
    //                           className="font-semibold"
    //                         >
    //                           {name}
    //                         </Typography>
    //                         <Typography className="text-xs font-normal text-blue-gray-500">
    //                           {email}
    //                         </Typography>
    //                       </div>
    //                     </div>
    //                   </td>
    //                   <td className={className}>
    //                     <Typography className="text-xs font-semibold text-blue-gray-600">
    //                       {job[0]}
    //                     </Typography>
    //                     <Typography className="text-xs font-normal text-blue-gray-500">
    //                       {job[1]}
    //                     </Typography>
    //                   </td>
    //                   <td className={className}>
    //                     <Chip
    //                       variant="gradient"
    //                       color={online ? "green" : "blue-gray"}
    //                       value={online ? "online" : "offline"}
    //                       className="py-0.5 px-2 text-[11px] font-medium"
    //                     />
    //                   </td>
    //                   <td className={className}>
    //                     <Typography className="text-xs font-semibold text-blue-gray-600">
    //                       {date}
    //                     </Typography>
    //                   </td>
    //                   <td className={className}>
    //                     <Typography
    //                       as="a"
    //                       href="#"
    //                       className="text-xs font-semibold text-blue-gray-600"
    //                     >
    //                       Edit
    //                     </Typography>
    //                   </td>
    //                 </tr>
    //               );
    //             }
    //           )}
    //         </tbody>
    //       </table>
    //     </CardBody>
    //   </Card>
    //   <Card>
    //     <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
    //       <Typography variant="h6" color="white">
    //         Projects Table
    //       </Typography>
    //     </CardHeader>
    //     <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
    //       <table className="w-full min-w-[640px] table-auto">
    //         <thead>
    //           <tr>
    //             {["companies", "members", "budget", "completion", ""].map(
    //               (el) => (
    //                 <th
    //                   key={el}
    //                   className="border-b border-blue-gray-50 py-3 px-5 text-left"
    //                 >
    //                   <Typography
    //                     variant="small"
    //                     className="text-[11px] font-bold uppercase text-blue-gray-400"
    //                   >
    //                     {el}
    //                   </Typography>
    //                 </th>
    //               )
    //             )}
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {projectsTableData.map(
    //             ({ img, name, members, budget, completion }, key) => {
    //               const className = `py-3 px-5 ${
    //                 key === projectsTableData.length - 1
    //                   ? ""
    //                   : "border-b border-blue-gray-50"
    //               }`;

    //               return (
    //                 <tr key={name}>
    //                   <td className={className}>
    //                     <div className="flex items-center gap-4">
    //                       <Avatar src={img} alt={name} size="sm" />
    //                       <Typography
    //                         variant="small"
    //                         color="blue-gray"
    //                         className="font-bold"
    //                       >
    //                         {name}
    //                       </Typography>
    //                     </div>
    //                   </td>
    //                   <td className={className}>
    //                     {members.map(({ img, name }, key) => (
    //                       <Tooltip key={name} content={name}>
    //                         <Avatar
    //                           src={img}
    //                           alt={name}
    //                           size="xs"
    //                           variant="circular"
    //                           className={`cursor-pointer border-2 border-white ${
    //                             key === 0 ? "" : "-ml-2.5"
    //                           }`}
    //                         />
    //                       </Tooltip>
    //                     ))}
    //                   </td>
    //                   <td className={className}>
    //                     <Typography
    //                       variant="small"
    //                       className="text-xs font-medium text-blue-gray-600"
    //                     >
    //                       {budget}
    //                     </Typography>
    //                   </td>
    //                   <td className={className}>
    //                     <div className="w-10/12">
    //                       <Typography
    //                         variant="small"
    //                         className="mb-1 block text-xs font-medium text-blue-gray-600"
    //                       >
    //                         {completion}%
    //                       </Typography>
    //                       <Progress
    //                         value={completion}
    //                         variant="gradient"
    //                         color={completion === 100 ? "green" : "blue"}
    //                         className="h-1"
    //                       />
    //                     </div>
    //                   </td>
    //                   <td className={className}>
    //                     <Typography
    //                       as="a"
    //                       href="#"
    //                       className="text-xs font-semibold text-blue-gray-600"
    //                     >
    //                       <EllipsisVerticalIcon
    //                         strokeWidth={2}
    //                         className="h-5 w-5 text-inherit"
    //                       />
    //                     </Typography>
    //                   </td>
    //                 </tr>
    //               );
    //             }
    //           )}
    //         </tbody>
    //       </table>
    //     </CardBody>
    //   </Card>
    // </div>

    <div className="mt-12">
      {/* This div contains the cards that I will be using to display the general information */}
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {callHistoryStatisticsCardData.map(
          ({ icon, title, footer, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: "w-6 h-6 text-white",
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={footer.color}>{footer.value}</strong>
                  &nbsp;{footer.label}
                </Typography>
              }
            />
          )
        )}
      </div>
      {/* This div contains the table of latest analysis results */}
      <div className="mb-4 w-full">
        {/* <Card className="overflow-hidden xl:col-span-2">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Projects
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
                <strong>30 done</strong> this month
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["companies", "members", "budget", "completion"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Orders Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card> */}
        <DataTable />
      </div>
    </div>
  );
}

export default CallHistory;
