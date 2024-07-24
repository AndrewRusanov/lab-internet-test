import { FC } from "react";

import { ReviewItem } from "types/reviewsTypes";

import styles from "./Slide.module.css";

const Slide: FC<ReviewItem> = ({ avatar, fullName, city, review }) => {
  return <div className={styles.slideContainer}></div>;
};

export default Slide;
