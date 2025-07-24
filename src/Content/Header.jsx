import Logo from "../heplers/img/Header/Logo.png";
import Phone from "../heplers/img/Header/Phone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function Header() {
  const dataMenu =[
    {
      id:1,
      menu:"Giới thiệu"
    },
    {
      id:2,
      menu:"Đối tượng khách hàng"
    },
    {
      id:3,
      menu:"Quy trình"
    },
    {
      id:4,
      menu:"Bảng giá"
    },
    {
      id:5,
      menu:"Cảm nhận của khách hàng"
    },
    {
      id:6,
      menu:"Đội ngũ bác sĩ"
    },
    {
      id:7,
      menu:"Hình ảnh và video"
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating,setIsAnimating]=useState(false);
  const openMenu=()=>{
    setIsOpen(true);
    setTimeout(()=>setIsAnimating(true));
  }
  const closeMenu=()=>{
    setIsAnimating(false);
    setTimeout(()=>setIsOpen(false),100);
  }
   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <div className={`w-full  fixed top-0 left-0 right-0 z-3 pb-3 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-md" : "bg-transparent"
  }`}>
      <div className=" flex items-center 4k:max-w-[75%] sm:max-w-[80%] max-w-[95%] mx-auto lg1:justify-around justify-between h-[40px] mt-5">
        <div className="lg:basis-[15%] sm:basis-[30%] basis-[50%]">
          <img src={Logo} alt="Logo" className="w-[80%]" />
        </div>
       <div className="basis-[85%] lg1:flex hidden justify-between items-center lg:text-[12px] lg1:text-[13px] xl:text-[14px] 2xl:text-[16px] 4k:text-[18px]">
        {dataMenu.map((item)=>(
          
            <div className=" font-bold hover:bg-gradient-to-r hover:from-[#3EED8B] transition-all duration-400 ease-in-out hover:to-[#0A9949] hover:bg-clip-text hover:text-transparent flex items-center relative group">
              <a href="#" key={item.id}>{item.menu}
            <span className="block w-4 h-[3px] absolute  group-hover:bg-gradient-to-br transition-all duration-400 ease-in-out group-hover:from-[#3EED8B] group-hover:to-[#0A9949] opacity-0 group-hover:opacity-100 rounded-md mt-2 left-1/2 translate-x-[-50%]"></span>
            </a></div>
          
        ))}
          <a href="tel:19001806"><div className="bg_button flex gap-2 !font-bold items-center justify-between lg:px-2.5 lg:py-1.5 px-1.5 py-1"><img src={Phone} alt="Phone" className="bg-white lg:p-2 p-0.5  rounded-full"/>Gọi 1900 1806</div></a>
       </div>
       <div className="lg1:hidden mr-4 flex relative"><FontAwesomeIcon icon={faBars} onClick={openMenu} />
                   {isOpen && (
                     <div className="fixed inset-0 z-50">
                       {/* Backdrop: nền mờ */}
                       <div
                         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                         onClick={closeMenu}
                       />
       
                       {/* Slide panel */}
                       <div
                         className={`absolute top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out w-4/5 
               ${isAnimating ? 'translate-x-0' : 'translate-x-full'}`}
                       >
                         {/* Header */}
                         <div className="flex justify-between items-center p-4 border-b">
                           <img src={Logo} alt="Logo" className="h-10" />
                           <button onClick={closeMenu} className="text-xl font-bold text-gray-600"><FontAwesomeIcon icon={faX}/></button>
                         </div>
       
                         {/* Menu items */}
                         <div className="px-4 pt-4">
                           {dataMenu.map(item => (
                             <div key={item.id} className="py-3  border-b border-gray-300 text-gray-800 hover:border-green-400 hover:text-green-400">
                               <a href="#" title={item.menu}>{item.menu}</a>
                             </div>
                           ))}
                         </div>
                       </div>
                     </div>
                   )}</div>
      </div>
    </div>
    </>
  )
}
export default Header;