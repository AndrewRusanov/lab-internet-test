import { HowItWorksList } from "data/constants";

import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Как это работает</h2>
      <ul className={styles.infoList}>
        {HowItWorksList.map((item, index) => (
          <li key={index} className={styles.infoItem}>
            <span className={styles.infoIcon}>{item.icon}</span>
            <h6 className={styles.infoTitle}>{item.title}</h6>
            <p className={styles.infoDescription}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowItWorks;
