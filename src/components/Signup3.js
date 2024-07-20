import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Signup3Style from './Signup3.module.css';

const Signup3 = () => {
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    const redirectToConfirm = (event) => {
        event.preventDefault();
        navigate('/confirmation');
    };

    const handleCardNumberChange = (event) => {
        const value = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters
        setCardNumber(value);
        if (!/^\d{16}$/.test(value)) {
            event.target.setCustomValidity('Please enter a valid 16-digit card number.');
        } else {
            event.target.setCustomValidity('');
        }
    };

    const handleExpiryDateChange = (event) => {
        let value = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters

        if (value.length > 4) {
            value = value.slice(0, 4);
        }

        if (value.length >= 2) {
            const month = value.slice(0, 2);
            const year = value.slice(2);

            if (parseInt(month, 10) > 12) {
                event.target.setCustomValidity('Please enter a valid month.');
            } else {
                event.target.setCustomValidity('');
            }

            value = `${month}${year.length ? '/' : ''}${year}`;
        }

        setExpiryDate(value);

        if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value) && value.length === 5) {
            event.target.setCustomValidity('Please enter a valid expiry date in MM/YY format.');
        } else {
            event.target.setCustomValidity('');
        }
    };

    const handleCvcChange = (event) => {
        let value = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters
        if (value.length > 3) {
            value = value.slice(0, 3);
        }
        setCvc(value);
        if (!/^\d{3}$/.test(value)) {
            event.target.setCustomValidity('Please enter a valid 3-digit CVC.');
        } else {
            event.target.setCustomValidity('');
        }
    };

    const handleBackClick = () => {
        navigate('/signup2');
    };

    document.body.style.overflow = 'hidden';

    return (
        <div className={Signup3Style.container}>
            <Header />
            <div className={Signup3Style.signup}>
                <div className={Signup3Style['progress-bar1']}>
                    <p>Step 3</p>
                    <div className={Signup3Style['progress-container']}>
                        <div className={`${Signup3Style.bar} ${Signup3Style.percent66}`}>66%</div>
                    </div>
                </div>

                <div className={Signup3Style['payment-container']}>
                    <div className={Signup3Style['payment-box']}>
                        <h2 className={Signup3Style['payment-title']}>Please enter your payment details</h2>
                        <form onSubmit={redirectToConfirm}>
                            <div className={Signup3Style['form-group']}>
                                <input type="text" required className={Signup3Style['form-control']} id="cardHolderName" placeholder="Card Holder Name" />
                            </div>
                            <div className={Signup3Style['form-group']}>
                                <input type="text" required className={Signup3Style['form-control']} id="cardNumber" placeholder="Card Number" value={cardNumber} onChange={handleCardNumberChange} maxLength={16} />
                            </div>
                            <div className={Signup3Style['form-group']}>
                                <input type="text" required className={Signup3Style['form-control']} id="expiryDate" placeholder="Expiry Date (MM/YY)" value={expiryDate} onChange={handleExpiryDateChange} maxLength={5} />
                            </div>
                            <div className={Signup3Style['form-group']}>
                                <input type="text" required className={Signup3Style['form-control']} id="cvc" placeholder="CVC" value={cvc} onChange={handleCvcChange} maxLength={3} />
                            </div>
                            <button type="submit" className={`${Signup3Style.btn} ${Signup3Style['btn-block']}`}>Confirm</button>
                            <button type="button" className={Signup3Style['back-button']} onClick={handleBackClick}>Back</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup3;
