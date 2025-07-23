import Decor1 from "../heplers/img/Section1/Decor1.png";
import Decor2 from "../heplers/img/Section1/Decor2.png";
import Banner from "../heplers/img/Section1/Banner.png";
import LogoBg from "../heplers/img/Section1/LogoBg.png";
import MayBay from "../heplers/img/Section1/MayBay.png";
import { useState } from "react";
function Section1() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
      alert("Số điện thoại không hợp lệ");
      return;
    }

    
    alert("Gửi thành công: " + phone);
  };
  return (
    <><div className="absolute left-3 top-[10%] z-0">
      <img src={Decor1} alt="Decor1" />

    </div>
      <div className="4k:max-w-[87%] md:max-w-[90%] sm:max-w-[98%] max-w-[95%] ml-auto relative">


        {/* Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 self-stretch">
          {/* Banner khi duoi md */}
          <div className=" md:hidden col-span-1  bg-gradient-to-l from-[#50C577] justify-center aspect-[4/5] lg:aspect-[1/1] flex items-end to-[#2DBEFC] rounded-tl-[45%] relative z-1 overflow-hidden rounded-br-[45%]">
            <img src={LogoBg} alt="Logo" className="absolute inset-0 z-0" />
            <div className="justify-center h-full flex ">
              <img src={Banner} alt="Banner" className="absolute z-1 h-[90%]  w-auto bottom-0 m-auto items-end" /></div>
          </div>
          <div className="col-span-1 self-center relative z-1">
            <div className="font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl lg:mb-[3%] lg:mt-0 mt-[6%]">Hãy để đôi mắt là cửa sổ của tâm hồn</div>
            <div className="2xl:text-lg text-gray-600 xl:text-lg lg:text-base lg:mb-[10%] mb-[2%] text-[14px]">Ortho-K (Orthokeratology - tạo hình giác mạc) là phương pháp sử dụng kính áp tròng cứng được thiết kế đặc biệt với mỗi người để định hình tạm thời giác mạc và cải thiện thị lực. Kính Ortho-K thường đeo vào ban đêm để định hình lại bề mặt trước của mắt.</div>
            <div className="text-black 2xl:text-lg  xl:text-lg lg:text-base text-[14px]  lg:mb-[3%] font-bold">Siêu khuyến mãi
              <span className="bg-gradient-to-r from-[#48C498] to-[#41C2B1] bg-clip-text text-transparent 2xl:text-3xl  xl:text-2xl lg:text-xl text-[18px]"> tháng 8</span>, giảm ngay
              <span className="bg-gradient-to-r from-[#3BC1C8] to-[#37BED5] bg-clip-text text-transparent 2xl:text-3xl  xl:text-2xl lg:text-xl text-[18px]"> 30% </span> khi đăng ký tại đây!
            </div>
            {/* input */}
            <div className="bg-gradient-to-r from-[#48C498] to-[#37BED5] p-[1px] rounded-full inline-flex w-full max-w-[100%]">
                 
              <div className="flex w-full items-center justify-between bg-white rounded-full px-4 py-2">
                <form onSubmit={handleSubmit} className="flex justify-between w-full"><input
                  
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nhập số điện thoại..."
                  className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                  
                />
                <button type="submit" className=" px-3 py-2 4k:py-4 xl:w-[50%] w-[60%] text-white text-sm font-bold rounded-full bg-gradient-to-r from-[#3EED8B] to-[#0A9949]
                2xl:text-lg  xl:text-lg lg:text-base text-[14px]  cursor-pointer shadow-md hover:opacity-90 transition flex justify-around items-center">
                  <img src={MayBay} alt="MayBay" /> GỬI THÔNG TIN
                </button></form>
              </div>
              
            </div>


          </div>
          {/* Anh banner phai */}
          <div className="col-span-1 bg-gradient-to-l from-[#50C577] justify-center aspect-[1] hidden md:flex items-end to-[#2DBEFC] rounded-tl-[45%] relative z-1 overflow-hidden rounded-br-[45%]">
            <img src={LogoBg} alt="Logo" className="absolute inset-0 z-0" />
            <div className="justify-center h-full flex ">
              <img src={Banner} alt="Banner" className="absolute z-1 h-[90%]  w-auto bottom-0 m-auto items-end" /></div>
          </div>

        </div>
      </div>
    </>
  )
}
export default Section1;