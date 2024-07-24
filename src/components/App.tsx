import { FC } from "react";

import Start from "./Start";
import Header from "./Header";

import styles from "./App.module.css";
import HowItWorks from "./HowItWorks";

const App: FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Start />
      <HowItWorks />
    </main>
  );
};

export default App;
