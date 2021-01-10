import React from 'react'
import AboutUs from '../Components/AboutUs'
import MapLocation from '../Components/MapLocation'

import yellow_body from '../resources/yellow_main.svg'

function MainPage() {
    return(
        <React.Fragment>
            <img className="yellow-body" src={yellow_body} alt=""/>
            <AboutUs/>
            <MapLocation/>
        </React.Fragment>
    )
}

export default MainPage