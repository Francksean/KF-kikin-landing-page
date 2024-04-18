//images 
import sticker1 from "../../assets/images/sticker_12.png"
import sticker2 from "../../assets/images/sticker_8.png"
import sticker3 from "../../assets/images/sticker_9.png"
import sticker4 from "../../assets/images/sticker_13.png"

//styles
import './Second_section.css'

function Second_section() {
  return (
    <div className="second_section">
      <img src={sticker1} alt="sticker1" />
      <img src={sticker2} alt="sticker2" />
      <img src={sticker3} alt="sticker3" />
      <img src={sticker4} alt="sticker4" />
      <div className="section2_content">
        <h1>
          GOOD FOR THE <br />
          PLANET. AND <br />
          YOUR BUSINESS.
        </h1>
        <button>GET FUNDING</button>
      </div>
    </div>
  )
}

export default Second_section