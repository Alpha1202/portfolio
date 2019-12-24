import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Button.css';

export default function Button(props) {

    

    return (
    <div className="button" id="button-7" onClick={props.handleClick}>
        <div id="dub-arrow">
            <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
        </div>
        <Link>Let's Go!</Link>
      </div>
        
    )
}
