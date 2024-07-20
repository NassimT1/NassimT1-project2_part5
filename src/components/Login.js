import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import LoginStyle from './Login.module.css';

const Login = () => {
    document.body.style.overflow='hidden'

    return (
        <div>
            <Header />
            <div className={LoginStyle['login-container']}>
                <div className={LoginStyle['login-box']}>
                    <h2 className={LoginStyle['login-title']}>Log In</h2>
                    <form>
                        <div className={LoginStyle['form-group']}>
                            <input type="email" required className={LoginStyle['form-control']} placeholder="Email" />
                        </div>
                        <div className={LoginStyle['form-group']}>
                            <input type="password" required className={LoginStyle['form-control']} placeholder="Password" />
                        </div>
                        <Link to="/main">
                            <button type="submit" className={LoginStyle['btn-block']}>Log In</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
