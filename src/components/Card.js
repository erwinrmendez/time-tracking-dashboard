import { ReactComponent as EllipsisIcon } from "../images/icon-ellipsis.svg";
import styles from "./Card.module.css";

const Card = ({ card, view }) => {
  const { title, timeframes } = card;
  const { current, previous } = timeframes[view.toLowerCase()];

  // get the background color using the title property
  const str = title.toLowerCase().replace(" ", "-");
  const bgColor = `var(--color-${str})`;
  const icon = require(`../images/icon-${str}.svg`).default;

  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: bgColor,
        backgroundImage: "url(" + icon + ")",
      }}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <p>{title}</p>
          <button aria-label="settings" title="Settings">
            <EllipsisIcon />
          </button>
        </div>
        <div className={styles.body}>
          <h1>{current === 1 ? "1hr" : current + "hrs"}</h1>
          <p>Last Week - {previous === 1 ? "1hr" : previous + "hrs"}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
