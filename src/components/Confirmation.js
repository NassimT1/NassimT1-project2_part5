import React from 'react';
import confirm from '../assets/confirm.png'; 
import ConfirmationStyle from './Confirmation.module.css';

const Confirmation = () => {

    return (
        <div className={ConfirmationStyle.confirmation}>
            <div className={ConfirmationStyle['confirmation-container']}>
                <img src={confirm} alt="Confirmation" />
                <h1>Thank you for your subscription</h1>
                <a href="/main">
                    <button>Continue</button>
                </a>
            </div>
        </div>
    );
};

export default Confirmation;
