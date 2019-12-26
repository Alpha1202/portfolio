import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import './style.css';

export default function index(props) {
    return (
        <>
        <div className="container">
				<Navbar />
			</div>
        <div className="error-wrapper">
           
<div className='column error is-6 is-centered'>
    <div className="error-wrap">
        <div className="error-p">
        <h4 className='title'>Dwarfs took this page down!!!</h4>
        <h3 className='title'>Let's Head back!!!</h3>
      </div>
      <span></span>
        <div className="centered">
           <Link to='/'>
           <Button />
           </Link>

           
        
					
				</div>
    </div>
</div>
   
        </div>
        </>
    )
}
