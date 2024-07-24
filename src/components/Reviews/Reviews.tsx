import { reviewList } from "data/constants";
import Slider from "./components/Slider";
import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы</h2>
        {/* TODO: Доделать попозже */}
        {/*<Slider reviews={reviewList} />*/}
      </div>
    </section>
  );
};

export default Reviews;
