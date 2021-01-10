import React from 'react'
import styled from 'styled-components'

import BigHero from '../Components/BigHero'
import DarkNavigation from '../Components/DarkNavigation'
import DarkPhoneNavigation from '../Components/DarkPhoneNavigation'

import yellow_body from '../resources/yellow-dark.png'

import windowDimensions from '../Hooks/UseWindowDimension'
import MenuContainer from '../Components/MenuContainer'

const Header = styled.div`
    position: relative;
    z-index: 3;
`

function MenuPage() {
    var { width } = windowDimensions()

    return(
        <>
            <Header className="black-hero over-hidden">
                { width < 1024 ? <DarkPhoneNavigation/> : <DarkNavigation />}
                <BigHero/>
                <img src={yellow_body} alt="" className="yellow-body dark"/>
            </Header>
            <MenuContainer/>
        </>
    )
}

export default MenuPage