import { FC } from 'react'
import Slider from '/src/UI/Slider/Slider'
import { SwiperSlide } from 'swiper/react';
import BannerSlide from './BannerSlide/BannerSlide';
import { slides } from './BannerSlider.utils'

const BannerSlider:FC = () => {
  
  return (
    <section className='banner-slider'>

      <div className="container">

        <Slider loop={true} slidesPerView={1.000001}>

          {slides.map(slide =>
            
            <SwiperSlide key={slide.id}>
              <BannerSlide slide={slide}/>
            </SwiperSlide>

          )}

        </Slider>

        </div>

    </section>
  )
}

export default BannerSlider