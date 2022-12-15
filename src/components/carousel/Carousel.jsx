import { A11y, Keyboard, Lazy, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/keyboard';
import 'swiper/css/lazy';
import 'swiper/css/mousewheel';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../global/Container';

function Carousel() {
  const options = {
    slidesPerView: 1,
    slidesPerView: 1.25,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: {
      invert: true,
    },
    lazy: {
      checkInView: true,
      loadPrevNext: true,
    },
    a11y: {
      enabled: true,
    },
  };

  return (
    <section>
      <Container>
        <h2 className='text-3xl'>Trending movies</h2>
        <Swiper className='mt-4' {...options} modules={[Keyboard, Mousewheel, Lazy, A11y]}>
          <SwiperSlide
            className='rounded-3xl'
            style={{
              background: 'url("https://source.unsplash.com/random") no-repeat center/cover',
              aspectRatio: '16/9',
              maxHeight: '375px',
            }}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              background: 'url("https://source.unsplash.com/random") no-repeat center/cover',
              aspectRatio: '16/9',
              maxHeight: '375px',
            }}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              background: 'url("https://source.unsplash.com/random") no-repeat center/cover',
              aspectRatio: '16/9',
              maxHeight: '375px',
            }}
          ></SwiperSlide>
          <SwiperSlide
            style={{
              background: 'url("https://source.unsplash.com/random") no-repeat center/cover',
              aspectRatio: '16/9',
              maxHeight: '375px',
            }}
          ></SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}

export default Carousel;
