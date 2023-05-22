import { FC } from "react";
import styles from "./CommentsSlider.module.sass";
import Slider from "/src/UI/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { breakpoints } from "./CommentsSlider.utils";
import CommentsCard from "./CommentCard/CommentCard";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { useAppDispatch } from "/src/hooks/redux";
import { modalsSlice } from "/src/store/slices/modalsSlice";
import { useTranslation } from "next-i18next";
import { IComment } from "/src/types/IComment";
import Container from "/src/UI/Container/Container";

interface CommentsSliderProps {
  comments: IComment[];
}

const CommentsSlider: FC<CommentsSliderProps> = ({ comments }) => {
  const { t } = useTranslation("movie");
  const { setShowMovieModal } = modalsSlice.actions;
  const dispatch = useAppDispatch();

  const clickHandler = (): void => {
    dispatch(setShowMovieModal({ isShow: true, defaultTab: "comments" }));
  };

  return (
    <section data-testid="comments-slider" className={styles.section}>
      <Container>
        <div className={styles.section__row}>
          <h4 onClick={clickHandler} className={styles.title}>
            {t("comments.comments")}
            <span className={styles.title__counter}>{comments.length}</span>
          </h4>
          <CustomButton
            type="frame"
            className={`${styles.button} ${styles.button_desktop}`}
            clickCallback={clickHandler}
          >
            {t("comments.leave")}
          </CustomButton>
        </div>
        {comments.length !== 0 && (
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
        )}
        <CustomButton
          type="frame"
          className={`${styles.button} ${styles.button_mobile}`}
          clickCallback={clickHandler}
          dataTestId="open-comments-modal"
        >
          {t("comments.leave")}
        </CustomButton>
      </Container>
    </section>
  );
};

export default CommentsSlider;
