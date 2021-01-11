import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(props) {
    return (
        <>
            <nav className="ms-5 mt-3 mb-3 navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-5 me-1">
                                <a className="navbar-brand fw-bold druk" href="#">Foodies</a>
                            </li>
                            <li className="nav-item ms-5 me-1">
                                <a className="fw-bold active nav-link syne" aria-current="page" href="#">Acerca de</a>
                            </li>
                            <li className="nav-item ms-1 me-1">
                                <a className="fw-bold active nav-link syne" href="#">Restaurantes</a>
                            </li>
                            <li className="nav-item ms-1 me-1">
                                <Link to="/menu" className="fw-bold active nav-link syne" href="#">Menú</Link>
                            </li>
                            <li className="nav-item ms-1 me-1">
                                <a className="fw-bold active nav-link syne" href="#">Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation