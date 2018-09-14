import React, { Component } from 'react';
import Style from './acerca.css';

let car = require('../../../assets/hola.png');

class Acerca extends Component {
    render() {
        return (
            <section className="info-head-section bg-danger text-white p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4 mt-2">Sobre Nosotros</h1>
                            <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Sed ea incidunt, autem dolorum magni ducimus fuga nisi eaque voluptatem temporibus. 
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Eligendi laudantium earum vel quis, fugit harum!
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex flex-row">
                        <div className="col-12 col-md-6 p-3">
                            <figure >
                                <img className={Style.img1} src={car} alt="Mre"/>
                            </figure>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className={Style.text}>
                                <li>
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Acerca;