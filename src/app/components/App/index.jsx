import React, { Component } from 'react';

import './app.css';

import NavBar from '../NavBar';
import Front from '../Front';
import Store from '../Store';

class App extends Component {
    render() {
        return (
            <div>            
                <NavBar/>
                <Front/>

            </div>
        );
    }
}

export default App;