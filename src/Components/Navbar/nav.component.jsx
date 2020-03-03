import './menu.css'
import React from 'react'
import './menu'

const Navbar = () =>{

    return(
        <div className="navbar">
            <div className="navbar-container">
            <div className="logo-container">
                <div className="logo">Novo</div>
                <div className="second">lar</div>
            </div>
            <div className="menu-btn">
                <span className="menu-btn-burger"></span>
            </div>
            <nav className="nav">
                <ul className="menu-nav">
                    <li className="menu-nav-item">
                        <a className="menu-nav-link" href="/">Home</a>
                    </li>
                    <li className="menu-nav-item">
                        <a className="menu-nav-link" href="/imoveis">Imóveis</a>
                    </li>
                    <li className="menu-nav-item">
                        <a className="menu-nav-link" href="/favoritos">Favoritos</a>
                    </li>
                </ul>
            </nav>
    </div>

        </div>
    )
}

export default Navbar