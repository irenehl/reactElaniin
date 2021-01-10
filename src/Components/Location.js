import React from 'react'
import { useState } from 'react'

function Location(props) {
    var [classes, setClasses] = useState('location')

    function onClickHandler() {
        props.changeParentState(props.childCoordinates)
        props.changeParentPopup(props.name)

        if(classes.includes('inactive')) {
            setClasses('location')
        }
        else {
            setClasses('location inactive')
        }
    }

    return(
        <div className={classes} onClick={onClickHandler}>
            <h3 className="location-title syne">{props.name}</h3> 
            <p className="location-text openSans">{props.schedule}</p>
            <p className="location-text openSans">{props.address}</p>
        </div>
    )
}

export default Location