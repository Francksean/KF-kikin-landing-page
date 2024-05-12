import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//images
import sticker1 from "../../assets/images/sticker_12.png";
import sticker2 from "../../assets/images/sticker_8.png";
import sticker3 from "../../assets/images/sticker_9.png";
import sticker4 from "../../assets/images/sticker_13.png";

//styles
import "./Second_section.css";
import { useEffect } from "react";

function Second_section() {
  useEffect(() => {
    if (screen.width <= 1024) {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text_scaled",
          start:"5% 80%",
          toggleActions: "play pause resume reset",
          scrub: true,
        },
      });

      tl.fromTo(
        ".text_scaled",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1 }
      );

    } else {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text_scaled",
          toggleActions: "play pause resume reset",
          scrub: true,
        },
      });

      tl.fromTo(
        ".text_scaled",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1 }
      );

    }

   
  }, []);
  return (
    <div className="second_section">
      <img src={sticker1} alt="image_sticker" className="sticker1" />
      <img src={sticker2} alt="image_sticker" className="sticker2" />
      <img src={sticker3} alt="image_sticker" className="sticker3" />
      <img src={sticker4} alt="image_sticker" className="sticker4" />
      <div className="section2_content">
        <h1 className="text_scaled">
          GOOD FOR THE <br />
          PLANET. AND <br />
          YOUR BUSINESS.
        </h1>
        <button>GET FUNDING</button>
      </div>
    </div>
  );
}

export default Second_section;
