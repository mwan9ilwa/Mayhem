import Link from "next/link";
import { inter } from "../Layout";
import css from "./styles.module.css";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { formatDistance } from "date-fns";

export default function Footer() {
  const { data } = useSWR("/api/github/lastupdated", fetcher);

  return (
    <footer className={inter.className}>
      <div className={css.footer}>
        <div className={css.content}>
          <p>Connect with me.</p>
          <div className={css.grid}>
            <div className={css.links}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://g.dev/mwan9ilwa/"}
              >
                Google Developers
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/mwan9ilwa"}
              >
                GitHub
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.linkedin.com/in/mwan9ilwa/"}
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://twitter.com/_mz2303_"}
              >
                Twitter
              </a>
            </div>
            <div className={css.links}>
            <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/experiences">Experience</Link>
            </div>
            <div className={css.links}>
              <Link href="/music">Music</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/snippets">Snippets</Link>
            </div>
          </div>
        </div>
        {data ? (
          <p className={css.lastupdated}>
            © {new Date().getFullYear()} Mwangilwa{" "}
          </p>
        ) : (
          <></>
        )}
      </div>
    </footer>
  );
}
