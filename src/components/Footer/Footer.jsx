import './Footer.css'

import kikin_logo from "../../assets/images/kikin_logo_1.png"

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img src={kikin_logo} alt="" />
        <div className="footer_left_infos">
          <p>Get in touch</p>
          <p>Seandjissou@gmail.com</p>
        </div>
      </div>
      <div className="footer_right">
        <a href="">linkedIn</a>
        <a href="">X</a>
      </div>
    </div>
  )
}

export default Footer