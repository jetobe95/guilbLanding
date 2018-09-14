import React, { Component } from 'react';


//import CardsList from '../CardsList';
//import FooterD from '../FooterD';

class Store extends Component 
{
    constructor() {
        super();
        this.state = {
            count: 0,
            priceAcum: 0
        }
    
        this.handleCountSum = this.handleCountSum.bind(this);
        this.handleCountRes = this.handleCountRes.bind(this);
        this.handleRest = this.handleRest.bind(this);
      }
    
    handleCountSum(val) 
    {
        this.setState({ count: this.state.count + 1 })
        this.handlePriceAcum(val)
    }
    
    handleCountRes(val)
    {
        if( this.state.count > 0 )
        {
          this.setState({ count: this.state.count - 1 })
          this.handlePriceRes(val)
        }
    }
    
    handlePriceAcum(val)
    {
      this.setState({ priceAcum: this.state.priceAcum + parseInt(val,10)})  
    }
    
    handlePriceRes(val)
    {
      this.setState({ priceAcum: this.state.priceAcum - parseInt(val,10)})  
    }
    
    handleRest()
    {
      this.setState({ priceAcum: 0, count:0 })
    }

    render() {
        return (  
            <div>
                <div className="row">
                <div className="col-12 scrolleando ">
                    
                    <CardsList 
                    itemPlus={this.handleCountSum} 
                    itemMinus={this.handleCountRes}/>
                </div>
                </div>

                <footer className="row">
                <div className="col bg-danger">
                    <FooterD count={this.state.count} price={this.state.priceAcum} />
                </div>
                </footer>
            </div>
        );
    }
}

export default Store;