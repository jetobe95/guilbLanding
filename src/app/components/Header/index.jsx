import React, { Component } from 'react';

import Style from './header.css';
import Logo from './Logo';

class Header extends Component {
    render() {
        return (         
            <header id="#home" className={Style.root}>
                <div className={Style.darkOverlay}>
                    <div className="home-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Logo/>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;