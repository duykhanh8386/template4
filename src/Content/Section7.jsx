
import Right from "../heplers/img/Section4/right.svg";
import Left from "../heplers/img/Section4/left.svg";
import Left1 from "../heplers/img/Section7/Left1.png";
import Right1 from "../heplers/img/Section7/Right1.png";
import FiveStar from "../heplers/img/Section6/FiveStar.png";
import Avt1 from "../heplers/img/Section7/Avt1.png";
import Avt2 from "../heplers/img/Section7/Avt2.png";
import Avt3 from "../heplers/img/Section7/Avt3.png";
import Avt4 from "../heplers/img/Section7/Avt4.png";
import Decor from "../heplers/img/Section7/Decor.png";
import Bg1 from "../heplers/img/Section7/Bg1.png";
import Bg2 from "../heplers/img/Section7/Bg2.png";
import Bg3 from "../heplers/img/Section7/Bg3.png";
import Bg4 from "../heplers/img/Section7/Bg4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from "react";

function Section7() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [hoverleft, setHoverLeft] = useState(false);
  const [hoverright, setHoverRight] = useState(false);
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
  // Fake data tạm
  const data = [
    { id: 1, bg: Bg1, avt: Avt1 },
    { id: 2, bg: Bg2, avt: Avt2 },
    { id: 3, bg: Bg3, avt: Avt3 },
    { id: 4, bg: Bg4, avt: Avt4 },
    { id: 5, bg: Bg1, avt: Avt1 },
    { id: 6, bg: Bg2, avt: Avt2 },
    { id: 7, bg: Bg3, avt: Avt3 },
    { id: 8, bg: Bg4, avt: Avt4 },
  ];
  return (
    <>
      {/* Background color */}
      <div className="w-full grid grid-cols-2 gap-[2%] sm:mt-[6%] mt-[3%] relative z-0">
        <div className="sm:col-span-1 col-span-2 aspect-[4/3] bg-gradient-to-t from-[var(--main-gradient-from)] to-[var(--main-gradient-to)] 
      sm:rounded-tl-[43.6%] rounded-tl-[23.6%] rounded-tr-[1.25%] sm:rounded-br-[43.6%] rounded-br-[23.6%] rounded-bl-[1.25%]">
        </div>
        <div className="sm:col-span-1 sm:block hidden mt-[5%] self-start ">
          <img src={Decor} alt="" />
        </div>
      </div>
      {/* Title + thanh dieu huong */}
      <div className="relative 4k:max-w-[75%] md:max-w-[80%] max-w-[95%] sm:mt-[-30%] mt-[-65%] z-[1] mx-auto">
        {/* Decor */}
        <div className="flex justify-between items-center sm:flex-nowrap flex-wrap">
          <div className="sm:max-w-[40%] max-w-full text-white">
            <div className="text-lg lg:text-xl xl:text-[22px] 2xl:text-4xl 4k:text-[38px] font-bold">Cảm nhận của khách hàng sau khi sử dụng dịch vụ</div>
          </div>
          {/* navigate */}
          <div className="flex  gap-4 sm:mt-4 my-3 mt-2  items-center  ">
            <button onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
              ref={prevRef}
              className="transition-all  hover:scale-110 p-2 cursor-pointer rounded-full bg-white text-[#6FCF97] shadow-lg flex items-center justify-center"
            >
              <img src={hoverleft ? Left : Left1}
                alt="left" className="=w-7" />
            </button>

            <button onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
              ref={nextRef}
              className="transition-all  hover:scale-110 p-2 cursor-pointer rounded-full bg-white text-[#6FCF97] shadow-lg flex items-center justify-center"
            >
              <img src={hoverright ? Right : Right1} alt="right" className="= w-7" />
            </button>

          </div>
        </div>
      </div>

      {/* Swiper */}
      <div className="4k:max-w-[87%] md:max-w-[90%] sm:max-w-[98%] max-w-[95%] sm:ml-auto sm:mx-0 mx-auto relative">
        <Swiper loop={true}
          modules={[Navigation]}
          loopedSlides={7}

          watchSlidesProgress={true}
          watchOverflow={true}
          grabCursor={true}
          speed={100}
          effect="slide"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={'2%'}
          pagination={{ clickable: true }}
          centeredSlides={false}

          slidesPerView="auto"

          className="!px-0 !pb-[4%] mt-[3%] "
        >

          {data.map((data) => (
            <SwiperSlide key={data.id} className="flex items-stretch   sm:!w-[300px] xl:!w-[355px] 4k:!w-[450px] !w-[220px]  shrink-0">
              <div
                className={`transition-all  bg-white relative  w-full a  flex flex-col 
                  pb-5 rounded-[5%] overflow-hidden
                  items-center  text-center  shadow-md  duration-300 ease-in-out hover:shadow-2xl border-0`}
              >
                <div className="">
                  {/* Background */}
                  <div className="h-[60px]  sm:h-[80px]  lg:h-[90px] flex items-center overflow-hidden">
                    <img

                      src={data.bg}
                      alt={`Member`}
                      className="w-full  "
                    />
                  </div>

                  {/* Avata */}
                  <div className="w-full flex justify-center mt-[-10%]">
                    <div className="rounded-full border-2 border-white  w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px] overflow-hidden">
                      <img

                        src={data.avt}
                        alt={`Member`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>


                  {/* text */}
                  <div className=" w-[95%] mx-auto text-center">
                    <div className="sm:pt-3 py-1 text-[#252525] font-bold gap-x-2 xl:text-[20px] lg:text-lg text-[18px] ">Nguyễn Minh Ánh</div>
                    <div className="aspect-auto flex justify-center"><img src={FiveStar} alt="5 sao " /></div>
                    <div className="sm:pt-2.5 text-[#252525] font-semibold sm:text-[16px] text-sm">Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!</div>
                    <div className="sm:pt-2.5 text-[#454545]  text-center sm:text-[14px] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa.</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}




        </Swiper>
      </div>

    </>
  )
}
export default Section7;