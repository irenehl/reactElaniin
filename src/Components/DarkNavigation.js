import React from 'react'
import { Link } from 'react-router-dom'

function DarkNavigation() {
    return (
        <>
            <nav className="ms-5 pt-4 pb-4 navbar navbar-expand-lg navbar-light black-hero">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-5 me-1">
                                <a className="text-white navbar-brand fw-bold druk" href="#">
                                    Foodies
                                </a>
                            </li>
                            <li className="nav-item ms-5 me-1">
                                <a className="text-white fw-bold active nav-link syne" aria-current="page" href="#">
                                    Acerca de
                                </a>
                            </li>
                            <li className="nav-item ms-1 me-1">
                                <a className="text-white fw-bold active nav-link syne" href="#">
                                    Restaurantes
                                </a>
                            </li>
                            <li className="nav-item ms-1 me-1">
                                <Link to="/menu" className="text-white fw-bold active nav-link syne" href="#">
                                    Menú
                                </Link>
                            </li>
                            <li className="nav-item ms-1 me-1">
                                <a className="text-white fw-bold active nav-link syne" href="#">
                                    Contáctanos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DarkNavigation