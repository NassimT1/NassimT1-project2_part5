import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Signup2Style from './Signup2.module.css';

const Signup2 = () => {
    const navigate = useNavigate();

    const redirectToPayment = () => {
        navigate('/signup3');
    };

    const handleBackClick = () => {
        navigate('/signup1');
    };

    document.body.style.overflow = 'hidden';

    return (
        <div className={Signup2Style.container}>
            <Header />
            <div className={Signup2Style.signup}>
                <div className={Signup2Style['progress-bar1']}>
                    <p>Step 2</p>
                    <div className={Signup2Style['progress-container']}>
                        <div className={`${Signup2Style.bar} ${Signup2Style.percent33}`}>33%</div>
                    </div>
                </div>

                <div className={Signup2Style['signup-container']}>
                    <div className={Signup2Style['signup-box']}>
                        <h2 className={Signup2Style['signup-title']}>Please enter your email and create a new password</h2>
                        <form onSubmit={redirectToPayment}>
                            <div className={Signup2Style['form-group']}>
                                <input type="email" required className={Signup2Style['form-control']} placeholder="Email" />
                            </div>
                            <div className={Signup2Style['form-group']}>
                                <input type="password" required className={Signup2Style['form-control']} placeholder="Password" />
                            </div>
                            <button type="submit" className={`${Signup2Style.btn} ${Signup2Style['btn-block']}`}>Confirm</button>
                        </form>
                        <button className={Signup2Style['back-button']} onClick={handleBackClick}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup2;
