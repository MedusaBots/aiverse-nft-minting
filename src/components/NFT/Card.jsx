import React from 'react';

function Card(props){
   return(
    <div className="boxer">
        <h1 className="App-header">
            <div className="Cardprop" style={{color: `${props.color}`}}>
                <h2 className="CardHeader">
                    {props.title}
                </h2>
                <hr className="hr" style={{backgroundColor: `${props.hrcolor}`}}/>
                <p className='pTag'>
                    {props.text}
                </p>
            </div>
        </h1>
    </div>
   )
};

export default Card;