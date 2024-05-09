import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//styles
import "./Section_blue.css";

//images
// import main_img from '../../assets/images/wwf_img.png'

import icon1 from "../../assets/images/icon_1.png";
import icon2 from "../../assets/images/icon_2.png";
import icon3 from "../../assets/images/icon_3.png";

// import brand1 from '../../assets/images/brand_1.png'
// import brand2 from '../../assets/images/brand_2.png'
// import brand3 from '../../assets/images/brand_3.png'
// import brand4 from '../../assets/images/brand_4.png'

function Section_blue() {
  return (
    <div className="section_blue">
      <div className="section_top_interior">
        <div className="img_container">
          <h1>WHO WE FUND</h1>
        </div>
      </div>
      <div className="arr_item_container">
        <Arr_item src={icon1} text={"UK-BASED SMALL TO MID SIZED BUSINESSES"} />
        <Arr_item
          src={icon2}
          text={"WHO NEED TO PAY TO SUPPLIER AROUND THE WORLD"}
        />
        <Arr_item
          src={icon3}
          text={"WHO CAN DEMONSTRATE SUSTAINABILITY EFFROTS"}
        />
      </div>
      {/* <div className="brands_container">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
      </div> */}
    </div>
  );
}

export default Section_blue;

function Arr_item({ src, text }) {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".arr_item",
        toggleActions: "play pause resume reset",
      },
      defaults: {
        duration: 1.5,
        ease: "power1",
      },
    });

    tl.fromTo(
      ".arr_item",
      { x: "100vw" },
      { x: 0, stagger: { each: 0.1 } }
    ).fromTo(
      ".arr_sub_item",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: {
          each: 0.2,
        },
      }
    );
  }, []);

  return (
    <div className="arr_item">
      <img className="arr_sub_item" src={src} alt="" />
      <h2 className="arr_sub_item">{text}</h2>
    </div>
  );
}
