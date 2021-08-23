import React, { CSSProperties } from "react";

import { Button } from "../Button"
import {Carousel, CarouselData} from "../Carousel"
import {CardType} from "../Card"
import "../../scss/SectionSlider.scss";

interface Props {
    title: string;
    subtitle?: string;
    cardType: CardType;
    carouselData: CarouselData[];
    style?: CSSProperties;
}

const SectionSlider = ({title, subtitle, cardType, carouselData, style}: Props) => {
    return(
        <section className="section-slider" style={style}>
            <div className="headline">
                <div className="titles">
                    <h2 className="title">{title}</h2>
                    { subtitle && (
                        <p className="subtitle">{subtitle}</p>
                    )
                    }
                </div>
                <Button shape="round" style={{maxHeight: "42px"}}>Todos los beneficios</Button>
            </div>
            <Carousel cardType={cardType} carouselData={carouselData} />
        </section>
    )
}

export default SectionSlider;