import React, { Component } from 'react';
import Styles from './footer.css';

class Footer extends Component {
    render() {
        return (
            <section className={Styles.root}>
                <div className="text-white p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <span className="mr-5">
                                Rif: J-000265487654
                                </span>
                                <span className="ml-5"> ® Todos los derechos reservados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;