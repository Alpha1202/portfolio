import React from 'react';
import styled, { keyframes } from 'styled-components';
import { merge, flash, rubberBand } from 'react-animations';
import Navbar from '../../components/Navbar/Navbar';

const tadaFlip = merge(rubberBand, flash);
const bounceAnimation = keyframes`${tadaFlip}`;

const BouncyDiv = styled.div`animation: 3s ${bounceAnimation};`;
export default function Blog() {
    return (
        <div>
             <div className="container">
            <Navbar />
            </div>
            <section className="section">
                <div className="container is-centered">
                    <div className="columns is-centered">
                        <div className='column'>
                        <div className="anime has-text-centered is-centered">
				<BouncyDiv>Coming Soon...</BouncyDiv>
			</div>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    )
}
