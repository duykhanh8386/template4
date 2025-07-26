import { useRef, useState } from "react";
import Circle from "../heplers/img/Section3/Circle.png";
import Tru from "../heplers/img/Section8/Tru.png";
import Cong from "../heplers/img/Section8/Cong.png";
import DichVu from "../heplers/img/Section8/DichVu.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
function Section8() {
  const swiperRef = useRef(null);
  const accData = [
    {
      id: 1,
      title: "Cách phân biệt giữa cảm cúm thông thường và covid-19?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, nec morbi mauris, turpis fringilla condimentum urna sagittis est. Id tortor odio posuere a cursus netus massa. Tellus etiam nisl pretium feugiat nulla. Pulvinar nisl et suspendisse velit ornare sed dolor, convallis dolor. Et, dignissim amet sed orci at amet id nulla mauris. "
    },
    { id: 2 },
    { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },
  ];
  const menu = [
    { id: 1, title: "ORTHO K - 01" },
    { id: 2, title: "ORTHO K - 02" },
    { id: 3, title: "ORTHO K - 03" },
    { id: 4, title: "ORTHO K - 04" },
    { id: 5, title: "ORTHO K - 05" },
  ]
  const [isOpen, setIsOpen] = useState({});
  const handleOpen = (id) => {
    setIsOpen((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))

  }
  const [isActive, setIsActive] = useState({ 1: true });
  const handleChoose = (id, index) => {
    setIsActive({ [id]: true });
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  }
  return (
    <>
      {/* Decor */}
      <div className="flex justify-end mr-[2%] mt-[2%]">
        <img src={Circle} alt="Circle" />
      </div>
      {/* Container */}
      <div className="relative 4k:max-w-[75%] md:max-w-[80%] max-w-[95%] pb-10 z-[1] mx-auto">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[2%]">
          {/* content left */}
          <div className="col-span-1">
            <div className="text-lg lg:text-xl  text-center xl:text-4xl 4k:text-[38px] font-bold">Những câu hỏi thường gặp</div>
            <div className="mt-3 ">
              {accData.map((data) => (
                <div key={data.id} className={` sm:py-[3%] pt-[3%] text-left  border-t  ${accData.lastIndexOf ? 'border-b' : ''} border-[#EBEBEB]`}>
                  <div onClick={() => handleOpen(data.id)} className="flex cursor-pointer justify-between items-center ">
                    <div className=" text-[#252525] font-semibold lg:text-[18px] sm:text-[16px] text-sm">Cách phân biệt giữa cảm cúm thông thường và covid-19?</div>
                    <div className=""><img src={isOpen[data.id] ? Tru : Cong} alt="DOng/Mo" className="" /></div>
                  </div>
                  <div>
                    {isOpen[data.id] && (
                      <>
                        <div className={`sm:pt-2.5 text-[#454545]   sm:text-[16px] text-xs pb-3`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, nec morbi mauris, turpis fringilla condimentum urna sagittis est. Id tortor odio posuere a cursus netus massa. Tellus etiam nisl pretium feugiat nulla. Pulvinar nisl et suspendisse velit ornare sed dolor, convallis dolor. Et, dignissim amet sed orci at amet id nulla mauris.
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content right */}
          <div>
            <div className="text-lg lg:text-xl text-center xl:text-4xl 4k:text-[38px] font-bold">Bảng giá dịch vụ gói Ortho-K</div>
            <div className="flex justify-around gap-2 mt-[3%]">
              {/* Text dep vcl */}
              {menu.map((item, index) => (
                <div>
                  <div className={`pb-[1.5px] p-[-2px] transition-all cursor-pointer duration-200 ease-out ${isActive[item.id] ? 'bg_main' : 'bg-white'}`}>
                    <div key={item.id} onClick={() => handleChoose(item.id, index)}
                      className={` w-full h-full pb-3 bg-white font-bold 4k:text-[18px] lg:text-[16px] text-[14px] text-sm`}>
                      <h2 className={`${isActive[item.id] ? 'bg_main bg-clip-text text-transparent' : 'bg-white'} transition-all cursor-pointer duration-200 ease-out`}>{item.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
              {/* Img */}

            </div>


            <Swiper loop={true}
              modules={[Navigation, Pagination]}
              loopedSlides={7}
              // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              pagination={{
                clickable: true,
                el: '.custom-pagination-8',
                dynamicBullets: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',

              }}
              watchSlidesProgress={true}
              watchOverflow={true}
              grabCursor={true}
              speed={100}
              effect="slide"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={'2%'}
              // onslide change la de bat nhip giua pagination voi title
              onSlideChange={(swiper) => {
                const realIndex = swiper.realIndex;
                // lay index thuc o trong vong loop
                const activeMenuId = menu[realIndex % menu.length]?.id;
                if (activeMenuId) {
                  setIsActive({ [activeMenuId]: true });
                }
              }}
              centeredSlides={false}

              slidesPerView="auto"

              className="!px-0 !pb-[5%] mt-[3%] "
            >

              {[1, 2, 3, 4, 5].map((_, index) => (
                <SwiperSlide key={index} className=" h-full shrink-0">
                  <div className="border   border-[#EBEBEB] rounded-[20px] overflow-hidden">
                    <img src={DichVu} alt="" className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>

              ))}

            </Swiper>
            {/* Custom pagination v1*/}
            <div className=" relative translate-x-[-20px] xl:mt-[2%] sm:mt-0 mt-3">
              <div className="custom-pagination-8 swiper-pagination"></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default Section8;