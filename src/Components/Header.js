import React from 'react'
import Navigation from './Navigation'
import PhoneNavigation from './PhoneNavigation'
import getWindowDimension from '../Hooks/UseWindowDimension'

function Header(){
    var { width } = getWindowDimension()
    console.log(width)
    return (
        <header className="p-3 d-flex justify-content-sm-between justify-content-md-between
        justify-content-lg-between ">
            {
                width <= 600 ? <PhoneNavigation title="Foodies"/> : <Navigation title="Foodies"/>
            }
        </header>
    )
}

export default Header