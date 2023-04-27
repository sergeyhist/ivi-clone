import { FC } from "react";
import styles from "./CommentsSlider.module.sass";
import Slider from "/src/UI/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { breakpoints } from "./CommentsSlider.utils";
import CommentsCard from "./CommentCard/CommentCard";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { comments } from "./CommentsSlider.utils";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setShowModal } from "/src/store/slices/modalsSlice";

const CommentsSlider: FC = () => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();

  const clickHandler = (): void => {
    dispatch(setShowModal({ ...showModal, showMovieInfoModal: true }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.section__row}>
        <h4 onClick={clickHandler} className={styles.title}>
          Комментарии<span className={styles.title__counter}>301</span>
        </h4>
        <CustomButton
          type="frame"
          className={`${styles.button} ${styles.button_desktop}`}
          clickCallback={clickHandler}
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
            <CommentsCard onClick={clickHandler} comment={comment} />
          </SwiperSlide>
        ))}
      </Slider>
      <CustomButton
        type="frame"
        className={`${styles.button} ${styles.button_mobile}`}
        clickCallback={clickHandler}
      >
        Оставить отзыв
      </CustomButton>
    </section>
  );
};

export default CommentsSlider;
