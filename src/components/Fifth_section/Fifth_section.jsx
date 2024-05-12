import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

//styles
import "./Fifth_section.css";

//images
import sticker_1 from "../../assets/images/sticker_1.png";
import sticker_2 from "../../assets/images/sticker_2.png";
import sticker_3 from "../../assets/images/sticker_3.png";
import sticker_4 from "../../assets/images/sticker_4.png";
import sticker_5 from "../../assets/images/sticker_5.png";
import sticker_6 from "../../assets/images/sticker_10.png";
import sticker_7 from "../../assets/images/sticker_11.png";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Fifth_section() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth_section",
        toggleActions: "play pause resume reset",
        scrub : true
      }
    });

    tl.fromTo(
      ".sticker",
      {
        scale : 0,
        opacity : 0
      },
      {
        scale : 1,
        opacity : 1,
      }
    );
  }, []);
  return (
    <div className="fifth_section">
      <img className="sticker" src={sticker_1} alt="" />
      <img className="sticker" src={sticker_2} alt="" />
      <img className="sticker" src={sticker_3} alt="" />
      <img className="sticker" src={sticker_4} alt="" />
      <img className="sticker" src={sticker_5} alt="" />
      <img className="sticker" src={sticker_6} alt="" />
      <img className="sticker" src={sticker_7} alt="" />
      <h1>
        DO IT FOR THE PLANET. DO IT FOR YOUR BUSINESS. THE BETTER THE ESG SCORE
        GETS, THE BIGGER THE DISCOUNTS
      </h1>
    </div>
  );
}

export default Fifth_section;
