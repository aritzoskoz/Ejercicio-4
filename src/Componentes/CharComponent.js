import React from 'react';
import './CharComponent.css';

const YYYYY = ( props ) => {
    return (
        <div className="charCSS" onClick={props.click}>
            <p>{props.caracter}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default YYYYY;