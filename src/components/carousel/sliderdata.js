import { Button, CardActions } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";


function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
            
          <img className="slide-image" src={slide.urls} alt="" />
        
         
            

          <h2 className="slide-title">{slide.title}</h2>
          
          {/* <h3 className="slide-text">{slide.description}</h3> */}
          

    
    
        </div>
      ))}
    </section>
  );
}

export default SliderContent;