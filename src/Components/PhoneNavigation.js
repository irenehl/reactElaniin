import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useTransition, animated } from 'react-spring'

function PhoneNavigation() {
    const [showMenu, setShowMenu] = useState(false)

    const transitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })

    return (
        <nav className="container-fluid d-flex mt-4 m-1 pe-4 ps-3 align-items-center justify-content-between">
            <h1 className="druk m-0 foodies">Foodies</h1>
            <span className="hamb">
                <FontAwesomeIcon 
                    icon={showMenu === false ? faBars : faTimes}
                    onClick={() => setShowMenu(!showMenu) }
                />
            </span>
            {
                transitions.map(({ item, key, props }) =>
                item &&
                <animated.div 
                    key={key} 
                    style={props}
                    className="hiden-nav"
                    onClick={() => setShowMenu(false)}
                >
                    <h1 className="syne mt-5">Acerca de</h1>
                    <h1 className="syne mt-4">Restaurantes</h1>
                    <h1 className="syne mt-4">Contactanos</h1>
                </animated.div>
                )
            }
        </nav>
    )
}

export default PhoneNavigation

