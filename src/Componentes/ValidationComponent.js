import React from 'react';
import './ValidationComponent.css';

const XXXXX = ( props ) => {
    return (
        <div className="validationCSS">
            <input type="text" onChange={props.changed} value={props.texto} />
            <p><em> Texto insertado:  {props.texto} </em></p>
            <p>LONGITUD - {props.longitud}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default XXXXX;