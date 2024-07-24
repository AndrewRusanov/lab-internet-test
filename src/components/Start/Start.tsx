import MainText from "./components/MainText";

import styles from "./Start.module.css";

const Start = () => {
  return (
    <section className={styles.start}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <MainText />
      </div>
    </section>
  );
};
export default Start;
