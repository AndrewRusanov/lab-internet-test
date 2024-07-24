import { FC } from "react";

import styles from "./App.module.css";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.start}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <Header />
        </div>
      </section>
    </main>
  );
};

export default App;
