import React from 'react'
import Form from '../Components/Form'
import BigHero from '../Components/BigHero'
import AboutUs from '../Components/AboutUs'
import Carousel from '../Components/Carousel'
import Navigation from '../Components/Navigation'
import AppDownload from '../Components/AppDownload'
import MapLocation from '../Components/MapLocation'
import PhoneNavigation from '../Components/PhoneNavigation'

import yellow_body from '../resources/yellow_main.svg'

import windowDimensions from '../Hooks/UseWindowDimension'

function MainPage() {
    var { width } = windowDimensions()

    return(
        <React.Fragment>
            { width < 1024 ? <PhoneNavigation/> : <Navigation />}
            <BigHero/>
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