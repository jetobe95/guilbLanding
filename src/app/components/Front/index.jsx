import React, { Component } from 'react';

import Header from './Header';
import DemoSe from './DemoSe';
import Acerca from './Acerca';
import Contact from './Contact';
import Footer from './Footer';

class Front extends Component {
    render() {
        return (
            <div>
                <Header/>
                <DemoSe/>
                <Acerca/>
                <Contact/>
                <Footer/> 
            </div>
        );
    }
}

export default Front;