import Doctor from "../heplers/img/Section5/Doctor.png";
import LogoBg from "../heplers/img/Section5/LogoBg.png";
import DangKy from "../heplers/img/Section2/DangKy.png";
import KeNgang from "../heplers/img/Section5/KeNgang.png";
import HienVi from "../heplers/img/Section5/HienVi.png";
import Ly from "../heplers/img/Section5/Ly.png";
import Note from "../heplers/img/Section5/Note.png";
import Health from "../heplers/img/Section5/Health.png";
import BackgroundImg from "../heplers/img/Section2/BackgroundImg.png";
import Circle from "../heplers/img/Section3/Circle.png";
import { useState } from "react";

function Section5() {
  const [showModal, setShowModal] = useState(false);

  const open = () => {
    setShowModal(true);
  }
  const close = () => {
    setShowModal(false);
  }
  return (
    <>
      <div className="4k:max-w-[87%] md:max-w-[90%] sm:max-w-[98%] max-w-[95%] sm:ml-auto sm:mx-0 mx-auto md:mt-[5%] relative">
        <div className="grid grid-cols-7 sm:gap-[5%] gap-[1%] relative z-[1]">
          {/* Text left */}
          <div className="sm:col-span-3 col-span-7 grid grid-cols-2 xl:self-end self-center">
            <div className="col-span-2 ">
              <div className="text-lg lg:text-xl xl:text-[22px] 2xl:text-4xl 4k:text-[40px] font-bold">Tại sao nên chọn gói Ortho-K tại Bệnh viện Đa khoa Phương Đông?</div>
              <div className="text-gray-600 pt-2.5 opacity-60  text-justify 2xl:text-lg xl:text-lg lg:text-base text-[14px]">Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ có trình độ chuyên môn cao, cơ sở vật chất, trang thiết bị kỹ thuật hiện đại giúp quá trình thăm khám và điều trị các bệnh về tật khúc xạ an toàn, chính xác. Khi đăng ký sử dụng gói kính Ortho - K tại bệnh viện Phương Đông, khách hàng được trải nghiệm dịch vụ y tế chất lượng cao cùng với các ưu điểm vượt trội sau</div>
            </div>
            <div className="col-span-2 hidden xl:grid grid-cols-2 gap-[3%] mt-[3%]">
              {/* Cot 1 */}
              <div className="col-span-1 flex-col flex gap-[8%]">
                <div className=" hover:bg-white hover:shadow-2xl px-7 py-7 border-[#EBEBEB] border-2 hover:border-white rounded-2xl bg-[#FBFBFB] place-items-center transition-all duration-300 ease-in-out">
                  <img src={Health} alt="Health" className="w-[3.09vw]"/>
                  <div className="text-[1rem] pt-2.5 text-center font-bold">Đội ngũ bác sĩ giàu kinh nghiệm</div>
                  <div className="text-[1rem] pt-2.5 text-center text-gray-600">Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.</div>
                </div>
                <div className=" hover:bg-white hover:shadow-2xl px-7 py-7 border-[#EBEBEB] border-2 hover:border-white rounded-2xl bg-[#FBFBFB] place-items-center transition-all duration-300 ease-in-out">
                  <img src={HienVi} alt="Health" className="w-[3.09vw]"/>
                  <div className="text-[1rem] pt-2.5 text-center font-bold">Trang thiết bị hiện đại</div>
                  <div className="text-[1rem] pt-2.5 text-center text-gray-600">Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.</div>
                </div>
              </div>
              {/* Cot 2 */}
              <div className="col-span-1 mt-[10%] flex-col flex gap-y-[5%]">
                <div className=" hover:bg-white hover:shadow-2xl px-7 py-7 border-[#EBEBEB] border-2 hover:border-white rounded-2xl bg-[#FBFBFB] place-items-center transition-all duration-300 ease-in-out">
                  <img src={Note} alt="Health" className="w-[3.09vw]"/>
                  <div className="text-[1rem] pt-2.5 text-center font-bold">Đảm bảo chất lượng an toàn tuyệt đối</div>
                  <div className="text-[1rem] pt-2.5 text-center text-gray-600">Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.</div>
                </div>
                <div className=" hover:bg-white  hover:shadow-2xl mt-[10%] px-7 py-7 border-[#EBEBEB] border-2 hover:border-white rounded-2xl bg-[#FBFBFB] place-items-center transition-all duration-300 ease-in-out">
                  <img src={Ly} alt="Health" className="w-[3.09vw]"/>
                  <div className="text-[1rem] pt-2.5 text-center font-bold">Dịch vụ chuyên nghiệp</div>
                  <div className="text-[1rem] pt-2.5 text-center text-gray-600">Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.</div>
                </div>
              </div>

            </div>

          </div>
          
          {/* End text */}
          <div className=" sm:col-span-4 col-span-7 bg_main justify-center aspect-[1] flex items-end  rounded-tl-[45%] relative z-1 overflow-hidden rounded-br-[45%]">
            <img src={LogoBg} alt="Logo" className="absolute w-[80%] m-auto inset-0 z-1" />
            <div className="justify-center aspect-[1] h-full flex ">
              <img src={Doctor} alt="Banner" className="absolute z-1 w-full h-full bottom-0 object-cover items-end" />
              {/* Button */}
              <div className="absolute z-[1]  top-[43%] lg:left-[16.5%] md:left-[16%] sm:left-[14%] mb5:left-[16%] mb2:left-[14%] mb3:left-[15%] left-[15%]">
                <div className="flex justify-center  items-center mt-[3%] sm:mt-[5%]" onClick={open}>
                  <div className="p-1.5 bg_button !font-bold cursor-pointer  items-center gap-[0.5em]
                  sm:text-[0.9vw] text-[12px] mb5:flex hidden mb5:py-[0.6vw] py-[0.8vw] mb5:px-[1.5vw] shadow-lg transition-all duration-300 ease-in-out rounded-full my-auto leading-none">
                    <img src={DangKy} alt="Đăng ký" className="sm:w-[1.2vw] w-[4vw] aspect-square" />
                    <span className="pt-[0.1vw]  font-bold leading-none">ĐĂNG KÝ TƯ VẤN</span>
                    
                  </div>
                </div>
                <div className=" w-[50%] mt-[15%] ml-[5%] mb5:block hidden">
                  <div className="mt-0.5 sm:mt-1"><img src={KeNgang} alt="KeNgang" /></div>
                  <div className="mt-0.5 sm:mt-1"><img src={KeNgang} alt="KeNgang" /></div>
                  <div className="mt-0.5 sm:mt-1"><img src={KeNgang} alt="KeNgang" /></div>
                  <div className="mt-0.5 sm:mt-1"><img src={KeNgang} alt="KeNgang" /></div>
                </div>
              </div>
              {/* end button */}

            </div>
          </div>
          {/* Card moblie */}
          <div className="col-span-7 xl:hidden mt-[5%] sm:mt-[3%] grid grid-cols-2 mb4:gap-[3%] ">
              {/* Cot 1 */}
              <div className="col-span-2 mb4:col-span-1 flex-col flex gap-[8%]">
                <div className=" hover:bg-white hover:shadow-2xl px-7 py-7 border-[#EBEBEB] border-2 hover:border-white rounded-2xl bg-[#FBFBFB] place-items-center transition-all duration-300 ease-in-out">
                  <img src={Health} alt="Health" className="aspect-[1]"/>
                  <div className="text-[1rem] pt-2.5 text-center font-bold">Đội ngũ bác sĩ giàu kinh nghiệm</div>
                  <div className="text-[1rem] pt-2.5 text-center text-gray-600">Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.</div>
                </div>
                <div className=" hover:bg-white mt-[2%] mb4:mt-0 hover:shadow-2xl px-7 py-7 border-[#EBEBEB] border-2 hover:border-white rounded-2xl bg-[#FBFBFB] place-items-center transition-all duration-300 ease-in-out">
                  <img src={Health} alt="Health" className="aspect-[1]"/>
                  <div className="text-[1rem] pt-2.5 text-center font-bold">Đội ngũ bác sĩ giàu kinh nghiệm</div>
                  <div className="text-[1rem] pt-2.5 text-center text-gray-600">Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.</div>
                </div>
              </div>
              {/* Cot 2 */}
              <div className="col-span-2 mb4:col-span-1 mb4:mt-[10%] mt-[2%] flex-col flex gap-y-[5%]">
                <div className=" hover:bg-white hover:shadow-2xl px-7 py-7 border-[#EBEBEB] border-2 hover:border-white rounded-2xl bg-[#FBFBFB] place-items-center transition-all duration-300 ease-in-out">
                  <img src={Health} alt="Health" className="aspect-[1]"/>
                  <div className="text-[1rem] pt-2.5 text-center font-bold">Đội ngũ bác sĩ giàu kinh nghiệm</div>
                  <div className="text-[1rem] pt-2.5 text-center text-gray-600">Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.</div>
                </div>
                <div className=" hover:bg-white  hover:shadow-2xl mb4:mt-[10%] mt-[2%] px-7 py-7 border-[#EBEBEB] border-2 hover:border-white rounded-2xl bg-[#FBFBFB] place-items-center transition-all duration-300 ease-in-out">
                  <img src={Health} alt="Health" className="aspect-[1]"/>
                  <div className="text-[1rem] pt-2.5 text-center font-bold">Đội ngũ bác sĩ giàu kinh nghiệm</div>
                  <div className="text-[1rem] pt-2.5 text-center text-gray-600">Hiện nay, tại Bệnh viện Đa khoa Phương Đông đáp ứng đầy đủ từ đội ngũ bác sĩ.</div>
                </div>
              </div>

            </div>
        </div>
{/* background */}
        <img src={BackgroundImg} alt="BackgroundImg" className="absolute top-[35%] w-[70%] h-[145%]  right-0 z-0" />
      </div>
      {/* SHow Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 z-[4]  ease-in-out flex items-center justify-center">
            {/* Overlay nền */}
            <div
              onClick={close}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            ></div>

            {/* Modal content */}
            <div className={`relative bg-white rounded-lg shadow-2xl w-11/12 max-w-md p-6 mx-4 transform transition-all
                 duration-300 ease-out scale-100 ${showModal == false ? 'animate-[fadeOut_0.3s_ease-in]' : 'animate-[scaleIn_0.3s_ease-out]'}`}>
              <button
                onClick={close}
                className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg transition-all duration-200 hover:scale-110"
              >
                ×
              </button>

              <h2 className="text-xl font-bold mb-4 text-gray-800">Modal Title</h2>
              <p className="text-sm text-gray-700 mb-6">
                Nội dung form đăng ký ở đây. Bạn có thể thêm form, input fields và các nội dung khác.
              </p>

              {/* Thêm nút action nếu cần */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={close}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Hủy
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="aspect-auto ml-[5%]"><img src={Circle} alt="Circle" /></div>
    </>
  )
}
export default Section5;