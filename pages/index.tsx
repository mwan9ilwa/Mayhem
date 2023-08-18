import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { compareDesc } from "date-fns";
import { Chapter, allChapters } from "contentlayer/generated";
import css from "@/styles/Home.module.css";
import { IconArrowRight } from "@tabler/icons";
import { AnimatePresence, LayoutGroup, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import Chapters from "@/components/Chapters";
import ListExperiences from "@/components/Experiences";
import Playing from "@/components/Music/Playing";
import me from "@/public/static/images/me.jpg";
import plex from "@/public/static/images/plex.jpg";
import govtplex from "@/public/static/images/govtplex.jpg";
import anthem from "@/public/static/images/me.jpg";
import Stack from "@/components/Stack";
import ListProjects from "@/components/Projects";

const greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Xin chào"];

const cardStack = [
  {
    id: 0,
    alt: "A picture of the government complex",
    image: plex,
  },
  {
    id: 1,
    alt: "A picture of the government complex",
    image: govtplex,
  },
  {
    id: 2,
    alt: "A picture of a vintage, classic, orange car",
    image: anthem,
  },
];

function Hello(props: { index: number }) {
  const hello: Variants = {
    initial: {
      opacity: 0,
      width: 0,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.75,
      },
    },
    animate: {
      opacity: 1,
      width: "auto",
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,
      width: 0,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.75,
      },
    },
  };

  return (
    <header>
      <h1>
        <LayoutGroup>
          <AnimatePresence mode="wait">
            <motion.span
              className={css.hello}
              key={greetings[props.index]}
              variants={hello}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {greetings[props.index]}.&nbsp;
            </motion.span>
          </AnimatePresence>
          <motion.span>I&#39;m Mwangilwa.</motion.span>
        </LayoutGroup>
      </h1>
    </header>
  );
}

export default function Home(props: { chapters: Chapter[] }) {
  // Prevents a hydration error due to assigning
  // a random number to the index of the chosen
  // greeting.
  const [render, setRender] = useState(false);
  const [index, setIndex] = useState(
    Math.floor(Math.random() * greetings.length)
  );

  useEffect(() => {
    setRender(true);
  }, []);

  const handleNext = useCallback(() => {
    const idx = true ? 0 : index;
    setIndex(index + 1 === greetings.length ? idx : index + 1);
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <>
      <Head>
        <title>Mayhem</title>
        <meta
          content="A brief overview of different aspects of my career"
          name="description"
        />
      </Head>

      <div className={css.intro}>
        <div className={css.section}>
          <div className={css.profilewrapper}>
            <Image
              src={me}
              priority
              quality={100}
              alt={"A picture of me."}
              className={css.profile}
            />
          </div>
          {render && <Hello index={index} />}
          <p>
            As an avid Google for Developers enthusiast, I'm dedicated to
            empowering the community and driving the future of technology. 💻
            With expertise as a MERN Stack Developer, I specialize in crafting
            seamless web experiences that fuse functionality with aesthetics. My
            code is my canvas, where I blend innovation and precision to bring
            digital dreams to life.
          </p>
          <Link
            href="/about"
            aria-label="Navigate to the about me page to learn more about me."
          >
            <>
              Discover <IconArrowRight strokeWidth={2.5} />
            </>
          </Link>
        </div>
      </div>
      <div className={css.section}>
        <h2>Chapters</h2>
        <Chapters chapters={props.chapters} />
        <Link href="/chapters">
          <>
            Discover <IconArrowRight />
          </>
        </Link>
      </div>
      <div className={css.section}>
        <h2>Open Source</h2>
        <ListProjects />
        <Link href="/projects">
          <>
            Discover <IconArrowRight strokeWidth={2.5} />
          </>
        </Link>
      </div>
      <div className={css.section}>
        <h2>Gallery</h2>
        <div className={css.experiences}>
          <div>
            <ListExperiences />
            <Link
              href="/Gallery"
              style={{
                fontWeight: 550,
              }}
            >
              <>
                Discover <IconArrowRight strokeWidth={2.5} />
              </>
            </Link>
          </div>
          <div className={css.stackwrapper}>
            <Stack cardStack={cardStack} />
          </div>
        </div>
      </div>
      <div className={css.section}>
        <h2>Music</h2>
        <Playing />
        <Link href="/music">
          <>
            Discover <IconArrowRight strokeWidth={2.5} />
          </>
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const chapters = allChapters.slice(0, 3).sort((a: Chapter, b: Chapter) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { chapters } };
}
