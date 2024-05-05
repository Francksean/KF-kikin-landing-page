import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

//images
import kikin_logo_2 from "../../assets/images/kikin_logo_2.png"
import menu_icon from "../../assets/images/menu_icon.png"

//styles
import "./HeadPage.css"

//fonts
import "../../assets/fonts/SF-Pro/SF-Pro-Display-Regular.otf"


function HeadPage() {

  return (
    <div className="head_page">
      {
        screen.width >= 1024 ? <NavbarDesktop/> : <NavbarMobile/>
      }
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

function NavbarDesktop() {

  const navbarItemRef = useRef(null)
  const logoRef = useRef(null)
  const navButtonRef = useRef(null)

  useEffect(()=>{

    const navbarItemElem = navbarItemRef.current
    const logoElem = logoRef.current
    const navButtonElem = navButtonRef.current

    const tl = gsap.timeline()

    tl.

  },[])

  return(
    <div className="navbar">
      <div className="navbar_section navbar_right">
        <img src={kikin_logo_2} alt="logo_texte_kikin" />
      </div>
      <div className="navbar_section navbar_middle">
        <p ref={navbarItemRef}>HOW IT WORKS</p>
        <p ref={navbarItemRef}>PRICING</p>
        <p ref={navbarItemRef}>BLOG</p>
      </div>
      <div className="navbar_section navbar_left">
        <button>LOG IN</button>
        <button>GET FUNDING</button>
      </div>
    </div>
  )
}

function NavbarMobile() {
  const [ menuVisible, setMenuVisible ] = useState(false)
  const [ className, setClassName ] = useState("")


  useEffect(()=>{
    menuVisible ? setClassName("") : setClassName("navbar_mobile_menu_container_visble")
  },[menuVisible])

  return(
    <div className="navbar_mobile">
      <div className="navbar_mobile_top">
        <div className="navbar_mobile_right">
          <img src={kikin_logo_2} alt="logo_texte_kikin" />
        </div>
        <button onClick={()=>{setMenuVisible(!menuVisible)}}>
          <img src={menu_icon} alt="" />
        </button>
      </div>
      <div className={`navbar_mobile_menu_container ${className}`}>
        <p>HOW IT WORKS</p>
        <p>PRICING</p>
        <p>BLOG</p>
        <p>LOG IN</p>
        <p>GET FUNDING</p>
      </div>
    </div>
  )
}

