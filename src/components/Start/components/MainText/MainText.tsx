import styles from "./MainText.module.css";

const MainText = () => {
  return (
    <div className={styles.mainText}>
      <h1 className={styles.title}>
        Говорят, никогда не поздно сменить профессию
      </h1>
      <p className={styles.article}>
        Сделай круто тестовое задание и у тебя получится
      </p>
      <button>Проще простого!</button>
    </div>
  );
};

export default MainText;
