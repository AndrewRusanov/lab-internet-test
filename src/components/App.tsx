import { FC } from "react";

import Start from "./Start";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import ThirdBlock from "./ThirdBlock";
import Reviews from "./Reviews";
import InfoBlock from "./InfoBlock";

import styles from "./App.module.css";

const App: FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Start />
      <HowItWorks />
      <ThirdBlock />
      <Reviews />
      <InfoBlock />
    </main>
  );
};

export default App;
