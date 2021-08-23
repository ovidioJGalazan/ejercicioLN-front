import React, { CSSProperties } from "react";

import {Card} from "../Card";

import "../../scss/Carousel.scss";

import {CardType} from "../Card";

export type CarouselData = {
    name: string,
    image: string,
    nearestLocation?: number,
    crmid: string,
    benefits?: {
      black: number | null,
      premium: number | null,
      classic: number | null,
    }
};

interface Props {
    cardType: CardType;
    carouselData: CarouselData[];
    style?: CSSProperties;
}

const Carousel = ({cardType, style, carouselData}: Props) => {
    return(
        <div className="carousel" style={style}>
            {carouselData.map( (cardData, index) => {
                return(
                    <Card key={index} type={cardType} dataCuenta={cardData} />
                )
            })}
        </div>
    )
}

export default Carousel;