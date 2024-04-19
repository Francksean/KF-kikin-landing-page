//styles
import './Third_section.css'

//images
import pt_img_1 from "../../assets/images/pt_img_1.png"
import pt_img_2 from "../../assets/images/pt_img_2.png"
import pt_img_3 from "../../assets/images/pt_img_3.png"


function Third_section() {
  return (
    <div className="third_section">
      <Third_section_unit src={pt_img_1} nbr={"01"} text={"GROW WITH THE FLOW."} />
      <Third_section_unit src={pt_img_2} nbr={"02"} text={"ADAPTABLE FUNDING. ENDLESS POSSIBILITES."} />
      <Third_section_unit src={pt_img_3} nbr={"03"} text={"FAST FUNDS FULL EQUITY."} />
    </div>
  )
}

export default Third_section

function Third_section_unit({ src, nbr, text }) {
  return(
    <div className="section_unit">
      <div className="section_unit_left">
        <h3>{nbr}</h3>
        <h1>{text}</h1>
      </div>
      <img src={src} alt={`image ${nbr}`} />
    </div>
  )
}