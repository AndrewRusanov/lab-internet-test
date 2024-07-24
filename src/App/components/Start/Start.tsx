import Header from "./components/Header";
import styles from "./Start.module.css";

const Start = () => {
  return (
    <section className={styles.start}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <Header />
      </div>
    </section>
  );
};
export default Start;
