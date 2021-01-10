import React from 'react'

import n01 from '../resources/n-01.png'
import n02 from '../resources/n-02.png'
import n03 from '../resources/n-03.png'
import phone from '../resources/phone.png'

function AppDownload() {
    return (
        <div className="container-fluid d-flex flex-wrap benefits-container">
            <div className="col-12 col-lg-5 text-center">
                <img src={phone} alt="" className="phone" />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-wrap justify-content-center infoContainer">
                <h1 className="druk benefits col-12">
                    Obten mas beneficios <br /><strong>Descarga nuestra App</strong>
                </h1>
                <div className="col-12 col-md-7 d-flex flex-column justify-content-start align-items-center">
                    <div className="infoGrouper first text-center m-3 mb-5">
                        <img src={n01} alt="" className="number" />
                        <p className="infoTitle roboto">Solicita rápido</p>
                        <p className="infoDesc roboto mt-3">
                            Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget 
                            magna aliquet ultricies.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-center">
                    <div className="infoGrouper text-center m-3 mb-5">
                        <img src={n02} alt="" className="number" />
                        <p className="infoTitle roboto">Fácil de Usar</p>
                        <p className="infoDesc roboto mt-3">
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-center">
                    <div className="infoGrouper text-center m-3 mb-5">
                        <img src={n03} alt="" className="number" />
                        <p className="infoTitle roboto">Promociones especiales</p>
                        <p className="infoDesc roboto mt-3">
                            Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna
                            aliquet ultricies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload