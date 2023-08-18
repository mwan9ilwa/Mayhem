import fetcher from "@/lib/fetcher";
import css from "./styles.module.css";
import useSWR from "swr";
import { Project } from "types/alpine";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { IconSearch } from "@tabler/icons";

// Manually created project data
const projectsData = [
  {
    title: "Mayhem",
    description: "The source of this website.",
    language: "NextJJ | React | TS",
    stars: 4.5,
    pushed: "2023-01-15T12:00:00Z", 
    url: "https://mwangi.vercel.app/",
  },
  {
    title: "MontForam",
    description: "E-commerce website powered by WooCommerce.",
    language: "WordPress",
    stars: 4.5,
    pushed: "2023-01-15T12:00:00Z",
    url: "https://montforan.com/",
  },
  {
    title: "Shuttle SMS",
    description: "A Laravel based school management system.",
    language: "Laravel | SASS",
    stars: 3,
    pushed: "2022-08-15T12:00:00Z",
    url: "https://limey.io/shuttle/",
  },
  {
    title: "Quest Saas",
    description: "Developer community project's website.",
    language: "React | TS",
    stars: 5,
    pushed: "2023-08-10T12:00:00Z",
    url: "https://github.com/mwan9ilwa/solid",
  },
  {
    title: "WordPair",
    description: "A Flutter app which generates random words.",
    language: "Flutter",
    stars: 4.1,
    pushed: "2023-05-01T12:00:00Z",
    url: "https://github.com/mwan9ilwa/wordpair",
  },
  {
    title: "Local Library",
    description: "A Library management system written in NodeJS, Express.",
    language: "ExpressJS | Pug",
    stars: 2.5,
    pushed: "2022-05-15T12:00:00Z",
    url: "https://github.com/mwan9ilwa/LibraryStore",
  },
  {
    title: "AFAP Dashboard",
    description: "ERP Dashboard.",
    language: "PHP | Bootstrap",
    stars: 4.3,
    pushed: "2023-06-01T12:00:00Z",
    url: "https://github.com/mwan9ilwa/AFAP_ERP_Dashboard",
  },
  {
    title: "Synergy",
    description: "Synergy Seed company's website.",
    language: "WordPress",
    stars: 3.5,
    pushed: "2022-01-15T12:00:00Z",
    url: "https://synergy.co.zm",
  },
  {
    title: "ProLearn POS",
    description: "Point Of Sale.",
    language: "Code Ignitor",
    stars: 3,
    pushed: "2022-01-01T12:00:00Z",
    url: "https://ayia.online",
  },
  {
    title: "Weather API",
    description: "Flutter based app using Open Weather API.",
    language: "Flutter",
    stars: 4,
    pushed: "2023-06-01T12:00:00Z",
    url: "https://github.com/mwan9ilwa/weather-api",
  },
  {
    title: "Chat App",
    description: "React, NodeJS, Socket.io chat app.",
    language: "React | NodeJS",
    stars: 4,
    pushed: "2022-06-01T12:00:00Z",
    url: "https://github.com/mwan9ilwa/Chat-App",
  },
  {
    title: "Blog",
    description: "A Code Ignitor blog using LAMP stack.",
    language: "PHP | Code Ignitor",
    stars: 4,
    pushed: "2022-04-01T12:00:00Z",
    url: "https://github.com/mwan9ilwa/weather-api",
  },
];

export default function ListProjects(props: { all?: boolean }) {
  const [search, setSearch] = useState("");

  const filteredProjects = projectsData.filter(({ title, description, language }) => {
    const searchString = `${title.toLowerCase()} ${language?.toLowerCase()} ${description?.toLowerCase()}`;
    return searchString.includes(search.toLowerCase());
  });

  if (props.all) {
    return (
      <div className={css.section}>
        <p>My public projects.</p>
        <div className={css.searchwrapper}>
          <IconSearch />
          <input
            className={css.search}
            autoComplete="off"
            id="search"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {filteredProjects.length === 0 && (
          <p>
            <em>
              Woah. It looks like you tried to find something that doesn&#39;t
              exist yet. If you would like to pitch an idea, let me know.
            </em>
          </p>
        )}
        <div className={css.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={css.grid}>
      {projectsData.slice(0, 3).map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
