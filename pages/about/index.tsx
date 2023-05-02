import Head from "next/head";
import css from "./styles.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Mayhem | About</title>
      </Head>
      <article className={css.article}>
        <header>
          <h1>Mwangilwa Zimba</h1>
          
          <p>
          Hey, I am Mwangilwa! I am a developer, designer and Google Cloud Professional working in Lusaka. Welcome to my Digital Nest.
          </p>
        </header>
        <section>
          <h3>Inspiration</h3>
          <p>
            I didn&#39;t really have much direction on what I wanted to be
            growing up. But I have always wanted to work for Google.
          </p>
          
          <h3>Education</h3>
          <p>
            For my education, I graduated with an Associates Degree in Information Technology with Education
            from the Copperbelt University.
          </p>
        </section>
        <section>
          <h2>Other Things I Enjoy</h2>
          <h3>📸 Photography</h3>
          <p>
            Recently, I started shooting photography after learning that the Google Pixel line of products
            are great for photography. I became a Pixel fan, and I have shot with the Pixel 3 and I shoot with the Pixel 6.
            I find myself shooting portraits the most as it gives me an opportunity to connect with people and let
            them see how I see them.
          </p> 
        </section>
      </article>
    </>
  );
}
