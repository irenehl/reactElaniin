import React from 'react'

function Navigation(props) {
    return (
        <>
        <nav className="ms-5 mt-3 mb-3 navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold druk" href="#">Foodies</a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-5 me-1">
                            <a className="fw-bold active nav-link syne" aria-current="page" href="#">Acerca de</a>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <a className="fw-bold active nav-link syne" href="#">Restaurantes</a>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <a className="fw-bold active nav-link syne" href="#">Menú</a>
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