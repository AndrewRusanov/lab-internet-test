import { FC } from "react";

import { infoBlockList } from "data/constants";
import styles from "./InfoBlock.module.css";

const InfoBlock: FC = () => {
  return (
    <section className={styles.background}>
      <ul className={styles.container}>
        {infoBlockList.map((item, index) => (
          <li key={index} className={styles.item}>
            <p className={styles.itemTitle}>{item.title}</p>
            <span className={styles.itemDescription}>{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoBlock;
