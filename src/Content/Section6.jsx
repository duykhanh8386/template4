import Doctor1 from "../heplers/img/Section6/Doctor1.png";
import Doctor2 from "../heplers/img/Section6/Doctor2.png";
import Doctor3 from "../heplers/img/Section6/Doctor3.png";
import Doctor4 from "../heplers/img/Section6/Doctor4.png";
import FiveStar from "../heplers/img/Section6/FiveStar.png";
import Right from "../heplers/img/Section4/right.svg";
import Left from "../heplers/img/Section4/left.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from "react";
import GridWave from "../heplers/img/Section4/GridWave.png";

function Section6() {
  const doctor = [
    { id: 1, img: Doctor1 },
    { id: 2, img: Doctor2 },
    { id: 3, img: Doctor3 },
    { id: 4, img: Doctor4 },
    { id: 5, img: Doctor1 },
    { id: 6, img: Doctor2 },
    { id: 7, img: Doctor3 },
    { id: 8, img: Doctor4 },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <>
      <div className="4k:max-w-[75%] md:max-w-[80%] max-w-[95%] relative mx-auto z-[1]">
        <div className="text-lg lg:text-xl xl:text-[22px] 2xl:text-4xl 4k:text-[40px] font-bold text-center">Đội ngũ bác sĩ của chúng tôi</div>
      </div>

      <div className="w-full relative">
        <div className="absolute z-0 opacity-20"><img src={GridWave} alt="" /></div>
        <div className="4k:max-w-[75%] md:max-w-[80%] max-w-[95%] relative mx-auto z-[1]">
          <div className="relative ">
            <div ref={prevRef} className="absolute left-[-2%] top-[40%] z-[2] transition-all hover:scale-110 p-2 cursor-pointer rounded-full bg-white text-[#6FCF97] shadow-lg flex items-center justify-center">
              <img src={Left} alt="left" className="=w-7" />
            </div>
            <div ref={nextRef} className="absolute right-[-2%] top-[40%] z-[2] transition-all hover:scale-110 p-2 cursor-pointer rounded-full bg-white text-[#6FCF97] shadow-lg flex items-center justify-center">
              <img src={Right} alt="right" className="=w-7" />
            </div>

            <Swiper
              loop={true}
              modules={[Navigation]}
              loopedSlides={7}
              watchSlidesProgress={true}
              watchOverflow={true}
              grabCursor={true}
              speed={100}
              effect="slide"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              spaceBetween={'2%'}
              centeredSlides={false}
              slidesPerView="auto"
              className="!px-0 !pb-[5%] mt-[3%]"
            >
              {doctor.map((item) => (
                <SwiperSlide key={item.id} className="flex items-stretch sm:!w-[250px] xl:!w-[295px] 4k:!w-[325px] !w-[200px] h-full shrink-0">
                  <div id="card" className="bg-white border-[1px] border-[#EBEBEB] shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out 
                    rounded-tl-[24%] rounded-tr-[3%] rounded-bl-[3%] rounded-br-[3%]">
                    <div className="transition-all relative w-full flex justify-center rounded-tl-[24%] rounded-tr-[3%] rounded-bl-[3%] rounded-br-[24%] items-end text-center bg-white">
                      <div className="absolute inset-0 bg_main rounded-tl-[24%] rounded-tr-[3%] rounded-bl-[3%] rounded-br-[24%] opacity-60 z-0"></div>
                      <div className="w-[75%] xl:h-[320px] md:h-[270px] sm:h-[270px] h-[215px] relative z-[1] overflow-hidden">
                        <img src={item.img} alt="Member" className="w-full object-cover" />
                      </div>
                    </div>
                    <div className="text-black w-[95%] sm:py-5 py-3 mx-auto text-center">
                      <div className="sm:pt-3 py-1 font-bold gap-x-2 xl:text-[20px] lg:text-lg text-[16px]">PHẠM TRUNG CHÍNH</div>
                      <div className="sm:pt-1 text-[#0A9949] xl:text-[17px] lg:text-base text-[14px]">PGS.TS. Bác sĩ Ung bướu</div>
                      <div className="py-[2%]">
                        <div className="aspect-auto flex justify-center"><img src={FiveStar} alt="" /></div>
                        <div className="text-[12px]">4.8/5 (38 bình chọn)</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination: 3 dots only */}
            <div className="flex justify-center gap-2 mt-[0%]">
              {[0, 1, 2].map((i) => {
                const slidesPerGroup = 3;
                const index = i * slidesPerGroup;
                const isActive = Math.floor(activeIndex / slidesPerGroup) === i;
                return (
                  <div
                    key={i}
                    onClick={() => swiperRef.current?.slideToLoop(index)}
                    className={`h-[7px] rounded-full transition-all duration-300 cursor-pointer ${
                      isActive ? 'bg_main w-[60px]' : 'bg-gray-300 w-[17px]'
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
