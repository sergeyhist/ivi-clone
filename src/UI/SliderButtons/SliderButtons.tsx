import { FC } from "react";
import styles from "./SliderButtons.module.sass";
import { useSwiper } from "swiper/react";

interface IStateProp {
	prev: boolean;
	next: boolean;
}

interface SliderButtonsProps {
	prevClassName?: string;
	nextClassName?: string;
	state?: IStateProp;
}

const SliderButtons: FC<SliderButtonsProps> = ({
	nextClassName = "",
	prevClassName = "",
	state = { prev: true, next: true },
}) => {
	const swiper = useSwiper();

	const nextClick = () => {
		swiper.slideNext();
	};

	const prevClick = () => {
		swiper.slidePrev();
	};

	return (
		<>
			{state.prev && (
				<button
					onClick={prevClick}
					className={`${styles.button} ${styles.button_prev} ${prevClassName}`}
				>
					<i className={styles.button_prev__icon}></i>
				</button>
			)}

			{state.next && (
				<button
					onClick={nextClick}
					className={`${styles.button} ${styles.button_next} ${nextClassName}`}
				>
					<i className={styles.button_next__icon}></i>
				</button>
			)}
		</>
	);
};

export default SliderButtons;
