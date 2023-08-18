import { format, parseISO } from "date-fns";
import { Service } from "contentlayer/generated";
import css from "./styles.module.css";
import { IconArrowRight, IconEye, IconHeart } from "@tabler/icons";
import Link from "next/link";
import Divider from "@/components/Divider";

export default function ServiceCard(props: {
  service: Service;
  views?: number;
  likes?: number;
}) {
  const date = parseISO(props.service.date);
  return (
    <Link href={props.service.url} className={css.card}>
      <article className={css.article}>
        <header>
          <div className={css.heading}>
            <div className={css.badge}>{props.service.category}</div>
            {/* <div className={css.analytics}>
              <span>
                <IconEye className={css.icon} />
                {props.views ? `${props.views}` : ``}
              </span>
              <Divider />
              <span>
                <IconHeart className={css.icon} />{" "}
                {props.likes ? `${props.likes}` : ``}
              </span>
            </div> */}
          </div>
          <h3 className={css.title}>{props.service.title}</h3>
          <p className={css.description}>{props.service.description}</p>
        </header>
        <div>
          <ul className={css.tags}>
            {props.service.tags.map((tag: string) => (
              <li key={tag} className={css.tag}>
                From{tag}
              </li>
            ))}
          </ul>
          <div className={css.link}>
            <span>
              Explore <IconArrowRight className={css.icon} strokeWidth={2.5} />
            </span>
            {/* <time className={css.date} suppressHydrationWarning>
              {format(date, "M.d.yyyy")}
            </time> */}
          </div>
        </div>
      </article>
    </Link>
  );
}
