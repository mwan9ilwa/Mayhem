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
            🚀 Hey there, I'm Mwangilwa, the visionary mind behind Quest, a
            groundbreaking platform that's revolutionizing the developer
            landscape. As an avid Google for Developers enthusiast, I'm
            dedicated to empowering the community and driving the future of
            technology.
          </p>
        </header>
        <section>
          <p>
            💻 With expertise as a MERN Stack Developer, I specialize in
            crafting seamless web experiences that fuse functionality with
            aesthetics. My code is my canvas, where I blend innovation and
            precision to bring digital dreams to life.
          </p>
        </section>
        <section>
          <h2>Other Things I Enjoy</h2>
          <p>
            📷 When I'm not coding, I'm an intrepid explorer, capturing life's
            beauty through the lens of my trusty Google Pixel. Adventures fuel
            my creativity, infusing every shot with a burst of enthusiasm and a
            touch of wanderlust.
          </p>

          <p>
            🌄 Thrill-seeker at heart, I believe in embracing life's adventures
            – from scaling mountains to embarking on unknown journeys. These
            escapades shape my perspective and invigorate my work, resulting in
            truly exceptional solutions.
          </p>

          <p>
            Join me as I shape technology, one innovation at a time, and capture
            the world's extraordinary moments through my lens. Together, let's
            dive into a future where possibilities are limitless.
          </p>
        </section>
      </article>
    </>
  );
}
