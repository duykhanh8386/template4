import { useRef, useState } from "react";
import Bg from "../heplers/img/Section9/Bg.jpg";
import Robot from "../heplers/img/Section9/Robot.png";
import Lich from "../heplers/img/Section9/Lich.png"
import { faL } from "@fortawesome/free-solid-svg-icons";
function Section9() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
    isHuman: false,
  });
  const defaultForm = {
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
    isHuman: false,
  };
  // Icon lich
  const dateInputRef = useRef(null);
  const handleDateIconClick = () => {
    if (dateInputRef.current?.showPicker) {
      dateInputRef.current.showPicker();
    } else {
      dateInputRef.current.focus();

    }
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Số điện thoại không hợp lệ");
      return;
    } else {
      alert("Gui form thanh cong");
      setForm(defaultForm);
    }
    console.log("Form data:", form);
    // Handle submit logic here (API call, validation, etc.)
  };
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  }
  const close = () => {
    setOpenModal(false);
  }
  return (
    <>
      <div style={{ backgroundImage: `url(${Bg})` }} className="w-full xl:py-[2%] min-h-[100px] mb4:min-h-[170px] sm:min-h-[220px] 4k:py-[5%] lg:py-[1.5%] md:py-[3%] bg-cover flex items-center justify-items-start lg:mt-[5%] ">
        
        {/* Form */}

        <div className="4k:w-[37.5%] sm:w-[40%] h-full relative z-[1] 4k:ml-[12.5%] sm:ml-[10%] ml-[2.5%]">

          <form
            onSubmit={handleSubmit}
            className="bg-white mx-auto rounded-[15px] shadow-xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-400 to-blue-400 mb4:px-6 mb4:py-4 px-3 py-2 pb-0 lg:pb-2">
              <h2 className="text-white text-sm font-bold">Đăng ký tư vấn miễn phí</h2>
              <p className="text-white text-sm xl:block lg:hidden sm:block hidden">
                Đặt hẹn ngay để nhận tư vấn và chúng tôi sẽ xếp lịch khám kịp thời!
              </p>

            </div>
            <div className="lg:hidden  mb4:p-2 p-1.5 flex items-center justify-center bg-white" onClick={handleOpenModal}>
              <div className="bg-gradient-to-r rounded-full p-[2px] from-green-400 to-blue-400">
                <button
                  type="submit"
                  className=" bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 text-[14px] font-semibold mb4:py-2 mb4:px-6 px-3 py-1 rounded-full hover:opacity-90 transition-all"
                >
                  <h2 className="bg-gradient-to-r text-[12px] from-green-400 to-blue-400 text-transparent bg-clip-text hover:text-white">GỬI YÊU CẦU</h2>
                </button></div>
            </div>


            {/* Inputs >lg*/}
            <div className="px-[3%] lg:block hidden py-[3%]">
              <div className="grid mt-[1%] sm:grid-cols-2 gap-4">
                <div>
                  <div>
                    {/* <label className="text-sm text-gray-600 ">Họ và tên*</label> */}
                    <input
                      type="text"
                      name="name"
                      placeholder="Họ và tên*"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded 2xl:px-3 2xl:py-2 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    {/* <label className="text-sm text-gray-600">E-mail</label> */}
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border mt-[15px] border-gray-300 rounded 2xl:px-3 2xl:py-2 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                  </div>
                </div>
                <div className="">
                  {/* <label className="text-sm text-gray-600">Nhập nội dung</label> */}
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Nhập nội dung"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 h-full rounded 2xl:px-3 2xl:py-2 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>


              <div className="grid sm:grid-cols-2 gap-4 mt-[15px]">
                <div>
                  {/* <label className="text-sm text-gray-600">Số điện thoại*</label> */}
                  <input
                    type="number"
                    name="phone"
                    placeholder="Số điện thoại*"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded 2xl:px-3 2xl:py-2 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>
                <div className="flex items-center  gap-2 mt-3 sm:mt-0">
                  <input
                    type="checkbox"
                    name="isHuman"
                    checked={form.isHuman}
                    onChange={handleChange}
                    className="p-1"
                    required
                  />
                  <span className="text-sm">Tôi không phải người máy </span>
                  {/* Bạn có thể tích hợp reCAPTCHA tại đây nếu muốn */}<img src={Robot} alt="robot" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-[15px] items-center">
                <div className="relative">
                  {/* <label className="text-sm text-gray-600">Ngày đặt</label> */}
                  <input
                    type="text"
                    ref={dateInputRef}
                    onFocus={(e) => (e.target.type = 'date')}
                    name="date"
                    placeholder="Ngày đặt"
                    value={form.date}

                    onChange={handleChange}
                    className="w-full border left-0 border-gray-300 rounded 2xl:px-3 2xl:py-2 px-2 z-0 py-1.5 appearance-none"
                  />
                  <button
                    type="button"
                    onClick={handleDateIconClick}
                    className="absolute z-[1] cursor-pointer right-[2%] translate-y-1/3 text-gray-500 hover:text-blue-500"
                  >
                    {/* Icon lịch tùy chỉnh */}
                    <img src={Lich} alt="" />
                  </button>
                </div>
                <div >
                  <button
                    type="submit"
                    className="bg-gradient-to-r w-full cursor-pointer from-green-400 to-blue-400 text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-all"
                  >
                    GỬI YÊU CẦU
                  </button>
                </div>
              </div>

              {/* Submit */}

            </div>
          </form>
        </div>
      </div>
 {/* Inputs <lg*/}
      {/* Modal */}
      {openModal && (
        <>
          <div className="lg:hidden fixed inset-0 z-[4]  ease-in-out flex items-center justify-center">
            {/* Overlay nền */}
            <div
              onClick={close}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            ></div>

            {/* Modal content */}
            <div className={`relative bg-white rounded-[15px] shadow-2xl sm:w-[80%] w-[90%] mx-4 transform transition-all
                 duration-300 ease-out scale-100 ${openModal == false ? 'animate-[fadeOut_0.3s_ease-in]' : 'animate-[scaleIn_0.3s_ease-out]'}`}>
              <button
                onClick={close}
                className="absolute -top-[15px] z-[1] -right-[15px] w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg transition-all duration-200 hover:scale-110"
              >
                ×
              </button>
              <form
                onSubmit={handleSubmit} 
                className="bg-white mx-auto rounded-[15px] w-full h-full shadow-xl overflow-hidden border border-gray-200"
              >
                {/* Header */}
                <div className="bg-gradient-to-r relative from-green-400 to-blue-400 px-6 py-4">

                  <h2 className="text-white text-lg font-bold">Đăng ký tư vấn miễn phí</h2>
                  <p className="text-white text-sm xl:block lg:hidden block">
                    Đặt hẹn ngay để nhận tư vấn và chúng tôi sẽ xếp lịch khám kịp thời!
                  </p>
                </div>



               
                <div className="px-[3%] block lg:hidden py-[3%]">
                  <div className="grid mt-[1%] sm:grid-cols-2 gap-4">
                    <div>
                      <div>
                        {/* <label className="text-sm text-gray-600 ">Họ và tên*</label> */}
                        <input
                          type="text"
                          name="name"
                          placeholder="Họ và tên*"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded 2xl:px-3 2xl:py-2 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                          required
                        />
                      </div>
                      <div>
                        {/* <label className="text-sm text-gray-600">E-mail</label> */}
                        <input
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full border mt-[15px] border-gray-300 rounded 2xl:px-3 2xl:py-2 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                          required
                        />
                      </div>
                    </div>
                    <div className="">
                      {/* <label className="text-sm text-gray-600">Nhập nội dung</label> */}
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Nhập nội dung"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 h-full rounded 2xl:px-3 2xl:py-2 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                  </div>


                  <div className="grid sm:grid-cols-2 gap-4 mt-[15px]">
                    <div>
                      {/* <label className="text-sm text-gray-600">Số điện thoại*</label> */}
                      <input
                        type="number"
                        name="phone"
                        placeholder="Số điện thoại*"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded 2xl:px-3 2xl:py-2 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required
                      />
                    </div>
                    <div className="flex items-center  gap-2 mt-3 sm:mt-0">
                      <input
                        type="checkbox"
                        name="isHuman"
                        checked={form.isHuman}
                        onChange={handleChange}
                        className="p-1"
                        required
                      />
                      <span className="text-sm">Tôi không phải người máy </span>
                      {/* Bạn có thể tích hợp reCAPTCHA tại đây nếu muốn */}<img src={Robot} alt="robot" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-[15px] items-center">
                    <div className="relative">
                      {/* <label className="text-sm text-gray-600">Ngày đặt</label> */}
                      <input
                        type="text"
                        ref={dateInputRef}
                        onFocus={(e) => (e.target.type = 'date')}
                        name="date"
                        placeholder="Ngày đặt"
                        value={form.date}

                        onChange={handleChange}
                        className="w-full border left-0 border-gray-300 rounded 2xl:px-3 2xl:py-2 px-2 z-0 py-1.5 appearance-none"
                      />
                      <button
                        type="button"
                        onClick={handleDateIconClick}
                        className="absolute z-[1] cursor-pointer right-[2%] translate-y-1/3 text-gray-500 hover:text-blue-500"
                      >
                        {/* Icon lịch tùy chỉnh */}
                        <img src={Lich} alt="" />
                      </button>
                    </div>
                    <div >
                      <button
                        type="submit"
                        className="bg-gradient-to-r w-full from-green-400 to-blue-400 text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-all"
                      >
                        GỬI YÊU CẦU
                      </button>
                    </div>
                  </div>

                  {/* Submit */}

                </div>
              </form>

            </div>
          </div>
        </>
      )}

      {/* Submit */}
    </>
  )
}
export default Section9;