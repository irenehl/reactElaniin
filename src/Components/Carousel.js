import React from 'react'

import ketchup from '../resources/ketchup.png'
import ketchupLeft from '../resources/red_left.svg'
import ketchupRight from '../resources/red_right.svg'

function Carousel() {
    return (
        <div className="container-fluid p-0 mt-5 d-flex over-hidden">
            <div className="d-none d-md-block col-2">
                <img src={ketchupLeft} alt="" className="d-none ketchup d-md-block ketchup-left"/>
            </div>
            <div id="carouselExampleControls"
                className="col-12 col-md-8 d-flex flex-column align-items-center justify-content-center carousel slide p-4" 
                data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1 className="druk ps-3 pe-3 text-center item-title">“El mejor lugar para degustar en familia y amigos!”</h1>
                        <p className="openSans item-text text-gray">Es el mejor lugar al que he venido con mi familia,
                    la comida es rica, sirven rápido y te atienden de la mejor manera. </p>
                    </div>
                    <div className="carousel-item">
                        <h1 className="druk ps-3 pe-3 text-center item-title">“El mejor lugar para degustar en familia y amigos!”</h1>
                        <p className="openSans item-text text-gray">Es el mejor lugar al que he venido con mi familia,
                    la comida es rica, sirven rápido y te atienden de la mejor manera. </p>
                    </div>
                    <div className="carousel-item">
                        <h1 className="druk ps-3 pe-3 text-center item-title">“El mejor lugar para degustar en familia y amigos!”</h1>
                        <p className="openSans item-text text-gray">Es el mejor lugar al que he venido con mi familia,
                    la comida es rica, sirven rápido y te atienden de la mejor manera. </p>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
            <div className="d-none d-md-flex col-2 justify-content-end">
                <img src={ketchup} alt="" className="d-none ketchup d-lg-block ketchup-bottle"/>
                <img src={ketchupRight} alt="" className="d-none ketchup d-md-block ketchup-right"/>
            </div>
        </div>
    )
}

export default Carousel