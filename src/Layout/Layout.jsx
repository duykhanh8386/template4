import Header from "../Content/Header";
import Section1 from "../Content/Section1";
import Section2 from "../Content/Section2";
import Section3 from "../Content/Section3";

function Layout(){
  return(
    <>
    
    <div className="w-full overflow-hidden font-latoV">
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    </div>
    
    </>
  )
}
export default Layout;