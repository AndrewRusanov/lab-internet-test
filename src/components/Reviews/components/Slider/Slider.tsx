import { FC } from "react";

import { ReviewItem } from "types/reviewsTypes";

import Slide from "./components/Slide";

import styles from "./Slider.module.css";

type Props = {
  reviews: ReviewItem[];
};

const Slider: FC<Props> = ({ reviews }) => {
  return (
    <section className={styles.container}>
      {reviews.map((review) => (
        <Slide {...review} />
      ))}
    </section>
  );
};

export default Slider;
