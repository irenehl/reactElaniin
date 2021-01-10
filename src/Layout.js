// npm packages
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Components
import BigHero from './Components/BigHero'
import Navigation from './Components/Navigation'
import PhoneNavigation from './Components/PhoneNavigation'

// Pages
import MainPage from './Pages/MainPage'
import MenuPage from './Pages/MenuPage'

// Hooks
import useWindowDimensions from './Hooks/UseWindowDimension'
import Footer from './Components/Footer'

function Layout({location}) {
    var { width } = useWindowDimensions()
    return (
        <React.Fragment>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={'fade'}>
                    <Switch location={location}>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/menu" component={MenuPage} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer/>
        </React.Fragment>
    )
}

export default withRouter(Layout)