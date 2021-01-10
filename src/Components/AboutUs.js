import React from 'react'
import styled from 'styled-components'
import useWindowDimensions from '../Hooks/UseWindowDimension'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import people from '../resources/people.png'
import lines from '../resources/lines.svg'

const LinedDiv = styled.div`
    background-image: url(${lines});
    background-repeat: no-repeat;
    background-position-x: -150px; 
`

function AboutUs() {
    return (
        <div className="container-fluid mt-5">
            <div className="row interchange justify-content-start align-items-center">
                <div className="col-12 col-lg-6 p-0 hover-img-container">
                    <h1 className="druk hover-text">
                        LA COMIDA ES <br/>
                        <span className="primary">NUESTRO ARTE</span>
                    </h1>
                    <div className="gradient">
                        <img className="people" src={people} alt=""/>
                    </div>
                </div>
                <LinedDiv className="lined col-12 col-lg-5 p-4 d-flex h-100 flex-column justify-content-center align-items-start">
                    <h3 className="syne w-70 about-title pt-4">¿Quien es Foodies?</h3>
                    <p className="text-gray mt-3 mb-3 w-95">Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt 
                        nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem.
                        Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco.
                    </p>
                    <a className="find-us-about syne pt-4 mt-5 d-flex align-items-center" href="#">Contactanos 
                        <FontAwesomeIcon className="ms-2" icon={faArrowRight}></FontAwesomeIcon>
                    </a>
                </LinedDiv>
            </div>
        </div>
    )
}

export default AboutUs