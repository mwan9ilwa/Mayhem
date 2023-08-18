import {
  IconBolt,
  IconCake,
  IconCamera,
  IconCode,
  IconCpu,
  IconDeviceGamepad2,
  IconGauge,
  IconNotebook,
  IconPalette,
  IconPlaneDeparture,
  IconPrison,
  IconRoad,
  IconSchool,
} from "@tabler/icons";
import { Experience } from "types/alpine";

const experiences: Experience[] = [

  {
    title: "Founded Quest",
    month: "August 2023",
    year: 2023,
    caption: <p>Put together a team for our freelance projects, calling it Quest. We're in search for Innovation.</p>,
    icon: IconRoad,
  },
  {
    title: "Frontend Developer at Izyane InovSolutions",
    month: "April 2023",
    year: 2023,
    caption: <p>Started a new role as a Frontend Software Engineer at Izyane.</p>,
    icon: IconBolt,
  },

  {
    title: "Certified in Digital Marketing",
    month: "March 2023",
    year: 2023,
    caption: <p>Finished my Digital Marketing certification with Google Digital Skills for Africa.</p>,
    icon: IconSchool,
  },
  {
    title: "ALX Software Engineering",
    month: "January 2023",
    year: 2023,
    caption: (
      <p>
        Enrolled in the ALX Software Engineering Scholarship.
      </p>
    ),
    icon: IconSchool,
  },
  
  {
    title: "Portfolio Redesign v3",
    month: "December 2022",
    year: 2022,
    caption: (
      <p>
        Started working on my 3rd version of my Portfolio written in React, NextJS and Typescript.
      </p>
    ),
    icon: IconPalette,
    url: "",
  },

  {
    title: "Became a Freelancer",
    month: "November 2022",
    year: 2022,
    caption: (
      <p>
        After leaving ZamFind, I realized there was more opportunities out there
        so I decide to start building projects for people who appreciated my work.
      </p>
    ),
    icon: IconBolt,
    
    substeps: [
      {
        title: "MontForan",
        range: "December 2022",
        caption: <p>Finished my Second Project as a Freelancer.</p>,
        icon: IconCode,
      },

      {
        title: "Shuttle",
        range: "June 2022",
        caption: <p>First Freelance project.</p>,
        icon: IconCode,
      },
    ],
  },
 
  {
    title: "Junior Developer at ZamFind Technology",
    month: "April 2022",
    year: 2022,
    caption: (
      <p>
        Working with PHP, Code Igniter, WOrdPress and JQuery to build aesthetic and accessible
        interfaces. Having fun and breaking things along the way.
      </p>
    ),
    icon: IconCode,
    substeps: [
      {
        title: "Left ZamFind Technology",
        range: "November 2022",
        caption: <p>After spending months at the company, I left.</p>,
        icon: IconCode,
      },
    ],
  },

  {
    title: "Mpelembe Network",
    month: "February 2021 - present",
    year: 2021,
    caption: (
      <p>
        Joined Mpelembe Network as a Google Cloud Administrator and Developer while I kept learning more 
        about GCP.
      </p>
    ),
    icon: IconBolt,
    url: "https://www.mpelembe.net/",
    substeps: [
      {
        title: "Google Cloud Innovator",
        range: "March 2022",
        caption: <p>After spending months with Mpelembe, I became a Google Cloud Innovator.</p>,
        icon: IconCode,
      },
    ],
  },
];

export default experiences;
