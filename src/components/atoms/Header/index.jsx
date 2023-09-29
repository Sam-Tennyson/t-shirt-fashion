import React from 'react'
import "./style.css"
import { THEME_COLOR, useTheme } from '../../../contexts/ThemeContext'


const Header = () => {
    const { theme } = useTheme()
    return (
        <>
            <nav 
                // className={`navbar navbar-expand-lg navbar-dark bg-dark  `}
                className={`navbar navbar-expand-lg ${theme === THEME_COLOR.DARK ?"navbar-dark bg-dark": 'navbar-light bg-light'}`}
            >
                <div className="container-fluid ps-md-5">
                    <a className="navbar-brand ps-md-5 text-warning fw-bolder " href="#"><span className={`${theme === THEME_COLOR.LIGHT ? "text-black" : "text-white"}`}>T</span>-Shirts</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-tshirt" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 mx-auto">
                            <li className="nav-item">
                                <a className="nav-link  text-center btn btn-outline-warning rounded-2 px-3" aria-current="page" href="#"><b>  Home </b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-center btn btn-outline-warning rounded-2 px-3" aria-current="page" href="#"><b> Top </b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-center btn btn-outline-warning rounded-2 px-3" aria-current="page" href="#"><b> Featured </b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-center btn btn-outline-warning rounded-2 px-3" aria-current="page" href="#"><b> Sale </b></a>
                            </li>



                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header