import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { reviewList } from "data/constants";

import user from "assets/images/user.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Reviews.module.css";
import "./Slider.css";

const Reviews: React.FC = () => {
  return (
    <section className={styles.reviewSlider}>
      <h2 className={styles.reviewSliderTitle}>Отзывы</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={32}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className={styles.reviewSliderContainer}
        breakpointsBase="window"
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          1919: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
      >
        {reviewList.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={styles.review}>
              <div className={styles.infoContainer}>
                <img
                  src={user}
                  alt="Фото пользователя"
                  loading="lazy"
                  width={44}
                  height={44}
                />
                <div>
                  <h3 className={styles.reviewName}>{review.fullName}</h3>
                  <p className={styles.reviewCity}>{review.city}</p>
                </div>
              </div>
              <p className={styles.reviewText}>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
