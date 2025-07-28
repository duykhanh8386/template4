import Footer from "../Content/Footer";
import Header from "../Content/Header";
import Section1 from "../Content/Section1";
import Section2 from "../Content/Section2";
import Section3 from "../Content/Section3";
import Section4 from "../Content/Section4";
import Section5 from "../Content/Section5";
import Section6 from "../Content/Section6";
import Section7 from "../Content/Section7";
import Section8 from "../Content/Section8";
import Section9 from "../Content/Section9";

function Layout(){
  return(
    <>
    
    <div className="w-full overflow-hidden font-latoV">
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Footer/>
    </div>
    
    </>
  )
}
export default Layout;