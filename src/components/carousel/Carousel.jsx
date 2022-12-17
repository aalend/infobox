import { A11y, Keyboard, Lazy, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/keyboard';
import 'swiper/css/lazy';
import 'swiper/css/mousewheel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TMDB_BACKDROP_POSTER_PATH } from '../../config/config';
import { useFetchTrendingQuery } from '../../features/movies/movies-slice';
import Container from '../global/Container';

function Carousel() {
  const { data = [], isFetching } = useFetchTrendingQuery();

  const options = {
    slidesPerView: 1,
    slidesPerView: 1.25,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: {
      invert: true,
    },
    lazy: {
      enabled: true,
      checkInView: true,
      loadPrevNex: true,
      loadPrevNextAmount: 2,
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
          {data.results?.map(slide => {
            return (
              <SwiperSlide
                key={slide.id}
                className='relative rounded-3xl'
                style={{
                  background: `url("${TMDB_BACKDROP_POSTER_PATH}/${slide.backdrop_path}") no-repeat center/cover`,
                  aspectRatio: '16/9',
                  maxHeight: '375px',
                }}
              >
                <div className='absolute inset-0 rounded-3xl bg-slate-900 bg-opacity-40'></div>
                <h2 className='absolute bottom-3 left-3 isolate rounded-3xl bg-slate-800 px-4 py-1 text-sm text-gray-50'>
                  {slide.original_title ?? slide.title}
                </h2>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
}

export default Carousel;
