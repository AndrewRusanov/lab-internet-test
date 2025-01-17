import { FC } from "react";

import Start from "./Start";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import ThirdBlock from "./ThirdBlock";
import InfoBlock from "./InfoBlock";
import Form from "./Form";
import Footer from "./Footer";
import Reviews from "./Reviews/Reviews";
import QA from "./QA";

import styles from "./App.module.css";

const App: FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Start />
      <HowItWorks />
      <ThirdBlock />
      <Reviews />
      <QA />
      <InfoBlock />
      <Form />
      <Footer />
    </main>
  );
};

export default App;
