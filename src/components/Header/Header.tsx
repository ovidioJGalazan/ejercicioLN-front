// import {useEffect} from "react";

import {Button} from "../Button"

import "../../scss/Header.scss"

interface Props {
    transparent?: boolean;
}

const Header = ({transparent = false}: Props) => {

    return(
        <header className={`header ${transparent === true ? "transparent" : ""}`} >
            <div className="navbar-left">
            <i className="fas fa-bars icon"/>
                <img src="./assets/netflix-logo.png" alt="LN Logo" className="logo"/>
            </div>
            <div className="navbar-middle">
                <input type="text" placeholder="Busca un comercio..." className="search-left"/>
                <input type="text" placeholder="Ingresa una ubicación..." className="search-right"/>
                <Button shape="round" size="small" fill="solid"><i className="fas fa-search"></i></Button>
            </div>
            <div className="navbar-right">
                <i className="far fa-bell icon" />
                <i className="far fa-heart icon" />
                <i className="far fa-laugh-beam icon" id="smile" />
            </div>
        </header>
    )
}

export default Header;