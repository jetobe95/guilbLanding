import React, { Component } from 'react';
import Style from './contact.css' ;

let car = require('../../assets/_1.png');

class index extends Component {
    render() {
        return (
            <section className="info-head-section bg-ligth text-muted p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4 text-dark">Contactanos</h1>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Eligendi laudantium earum vel quis, fugit harum!
                             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Eligendi laudantium earum vel quis, fugit harum!
                            </p>
                            <div className="row d-flex flex-row">
                                <div className="col-md-6 mt-5">
                                    <ul className={Style.RdS}>
                                        <li className="mb-3">
                                            <button className="btn btn-primary btn-block diplay-4">
                                                <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
                                            </button>
                                        </li>
                                        <li className="mb-3">
                                            <button className="btn btn-danger btn-block diplay-4">
                                                <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                                            </button>
                                        </li>
                                        <li className="mb-3">
                                            <button className="btn btn-success btn-block diplay-4">
                                                <i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i>
                                            </button>
                                        </li>
                                        <li className="mb-3">
                                            <button className="btn btn-dark btn-block diplay-4">
                                                <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 p-3">
                                    <figure >
                                        <img className={Style.img2} src={car} alt="Mre"/>
                                    </figure>
                                </div>
                    </div>        
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default index;