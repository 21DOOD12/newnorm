import React, {useEffect} from "react";
import "./About.css";
import "./modal-video.min.css";
import picTwo from "./qr.png";
import picOne from "./qr.png";
import Aos from "aos";
import "aos/dist/aos.css";


export default function About() {
  
  const [isOpen, setOpen] = React.useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[]);
  return (
    <div  data-aos="fade-up" className="about">
      
      <img src={picOne} alt="pic" className="about__pic-one bounce-2" />
      <img src={picTwo} alt="pic" className="about__pic-two bounce-2" />
      <div className="about_wrapper">
        <div className="about_title">Автоматизируйте свой бизнес</div>
        <div className="about_desc">
          Компания «Новая Норма» автоматизирует бизнес-процессы, а так же
          предоставляет решения, которые помогают бизнесу оптимизировать
          затраты, увеличивать выручку и формировать своевременные и лучшие
          предложения для покупателей. Наша миссия сделать работу удобнее и
          прозрачнее.{" "}
        </div>
        <a target='_blank' href="https://www.youtube.com/channel/UCCV0dJ9NpQ2C1X9lLY8fspw">
        <div onClick={() => setOpen(true)} className="about_btn">
          Youtube
        </div>
        </a>
      </div>
     
    </div>
  );
}
