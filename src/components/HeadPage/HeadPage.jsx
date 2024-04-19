import kikin_logo_2 from "../../assets/images/kikin_logo_2.png"

//styles
import "./HeadPage.css"

//fonts
import "../../assets/fonts/SF-Pro/SF-Pro-Display-Regular.otf"


function HeadPage() {
  return (
    <div className="head_page">
      <Navbar/>
      <div className="head_content">
        <h1>FINANCING<br/><span>THE FUTURE</span></h1>
      </div>      
      <div className="header_bottom">
        <button>GET FUNDING</button>
      </div>
    </div>
  )
}

export default HeadPage

function Navbar() {
  return(
    <div className="navbar">
      <div className="navbar_section navbar_right">
        <img src={kikin_logo_2} alt="logo_texte_kikin" />
      </div>
      <div className="navbar_section navbar_middle">
        <p>HOW IT WORKS</p>
        <p>PRICING</p>
        <p>BLOG</p>
      </div>
      <div className="navbar_section navbar_left">
        <button>LOG IN</button>
        <button>GET FUNDING</button>
      </div>
    </div>
  )
}

