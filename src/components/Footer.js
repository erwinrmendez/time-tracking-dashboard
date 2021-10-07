import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer style={{ marginTop: "1em" }}>
      <div className={styles.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/erwinrmendez">Erwin Méndez</a>.
      </div>
    </footer>
  );
};

export default Footer;
