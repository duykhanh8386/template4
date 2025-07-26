import Header from "../Content/Header";
import Section1 from "../Content/Section1";
import Section2 from "../Content/Section2";
import Section3 from "../Content/Section3";
import Section4 from "../Content/Section4";
import Section5 from "../Content/Section5";
import Section6 from "../Content/Section6";
import Section7 from "../Content/Section7";

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
    </div>
    
    </>
  )
}
export default Layout;