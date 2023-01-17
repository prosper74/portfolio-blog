import Image from 'next/image';
import { TestimonialData } from './HomeDatas';
import { StarIcon } from '../common/svgIcons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export function Testimonials() {
  return (
    <>
      <section
        id="blog"
        className="sm:container mx-auto px-4 md:px-10 lg:px-20 py-16 break-words overflow-hidden"
      >
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Testimonials
            </h2>
            <p className="text-xl md:text-2xl">
              What people are saying about me 😍
            </p>
          </div>

          <div className="w-[800px] mx-auto xl:w-full xl:py-[50px]">
            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              loop={true}
              navigation={false}
              className="mySwiper"
            >
              {TestimonialData.map((d) => (
                <SwiperSlide key={d.id}>
                  <div className="flex flex-col justify-evenly h-[270px] my-6 ml-1 p-4 rounded-xl shadow-customBox cursor-grabbing">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src={d.img}
                          alt={d.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover mr-3"
                        />
                      </div>

                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((_, i) => (
                          <StarIcon
                            key={i}
                            width="15"
                            height="15"
                            fill="#9932cc"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-mono font-semibold text-xl">
                        {d.name}
                      </h3>
                      <p className="font-semibold text-sm">{d.designation}</p>
                    </div>

                    <p className="mb-6 text-md">{d.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
