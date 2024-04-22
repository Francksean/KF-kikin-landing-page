//components
import HeadPage from "../components/HeadPage/HeadPage"
import Second_section from "../components/Second_section/Second_section"
import Third_section from "../components/Third_section/Third_section"
import Section_blue from "../components/Section_blue/Section_blue"
import Fifth_section from "../components/Fifth_section/Fifth_section"
import Faq_section from "../components/Faq_section/Faq_section"
import Footer from "../components/Footer/Footer"

//styles
import "./Landing.css"

function Landing() {
  return (
    <div className="Landing">
      {/* <HeadPage/>
      <Second_section/>
      <div className="divider"></div>
      <Third_section/> */}
      <Section_blue/>
      {/* <Fifth_section/>
      <Faq_section/>
      <Footer/> */}
    </div>
  )
}

export default Landing