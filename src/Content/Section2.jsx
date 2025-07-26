import { useState } from "react";
import DangKy from "../heplers/img/Section2/DangKy.png";


function Section2() {
  const [openModal, setOpenModal] = useState(false);
  const open = () => {
      setOpenModal(true);
  }
  const close = () => {
      setOpenModal(false);
  }

  return (
    <>
      <div className="4k:max-w-[75%] md:max-w-[80%] max-w-[95%] relative mx-auto">
        <div className="relative">

          {/* Background */}
          {/* <img src={BackgroundImg} alt="BackgroundImg" className="absolute top-[-5%] w-[85%] z-0"/> */}
          {/* Content */}
          <div className="md:mt-[10%] mt-5 relative">
            <div style={{
                WebkitTextStroke: "1px ", // Hoặc dùng màu phù hợp
              }} className="absolute bg_main text-transparent bg-clip-text font-black text-4xl right-[-10%] z-0">+</div>
            <div className="grid relative z-[1] md:grid-cols-2 grid-cols-1 gap-[3%] ">
              {/* Decor + */}
              
              <div className="col-span-1">
                <div className=" text-lg lg:text-xl xl:text-[22px] 2xl:text-4xl 4k:text-[40px] font-bold">Tầm quan trọng của việc sử dụng kính Ortho-K</div>
              </div>
              <div className="col-span-1">
                <div className="text-gray-600 sm:pt-2.5 pt-0 opacity-60  text-justify 2xl:text-lg xl:text-lg lg:text-base text-[14px]">Ortho-K (Orthokeratology - tạo hình giác mạc) là phương pháp sử dụng kính áp tròng cứng được thiết kế đặc biệt với mỗi người để định hình tạm thời giác mạc và cải thiện thị lực. Kính Ortho-K thường đeo vào ban đêm để định hình lại bề mặt trước của mắt.</div>
                <div className="text-gray-600 pt-2.5 opacity-60  text-justify 2xl:text-lg xl:text-lg lg:text-base text-[14px]">Nhiều nghiên cứu lâm sàng cho thấy kính Ortho K mang lại hiệu quả trong việc giảm tiến triển tật khúc xạ khoảng 50% ở trẻ và thậm chí một số trẻ có kết quả tốt hơn. Ngoài ra, kính Ortho-K có những ưu điểm sau:</div>
                <div className="">
                  <div className="flex justify-start items-center mt-[3%] sm:mt-[5%]" onClick={open}>
                    <div className="p-1.5 bg_button !font-bold cursor-pointer flex items-center gap-2 sm:px-6 sm:py-3 px-5 py-2.5 shadow-lg transition-all duration-300 ease-in-out text-[13px] lg:text-[16px] rounded-full my-auto leading-none">
                      <img src={DangKy} alt="Đăng ký" className="aspect-1" />
                      <span className="flex items-center pt-1">ĐĂNG KÝ TƯ VẤN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
            {openModal&&(
              <>
                <div className="fixed inset-0 z-[4]  ease-in-out flex items-center justify-center">
                {/* Overlay nền */}
                <div
                  onClick={close}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                ></div>

                {/* Modal content */}
                <div className={`relative bg-white rounded-lg shadow-2xl w-11/12 max-w-md p-6 mx-4 transform transition-all
                 duration-300 ease-out scale-100 ${openModal==false ? 'animate-[fadeOut_0.3s_ease-in]' : 'animate-[scaleIn_0.3s_ease-out]'}`}>
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
    </>
  )
}
export default Section2;