import { FC, ReactNode } from 'react'
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

interface SliderProps {
    children: ReactNode
    slidesPerView: number
    loop: boolean
}

const Slider:FC<SliderProps> = ({
  children,
  slidesPerView,
  loop
}) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={15}
      slidesPerView={slidesPerView}
      navigation={true}
      loop={loop}
      centeredSlides={true}
    >
      {children}
    </Swiper>
  )
}

export default Slider