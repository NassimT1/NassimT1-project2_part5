import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Signup1Style from './Signup1.module.css';
import Plans from './Plans.module.css';


const Signup1 = () => {
    const navigate = useNavigate();

    const handlePlanChange = () => {
        navigate('/signup2');
    };

    const handleBackClick = () => {
        navigate('/signup1'); // Navigate to the /signup1 page
    };
    

    return (
        <div className={Signup1Style.container}>
            <Header />
            <div className={Signup1Style.signup}>


                <div className={Signup1Style.plans}>
                    <div className={Signup1Style['plan-card']}>
                        <h2>Basic Plan</h2>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Price</h4>
                            <p className={Signup1Style.price}>$9.99/month</p>
                        </div>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Quality</h4>
                            <p className={Signup1Style.quality}>Good</p>
                        </div>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Resolution</h4>
                            <p className={Signup1Style.resolution}>480p</p>
                        </div>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Devices</h4>
                            <p className={Signup1Style.devices}>1 device</p>
                        </div>
                        <div className={Signup1Style['radio-button']}>
                            <input type="radio" name="plan" id="basic-plan" value="basic" onChange={handlePlanChange} />
                        </div>
                    </div>
                    <div className={Signup1Style['plan-card']}>
                        <h2>Standard Plan</h2>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Price</h4>
                            <p className={Signup1Style.price}>$13.99/month</p>
                        </div>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Quality</h4>
                            <p className={Signup1Style.quality}>Good</p>
                        </div>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Resolution</h4>
                            <p className={Signup1Style.resolution}>720p</p>
                        </div>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Devices</h4>
                            <p className={Signup1Style.devices}>2 devices</p>
                        </div>
                        <div className={Signup1Style['radio-button']}>
                            <input type="radio" name="plan" id="standard-plan" value="standard" onChange={handlePlanChange} />
                        </div>
                    </div>
                    <div className={Signup1Style['plan-card']}>
                        <h2>Premium Plan</h2>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Price</h4>
                            <p className={Signup1Style.price}>$17.99/month</p>
                        </div>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Quality</h4>
                            <p className={Signup1Style.quality}>Best</p>
                        </div>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Resolution</h4>
                            <p className={Signup1Style.resolution}>1080p</p>
                        </div>
                        <hr />
                        <div className={Signup1Style['plan-info']}>
                            <h4>Devices</h4>
                            <p className={Signup1Style.devices}>4 devices</p>
                        </div>
                        <div className={Signup1Style['radio-button']}>
                            <input type="radio" name="plan" id="premium-plan" value="premium" onChange={handlePlanChange} />
                        </div>
                    </div>

                </div>
                <div className={Signup1Style.plans}>

                    <button className={Plans['back-button']} onClick={handleBackClick}>Get Started Today!</button>
                </div>
            </div>
        </div>
    );
};

export default Signup1;
