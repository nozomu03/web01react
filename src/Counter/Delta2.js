import React from 'react';

const Delta2 = props =>
    (
        <div>
            <input value={props.delta} onChange={props.handleCharge}/><br/>
            <input value={props.delta2} onChange={props.handleCharge2}/><br/>
            <button onClick={props.handlePlus}>+</button>
            <button onClick={props.handleMinus}>-</button>
            <button onClick={props.handleMultiple}>x</button>
            <button onClick={props.handleDivide}>/</button>
        </div>
    );
export default Delta2;