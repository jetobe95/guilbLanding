import React from 'react';

//import Styles from './FooterD.css';

const DerF = (props) =>
            <footer>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border">
                  <div className="container-fluid">
                  <span className="navbar-brand"> Items: {props.count} </span>
                  <span className="navbar-brand"> Total:</span>
                  
                  <div className="badge badge-pill badge-danger text-center p-2 ">
                        <span className="navbar-text text-white h6"> {props.price}$ </span>
                  </div>
                  
                
                  <button className="btn btn-outline-dark btn-sm">To Pay!</button>
                  </div>

                </nav>
            </footer>
        
export default DerF ;