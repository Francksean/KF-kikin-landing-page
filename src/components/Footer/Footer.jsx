import './Footer.css'
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import kikin_logo from "../../assets/images/kikin_logo_1.png"
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Footer() {

  useEffect(()=>{

    const tl = gsap.timeline({
      scrollTrigger :  {
        trigger : '.footer',
        toggleActions: "play pause resume reset",
      }
    })

    tl.fromTo('.footer_item_slide', { y : -50, opacity : 0 }, { y : 0, opacity : 1, stagger : { each : 0.3 }})

  }, [])

  return (
    <div className="footer">
      <div className="footer_left">
        <img className='footer_item_slide' src={kikin_logo} alt="" />
        <div className="footer_left_infos">
          <p className='footer_item_slide'>Get in touch</p>
          <p className='footer_item_slide'>Seandjissou@gmail.com</p>
        </div>
      </div>
      <div className="footer_right">
        <a className='footer_item_slide' href="">linkedIn</a>
        <a className='footer_item_slide' href="">X</a>
      </div>
    </div>
  )
}

export default Footer