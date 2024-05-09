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

  useEffect(()=>{

    const tl = gsap.timeline()

    tl.fromTo('.titleTop',{ y: 100, opacity: 0}, { y:0, opacity:1, duration: 1})
    .fromTo('.headButton',{ y:100, opacity: 0},{ y: 0, opacity: 1, duration: 1})

  },[])

  return (
    <div className="head_page">
      {
        screen.width >= 1024 ? <NavbarDesktop/> : <NavbarMobile/>
      }
      <div className="head_content">
        <h1 className='titleTop'>FINANCING<br/><span>THE FUTURE</span></h1>
      </div>      
      <div className="header_bottom">
        <button className='headButton'>GET FUNDING</button>
      </div>
    </div>
  )
}

export default HeadPage

function NavbarDesktop() {

  const logoRef = useRef(null)

  useEffect(()=>{
    const logoElem = logoRef.current

    const tl = gsap.timeline()

    tl.fromTo(logoElem, { x : -150, opacity : 0}, { x: 0, opacity: 1})
    .fromTo('.navButton', 
      {y : 50, opacity: 0,},
      { y: 0, opacity: 1, duration: 2, 
        stagger:{
          each : 0.5,
        }
      })
    .fromTo('.navbar_item',
      { y: 50, opacity : 0,},
      { y: 0, opacity: 1,ease:'expo',duration: 2,
        stagger:{
          each: 0.3,
        }
      }, '<')

  },[])

  return(
    <div className="navbar">
      <div ref={logoRef} className="navbar_section navbar_right">
        <img src={kikin_logo_2} alt="logo_texte_kikin" />
      </div>
      <div className="navbar_section navbar_middle">
        <p className='navbar_item'>HOW IT WORKS</p>
        <p className='navbar_item'>PRICING</p>
        <p className='navbar_item'>BLOG</p>
      </div>
      <div className="navbar_section navbar_left">
        <button className='navButton'>LOG IN</button>
        <button className='navButton'>GET FUNDING</button>
      </div>
    </div>
  )
}

function NavbarMobile() {
  const [ menuVisible, setMenuVisible ] = useState(false)
  const [ className, setClassName ] = useState("")


  useEffect(()=>{
    if(menuVisible){

      setClassName("") 
      
    }else{
      
      setClassName("navbar_mobile_menu_container_visble")
      const tl = gsap.timeline()

      tl.fromTo('.navbarItem',
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1,
          delay:0.4,
          stagger:{
            each: 0.1
          }
        },
      )

    }
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
        <p className='navbarItem'>HOW IT WORKS</p>
        <p className='navbarItem'>PRICING</p>
        <p className='navbarItem'>BLOG</p>
        <p className='navbarItem'>LOG IN</p>
        <p className='navbarItem'>GET FUNDING</p>
      </div>
    </div>
  )
}

