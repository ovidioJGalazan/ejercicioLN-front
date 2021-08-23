import React, { CSSProperties } from "react";

import "../../scss/Button.scss"

type ButtonShape = "round" | "semi-round";
type ButtonFill = "outline" | "solid";
type ButtonSize = "small" | "medium" | "large";

interface Props {
    shape: ButtonShape;
    fill?: ButtonFill;
    size?: ButtonSize;
    children: string | JSX.Element;
    style?: CSSProperties;
    onClick?: React.MouseEventHandler;
}

const Button = ({shape, fill, size, children, style, onClick}: Props) => {
    return(
        <>
        <button className={`boton ${shape} ${fill || "outline"} ${size || "medium"}`} style={style} onClick={onClick}>
        <p>{children}</p>
        </button>
        </>
    )
}

export default Button;