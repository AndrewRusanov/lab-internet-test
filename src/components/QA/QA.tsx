import { useState } from "react";
import styles from "./QA.module.css";
import { QAList } from "data/constants";
import Icon from "UI/Icon";
import { QuastionAnswer } from "types/QATypes";

const QA = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string>("");

  const handleQuestionClick = (item: QuastionAnswer) => {
    if (selectedQuestion === item.question) {
      return setSelectedQuestion("");
    }
    setSelectedQuestion(item.question);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Вопросы и ответы</h2>

      {QAList.map((item, index) => (
        <div key={index} className={styles.item}>
          <div
            className={styles.questionContainer}
            onClick={() => handleQuestionClick(item)}
          >
            <h3 className={styles.itemQuestion}>{item.question}</h3>
            <span>
              {selectedQuestion === item.question ? (
                <Icon.Cross />
              ) : (
                <Icon.Plus />
              )}
            </span>
          </div>
          <div
            className={`${styles.itemAnswerContainer} ${
              selectedQuestion === item.question ? styles.itemAnswerShowed : ""
            }`}
          >
            <p className={styles.itemAnswer}>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default QA;
