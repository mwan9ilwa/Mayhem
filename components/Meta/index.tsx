import Head from "next/head";
import { useRouter } from "next/router";

export default function Meta(props: { customMeta?: any }) {
  const router = useRouter();
  const meta = {
    title: "Mwangilwa Zimba– Frontend Developer",
    description: `I'm a front-end/UX engineer and I strive to build things that people enjoy using.`,
    image: "https://pbs.twimg.com/profile_images/1722460270398709760/_5s8zkZk.jpg",
    type: "website",
    ...props.customMeta,
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://mwangilwa.io${router.asPath}`} />
      <link rel="canonical" href={`https://mwangilwa.io${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Mwangilwa Zimba" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mwangilwazimba" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
}
