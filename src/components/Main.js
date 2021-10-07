import { useState } from "react";
import styles from "./Main.module.css";
import Card from "./Card";
import photo from "../images/image-jeremy.png";
import cards from "../data.json";

const Layout = () => {
  const [activeView, setActiveView] = useState("Weekly"); //show weekly view by default
  const views = ["Daily", "Weekly", "Monthly"];

  return (
    <main className={styles.dashboard}>
      <div className={styles.sidebar}>
        <div className={styles.profileCard}>
          <img src={photo} alt="Jeremy" />
          <div>
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
          </div>
        </div>
        <ul className={styles.menu}>
          {views.map((view) => (
            <li
              key={view}
              className={activeView === view ? styles.activeLink : ""}
              onClick={() => setActiveView(view)}
            >
              {view}
            </li>
          ))}
        </ul>
      </div>
      {cards.map((card) => (
        <Card key={card.title} card={card} view={activeView} />
      ))}
    </main>
  );
};

export default Layout;
