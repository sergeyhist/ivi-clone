import { FC } from "react";
import styles from "./CommentsSlider.module.sass";
import Slider from "/src/UI/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { breakpoints } from "./CommentsSlider.utils";
import CommentsCard from "./CommentCard/CommentCard";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { comments } from "./CommentsSlider.utils";

const CommentsSlider: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__row}>
        <h4 className={styles.title}>
          Комментарии<span className={styles.title__counter}>301</span>
        </h4>
        <CustomButton
          type="frame"
          className={`${styles.button} ${styles.button_desktop}`}
        >
          Оставить отзыв
        </CustomButton>
      </div>
      <Slider
        swiperClassName={styles.swiper}
        prevClassName={styles.prev}
        nextClassName={styles.next}
        breakpoints={breakpoints}
      >
        {comments.map((comment, index) => (
          <SwiperSlide key={index}>
            <CommentsCard comment={comment} />
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};

export default CommentsSlider;
