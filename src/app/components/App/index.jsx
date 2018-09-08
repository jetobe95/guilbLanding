import React, { Component } from 'react';

import './app.css';

import NavBar from '../NavBar';
import Header from '../Header';
import DemoSe from '../DemoSe';
import Acerca from '../Acerca';
import Contact from '../Contact';
import Footer from '../Footer';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Header/>
                <DemoSe/>
                <Acerca/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;