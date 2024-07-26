import thirdBlock from "assets/images/ThirdBlock.png";

import styles from "./ThirdBlock.module.css";

const ThirdBlock = () => {
  return (
    <section className={styles.container} id="thirdBlock">
      <div className={styles.thirdWrapper}>
        <h3 className={styles.title}>Круто, ты дошёл до третьего блока</h3>
        <article className={styles.infoContainer}>
          <p className={styles.info}>
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
          </p>
          <p className={styles.info}>
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </p>
        </article>
      </div>
      <img src={thirdBlock} alt="Смартфон с приложением и персонаж"  className={styles.picture}/>
    </section>
  );
};
export default ThirdBlock;
