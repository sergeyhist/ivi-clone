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
import { useTranslation } from "react-i18next";

const CommentsSlider: FC = () => {
  const { t } = useTranslation();
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();

  const clickHandler = (): void => {
    dispatch(
      setShowModal({
        ...showModal,
        showMovieInfoModal: { isShow: true, defaultTab: "comments" },
      })
    );
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section__row}>
          <h4 onClick={clickHandler} className={styles.title}>
            {t("movie.comments.comments")}
            <span className={styles.title__counter}>{comments.length}</span>
          </h4>
          <CustomButton
            type="frame"
            className={`${styles.button} ${styles.button_desktop}`}
            clickCallback={clickHandler}
          >
            {t("movie.comments.leave")}
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
          {t("movie.comments.leave")}
        </CustomButton>
      </div>
    </section>
  );
};

export default CommentsSlider;
