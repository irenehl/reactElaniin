import React from 'react'

import appStore from '../resources/storeapple.png'
import playStore from '../resources/storegoogle.png'

function Footer() {
    return(
        <div className="container-fluid d-flex flex-wrap">
            <div className="col-12 col-md-6 d-md-flex justify-content-start align-items-center">
                <h1 className="text-gray druk text-center footer-title">
                    Foodies
                </h1>
            </div>
            <div className="col-12 col-md-6 storeContainer">
                <img src={appStore} alt="" className="store col-6"/>
                <img src={playStore} alt="" className="store col-6"/>
            </div>
            <hr className="primary separator col-12"/>
            <div className="col-12 col-md-4 col-lg-2 footer-link text-center">
                <a href="" className="text-gray roboto">Conoce nuestras sucursales</a>
            </div>
            <div className="col-12 col-md-4 col-lg-2 footer-link text-center">
                <a href="" className="text-gray roboto">Acerca de</a>
            </div>
            <div className="col-12 col-md-4 col-lg-2 footer-link text-center">
                <a href="" className="text-gray roboto">Conoce nuestras surcursales</a>
            </div>
            <div className="col-12 col-md-4 col-lg-2 footer-link text-center">
                <a href="" className="text-gray roboto">¿Qué hablan de nosotros?</a>
            </div>
            <div className="col-12 col-md-4 col-lg-2 footer-link text-center last">
                <a href="" className="text-gray roboto">Contáctanos</a>
            </div>
        </div>
    )
}

export default Footer