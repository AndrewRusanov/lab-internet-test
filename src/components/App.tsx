import { FC } from "react";

import Start from "./Start";

import styles from "./App.module.css";

const App: FC = () => {
  return (
    <main className={styles.main}>
      <Start />
    </main>
  );
};

export default App;
