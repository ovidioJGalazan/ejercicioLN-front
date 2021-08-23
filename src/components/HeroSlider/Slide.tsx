import React from "react";

interface Props {
    imgSrc: string;
    active: boolean;
    rest?: any;
}

const Slide = ({imgSrc, active, ...rest}: Props) => {
    return(
        <>
        <div className={`slide ${active === true ? "active" : ""}`} {...rest}>
            <img src={imgSrc} alt="Slide" />
        </div>
        </>
    )
}

export default Slide;