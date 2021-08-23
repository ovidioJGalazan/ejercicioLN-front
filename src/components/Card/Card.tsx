import {Button} from "../Button";

import "../../scss/Card.scss"
import { DataCuentas } from "../../pages/Home";

export type CardType = "beneficio" | "codigo";

interface Props{
    type: CardType;
    dataCuenta: DataCuentas,
    children?: "string" | JSX.Element;
}

const Card = ({type, dataCuenta, children}: Props) => {
    
    const {name, image, benefits, nearestLocation, crmid} = dataCuenta;
    return(
        <>
        <div className="card">
            <a href={`https://club.lanacion.com.ar/${crmid}`} rel="external noreferrer">
                <picture>
                    <img src={image} alt="" className="card-img"/>
                </picture>
            </a>
            <div className="description">
                <a href={`https://club.lanacion.com.ar/${crmid}`} rel="external noreferrer">
                    <h3 className="name">{name}</h3>
                </a>
                {type === "beneficio" ? (
                    <>
                        <div className="discounts">
                            {
                                benefits?.black && (
                                    <span className="discount" id="black">{benefits?.black}%</span>
                                )
                            }
                            {
                                benefits?.premium && (
                                    <span className="discount" id="premium">{benefits?.premium}%</span>
                                )
                            }
                            {
                                benefits?.classic && (
                                    <span className="discount" id="classic">{benefits?.classic}%</span>
                                )
                            }
                        </div>
                        <div className="distance">
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="distance-text">A <strong>{nearestLocation} {nearestLocation && nearestLocation < 1000 ? "m" : "Km"}</strong> 
                                </span>
                            </span>
                        </div>
                    </>
                ): (
                    <span className="btn-code">
                        <a href={`https://club.lanacion.com.ar/${crmid}`} target="_blank" rel="external noreferrer">
                            <Button shape="semi-round" fill="outline" size="small">Quiero mi código</Button>   
                        </a>
                    </span>
                ) }
            </div>
        </div>
        </>
    )
}

export default Card;