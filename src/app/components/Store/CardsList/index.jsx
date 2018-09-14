import React from 'react';

import products  from '../products.js' ;

import Card from '../Card';

const CardsList = (props) => (

    <div className="row p-5">
        <h1 className="display-1">Hola Mamaa!</h1>
        {
            console.log(products)
        }
    </div>
)    

export default CardsList ;

{/*
        products
        .map(   
            (e,i) =>    <div key={i} className="col-sm-12 col-md-6 col-xl-4 p-5">
                            <Card product={e} 
                                  funS={props.itemPlus}
                                  funM={props.itemMinus}      
                            />
                        </div>
        )
*/}