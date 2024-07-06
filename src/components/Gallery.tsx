import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const Gallery = () => {
  return (
    <section className='container mx-auto py-10'>
      <Swiper
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='/public/gallery/gal-1.webp'
            alt='img-1'
            className='w-full h-auto rounded-lg shadow-md'
            loading='lazy'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/public/gallery/gal-2.webp'
            alt='img-2'
            className='w-full h-auto rounded-lg shadow-md'
            loading='lazy'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/public/gallery/gal-3.webp'
            alt='img-3'
            className='w-full h-auto rounded-lg shadow-md'
            loading='lazy'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/public/gallery/gal-4.webp'
            alt='img-4'
            className='w-full h-auto rounded-lg shadow-md'
            loading='lazy'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Gallery
