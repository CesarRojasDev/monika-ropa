import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const Post = () => {
  return (
    <section className='container mx-auto py-10'>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='/public/post/coming-soon.webp'
            alt='img-1'
            className='w-full h-auto rounded-lg shadow-md'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/public/post/new.webp'
            alt='img-2'
            className='w-full h-auto rounded-lg shadow-md'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/public/post/pronto.webp'
            alt='img-2'
            className='w-full h-auto rounded-lg shadow-md'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Post
