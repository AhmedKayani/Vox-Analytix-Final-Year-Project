import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

import adminPic from "../../../public/img/admin-pic.png";

export function LandingPage() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-4.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Welcome to Vox Analytix.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                An advanced emotion detection system tailored for Quality
                Assurance (QA) departments within call centers. Empowering
                Analysts and Admins with insightful data and seamless
                communication.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-400 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Empowering Analysts
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Upload audio calls for comprehensive emotion analysis. Identify
                and report key negative emotions and gain insights with
                statistical data. Communicate issues or queries directly to
                Admins from the dashboard.
                <br />
                <br />
                Vox Analytix lets you analyze call data in a new way. It detects
                negative emotions and their top five moments. It shows your data
                in graphs for easy comprehension. It counts analyzed calls and
                flags agents with issues. It gives you a complete analysis for
                better decisions.
              </Typography>
              <Link to="/dashboard/home">
                <Button variant="filled" color="blue">
                  Try Vox Analytix
                </Button>
              </Link>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="rounded-lg border shadow-lg shadow-gray-500/10">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src={adminPic}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Admins
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Streamlining Admin Tasks
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    View and respond to analysts' queries, monitor online status
                    for analysts, and have visibility into the number of
                    analyses performed by each agent.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-24">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Meet the Vox Analytix Team">
            Our team of professionals offers emotion detection solutions for
            call center QA. Our system gives Analysts and Admins data and
            communication.
          </PageTitle>
          <div className="mx-auto mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-2">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                className="h-64 w-64"
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name, path }) => (
                      <a
                        key={name}
                        href={path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-xl fa-${name}`} />
                        </IconButton>
                      </a>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-6 px-4">
        <div className="container mx-auto">
          <PageTitle
            section="Vox Analytix Features"
            heading="Explore Our Capabilities"
          >
            Vox Analytix is designed to revolutionize the way Quality Assurance
            (QA) departments within call centers analyze call data. Our advanced
            emotion detection system identifies key negative emotions, providing
            insightful data for Analysts and Admins.
          </PageTitle>
          <div className="mx-auto mt-20  grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer
          title="Vox Analytix"
          description="Empowering Call Centers for a Future of Seamless Efficiency. Our Innovative Solution Transforms QA Processes, Enhancing Analyst Performance and Driving Operational Excellence."
        />
      </div>
    </>
  );
}

export default LandingPage;
