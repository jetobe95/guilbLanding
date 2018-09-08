import React from 'react';
import Style from './navbar.css';

const NavDrc = () =>
        <div className={Style.navbar}>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top p-1">
            <div className="container">
            <a href="#home" className="navbar-brand">L&G Services!</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#threeNavbar" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="threeNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="">Productos</a></li>
                        <li className="nav-item"><a className="nav-link" href="">Acerca de</a></li>
                        <li className="nav-item"><a className="nav-link" href="">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
export default NavDrc ;