import React, { Component } from 'react';

//import Styles from './cards.css';

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            buyPerCard: 0,
            count: 0
        }

        this.handleClickSum = this.handleClickSum.bind(this);
        this.handleClickRes = this.handleClickRes.bind(this) ;
    }

    handleClickSum() 
    {
        this.setState({ buyPerCard: this.state.buyPerCard +  1,
                        count: this.state.count + 1 })
                   
        this.props.funS(this.props.product.price);  
        
    }

    handleClickRes()
    {
        if( this.state.buyPerCard > 0 )
        {
            this.setState({         
                    buyPerCard: this.state.buyPerCard -  1,
                    count: this.state.count - 1
            })
            this.props.funM(this.props.product.price); 
        }
    }

    render(props) 
    {   return (
            <React.Fragment>
                <div className="card shadow rounded text-center">
                    
                    <div className="card-body">
                        <img src={this.props.product.image} className="card-img-top" alt="Card View" />
                        <h4> {this.props.product.title} </h4>
                        <span className="badge badge-pill badge-danger d-block">
                            <span className="h6">{this.props.product.price}</span>
                        </span>
                    </div>
                    
                    <div className="card-body">            
                        <a href=""><button className="btn btn-info">Detalles</button></a>
                    </div>  

                    <div className="card-footer">
                        <div className="row justify-content-center">

                            <div className="col-3">
                                <button className="btn btn2 btn-light"
                                    onClick={this.handleClickSum } >

                                    <i className="fas fa-plus-circle icons" />
                                </button>
                                <button className="btn btn2 btn-light" id="sol"
                                    onClick={this.handleClickRes} >

                                    <i className="fas fa-minus-circle icons" />
                                </button>
                            </div>
                            <div className="col-3">
                                <div className="badge badge-pill badge-dark mt-3 align-middle">
                                    <span className="h5">{this.state.buyPerCard}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Cards;