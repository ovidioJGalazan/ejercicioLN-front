import {useState, useEffect, useRef} from "react";

import Slide from "./Slide"

import "../../scss/HeroSlider.scss"


interface Props {
  slides: string[];
  timeout?: number;
}
const HeroSlider = ({slides, timeout = 4000}: Props) => {

    const [active, setActive] = useState(0);
    const interval = useRef<any>(null);
  
    const nextSlide = () => {
      removeInterval();
      if (active >= slides.length - 1) setActive(0);
      else setActive((prev) => prev + 1);
      initInterval();
    };
  
    const prevSlide = () => {
      removeInterval();
      if (active === 0) setActive(slides.length - 1);
      else setActive((prev) => prev - 1);
      initInterval();
    };
  
    const initInterval = () => {
      interval.current = setInterval(() => {
        if (active >= slides.length - 1) setActive(0);
        else setActive((prev) => prev + 1);
      }, timeout);
    };
  
    const removeInterval = () => {
      interval.current && clearInterval(interval.current);
    };
  
    useEffect(() => {
      initInterval();
      return () => removeInterval();
    }, []); //eslint-disable-line

    return(
        <>
            <section className="slider">
                {slides.map( (slide: any, index: number) => {
                    return (<Slide key={index} imgSrc={slide} active={index === active}/>);
                })}
                <button className="arrow-btn" onClick={prevSlide}>&#10094;</button>
                <button className="arrow-btn" onClick={nextSlide} style={{ right: "16px", borderRadius: "3px 0 0 3px" }}>&#10095;</button>
            </section>
            {/* <div className="navigation-manual">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
            </div> */}
        </>
    )
}

export default HeroSlider;