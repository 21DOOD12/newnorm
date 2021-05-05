import React, { useEffect } from "react";
import "./projects.css";
import expologo from "./pngegg.png";
import lora from "./l1.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    // Общий блок проекты
    <div className="projects">
      {/* Проект 1 'Expo'*/}
      <div className="projects__wrapper">
        <div data-aos="fade-down" className="projects__content">
          <div className="projects__content-item">
            <a target="_blank" href="http://expokyrgyz.com/">
              <div className="projects__content-items">
                <img src={expologo} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Проект 2 'lora kg' */}

      <div className="projects__wrapper">
        <div data-aos="fade-down" className="projects__content">
          <div className="projects__content-item">
            <a target="_blank" href="http://lora.kg/">
              <div className="projects__content-items">
                <img src={lora} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
