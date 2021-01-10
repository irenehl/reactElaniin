import React from 'react'
import AboutUs from '../Components/AboutUs'
import AppDownload from '../Components/AppDownload'
import Carousel from '../Components/Carousel'
import Form from '../Components/Form'
import MapLocation from '../Components/MapLocation'

import yellow_body from '../resources/yellow_main.svg'

function MainPage() {
    return(
        <React.Fragment>
            <img className="yellow-body" src={yellow_body} alt=""/>
            <AboutUs/>
            <MapLocation/>
            <Carousel/>
            <Form/>
            <AppDownload/>
        </React.Fragment>
    )
}

export default MainPage