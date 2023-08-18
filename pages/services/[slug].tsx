import Head from "next/head";
import { format, parseISO } from "date-fns";
import { Service, allServices } from "contentlayer/generated";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useMDXComponent } from "next-contentlayer/hooks";
import css from "./styles.module.css";
import { IconArrowBarToLeft } from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";
import Views from "@/components/Services/Views";
import Signature from "@/components/Signature";
import LikeButton from "../../components/Services/Likes/LikeButton/index";
import Divider from "@/components/Divider";

// function MyButton() {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <button onClick={() => setClicks(clicks + 1)} className={css.button}>
//       Clicked me {clicks} times
//     </button>
//   );
// }

function MyButton() {
  const email = "mwangilwa@mpelembe.net";

  return (
    <a href={`mailto:${email}`} className={css.button}>
      Contact me
    </a>
  );
}


const PostLayout = ({ service }: { service: Service }) => {
  const MDXContent = useMDXComponent(service.body.code);

  return (
    <>
      <Head>
        <title>Mwangilwa | {service.title}</title>
        <meta content={service.description} name="description" />
        <meta property="article:published_time" content={service.date} />
        <meta name="keywords" content={service.tags.toString()} />
        <meta name="author" content={service.author} />
      </Head>
      <Link href={"/services"} className={css.link}>
        <>
          <IconArrowBarToLeft /> Index
        </>
      </Link>
      <article className={css.service}>
        <header>
          <p className={css.badge}>{service.category}</p>
          <h1>{service.title}</h1>
          {/* <p className={css.author}>
            {service.author}
            <Divider />
            <time dateTime={service.date} suppressHydrationWarning>
              {format(parseISO(service.date), "LLLL d, yyyy")}
            </time>
            <Divider />
            <Views slug={service.slug} />
          </p> */}
        </header>
        <hr />
        <div className={css.content}>
          <MDXContent components={{ MyButton }} />
        </div>
        {/* <div className={css.sticky}>
          <LikeButton slug={service.slug} />
        </div> */}
        <hr />
        <footer>
          {/* <div className={css.signature}>
            <Signature />
            <cite>— {service.author}</cite>
          </div> */}
          <h4>Related</h4>
          <div className={css.tags}>
            {service.tags.map((tag: string) => (
              <Link
                key={tag}
                className={css.tag}
                href={{
                  pathname: "/services",
                  query: { tag: tag },
                }}
                passHref
                shallow
                replace
              >
                From{tag}&nbsp;
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </>
  );
};

export default PostLayout;

export async function getStaticProps(params: Params) {
  const service: Service | undefined = allServices.find((service: Service) => {
    return service._raw.flattenedPath === params.params.slug;
  });

  return {
    props: {
      service: service,
    },
  };
}

export async function getStaticPaths() {
  const paths: string[] = allServices
    .filter((service) => service.draft === false)
    .map((service: Service) => service.url);
  return {
    paths,
    fallback: false,
  };
}
