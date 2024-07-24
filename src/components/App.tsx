import { FC } from "react";

import Start from "./Start";
import Header from "./Header";

import styles from "./App.module.css";

const App: FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Start />
    </main>
  );
};

export default App;
