import React from 'react'
import useWindowDimensions from '../Hooks/UseWindowDimension'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import hero_hamb from '../resources/hero_hamburger_1.png'

function BigHeroDark() {
    var { width } = useWindowDimensions()

    return (
        <div className="container-fluid">
            <div className={"row flex-wrap mt-5 pt-4 " + (width < 768 ? "flex-column-reverse" : "flex-row big-hero")}>
                <div className="col-12 col-md-6 ps-4 d-flex justify-content-center flex-column">
                
                    <h3 className="druk hero-title">
                        {
                            width < 768 || width > 1024 ? <p>Un nuevo <br/>sabor esta en <br/>
                            <span className="span-text">la ciudad</span></p> : 
                            <p>Un nuevo <br/>sabor esta<br/><span className="span-text">en la ciudad</span></p>
                        }
                    </h3>
                    <p className="hero-text pe-4 mb-4">
                        Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.
                    </p>
                    <a className="find-us mt-1 syne d-flex align-items-center" href="#">Encuentranos 
                        <FontAwesomeIcon className="ms-2" icon={faArrowRight}></FontAwesomeIcon>
                    </a>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img className="hero-img" src={hero_hamb} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default BigHeroDark