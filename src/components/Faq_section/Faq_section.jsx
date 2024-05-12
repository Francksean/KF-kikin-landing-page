//utilities
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useState, useEffect } from "react";

//styles
import "./Faq_section.css";

import golf_img from "../../assets/images/image_golf.png";
import sticker1 from "../../assets/images/sticker_6.png";
import sticker2 from "../../assets/images/sticker_7.png";

gsap.registerPlugin(ScrollTrigger);

function Faq_section() {
  useEffect(() => {
    if (innerWidth >= 800) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text_container",
          toggleActions: "play pause resume reset",
        },
      });

      tl
      .fromTo(".img_slide", { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".text_slide_item",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, stagger: { each: 0.5 } }
      );
    }
  }, []);

  return (
    <div className="faq_section">
      <div className="faq_section_top">
        <div className="img_container">
          <img className="img_slide" src={golf_img} alt="" />
          <img src={sticker1} alt="" />
          <img src={sticker2} alt="" />
        </div>
        <div className="text_container">
          <h1 className="text_slide_item">DOING GOOD, TOGETHER.</h1>
          <p className="text_slide_item">
            “Kikin has given us the flexibility to extend invoice payments for
            new product development for up to 6 months. This has enabled us to
            start selling our products before we have to pay our suppliers which
            is a great for our cash flow management. It's great to work with a
            partner that shares our values”.
          </p>
          <h3 className="text_slide_item">MANORS</h3>
        </div>
      </div>
      <div className="faq_section_bottom">
        <h1 className="main_faq_title">FAQS</h1>
        <div className="question_container">
          <Question_item
            question={"HOW QUICKLY CAN I ACCESS THE FUNDS?"}
            response={
              "Once you've completed a brief questionnaire about your business and connected your financial accounts, you'll have immediate access to a portion of your funds. The full amount will be available within 72 hours after our team manually checks your company details."
            }
          />
          <Question_item
            question={"WHAT CAN I USE THE FUNDING FOR?"}
            response={
              "We offer financing for your supplier invoices. Simply upload your supplier's invoice to our system, and we'll handle the full payment to them. For a list of goods we don't cover, please refer to our Terms of Service: https://franck-djissou.vercel.app/."
            }
          />
          <Question_item
            question={"HOW DO I KNOW THAT MY COMPANY IS A GOOD MATCH?"}
            response={
              "We love supporting UK-based businesses that need to pay their suppliers, whether they're local or abroad. Just share your financial history with us so we can figure out your credit line. Additionally, if you’re committed to sustainability, we appreciate that and offer special discounts on our fees."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Faq_section;

function Question_item({ question, response }) {
  const [isResponseVisible, setIsResponseVisible] = useState(false);
  const [resClass, setResClass] = useState("");
  const [resBtnClass, setResBtnClass] = useState("");

  useEffect(() => {
    if (isResponseVisible) {
      setResClass("response_visible");
      setResBtnClass("btn_rotate");
    } else {
      setResClass("");
      setResBtnClass("");
    }
  }, [isResponseVisible]);
  return (
    <div className="question_item">
      <div className="infos_container">
        <h1>{question}</h1>
        <p className={`${resClass}`}>{response}</p>
      </div>
      <button
        className={`${resBtnClass}`}
        onClick={() => setIsResponseVisible(!isResponseVisible)}
      >
        +
      </button>
    </div>
  );
}
