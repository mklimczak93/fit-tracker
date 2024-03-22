import React from 'react';
import '../index.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import SocialMediaLinks from '../components/SocialMediaLinks';
import ToggleButton from '../components/ToggleButton';
import FTLogo from '../assets/icons/project/FTicon-50-white.svg';


export default function RegisterPage() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ birthDate, setBirthDate ] = useState('');
    const [ emptyFields, setEmptyFields ] = useState('');
    //getting the function & states from useRegister custom hooks
    const { register, isLoading, error } = useRegister();

    async function handleSubmit(e) {
        e.preventDefault();
        await register(email, password, birthDate);
    }

    return(   
        <div className="page login-page">
            <div className="small-box">
                <div className="top-menu">
                    <SocialMediaLinks />
                    <div className="logo">
                        <svg className="icon icon-15" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="icon-svg-path" d="M50.7979 23.4634H34.88L49.4423 17.4103L47.9577 13.8351L34.4927 19.4366L44.8464 9.09843L42.1095 6.36224L30.8521 17.6168L36.9326 2.85166L33.3695 1.38031L27.7279 15.0354V0.399414H23.8678V15.9647L17.8002 1.40613L14.237 2.89038L20.0852 16.9585L9.48621 6.36224L6.74931 9.09843L17.4129 19.7463L3.25073 13.9126L1.779 17.4877L16.2897 23.4634H0.797852V27.3354H15.528L1.80482 33.0401L3.28946 36.6152L17.9551 30.5104L6.74931 41.7004L9.48621 44.4366L19.9045 34.0339L14.3145 47.5987L17.8776 49.07L23.8678 34.5631V50.3994H27.7279V35.3246L33.447 49.0442L37.0101 47.56L31.1619 33.4918L42.1095 44.4366L44.8464 41.7004L33.8343 30.704L47.9964 36.5378L49.4681 32.9627L35.8095 27.3354H50.7979V23.4634Z" />
                        </svg>
                        <p>Fit.Tracker</p>
                    </div>
                    <div className="top-menu-buttons">
                        <ToggleButton  />
                        <NavLink to="/help" className="link social-media-link">
                            <svg className="icon icon-15" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="icon-svg-path" fill-rule="evenodd" clip-rule="evenodd" d="M12.6523 25.7153C19.5559 25.7153 25.1523 20.1189 25.1523 13.2153C25.1523 6.31177 19.5559 0.715332 12.6523 0.715332C5.74878 0.715332 0.152344 6.31177 0.152344 13.2153C0.152344 20.1189 5.74878 25.7153 12.6523 25.7153ZM12.8077 18.6081C13.4696 18.6081 14.0061 18.0716 14.0061 17.4097C14.0061 16.7479 13.4696 16.2114 12.8077 16.2114C12.1459 16.2114 11.6094 16.7479 11.6094 17.4097C11.6094 18.0716 12.1459 18.6081 12.8077 18.6081ZM10.7469 7.63717C11.2508 7.32872 11.9287 7.16593 12.8074 7.16593C13.6858 7.16593 14.4033 7.40096 14.9011 7.86632C15.4044 8.33676 15.6019 8.96716 15.579 9.58407C15.5357 10.7499 14.7147 11.9649 13.465 12.4902V13.8155C13.465 14.1787 13.1705 14.4732 12.8072 14.4732C12.4439 14.4732 12.1494 14.1787 12.1494 13.8155V12.3603C12.1494 11.8414 12.5014 11.4535 12.8971 11.3008C13.7327 10.9783 14.2404 10.1794 14.2643 9.53523C14.2755 9.23259 14.1821 8.99502 14.0027 8.82739C13.818 8.65467 13.4612 8.48151 12.8074 8.48151C12.0783 8.48151 11.6639 8.6183 11.4337 8.75923C11.2188 8.89074 11.1251 9.04891 11.0791 9.20649C11.0281 9.38114 11.0317 9.57556 11.058 9.7451C11.0707 9.82649 11.0872 9.89369 11.0998 9.93838C11.1061 9.9605 11.1112 9.97644 11.1141 9.98512L11.1165 9.99205C11.2419 10.3306 11.0708 10.7075 10.7326 10.8356C10.3928 10.9642 10.0131 10.7931 9.88445 10.4534L10.4996 10.2204C9.88445 10.4534 9.88431 10.453 9.88417 10.4526L9.88387 10.4518L9.88321 10.4501L9.88165 10.4459L9.87762 10.4347C9.87454 10.4261 9.8707 10.4151 9.86628 10.4019C9.85746 10.3754 9.84621 10.3399 9.83393 10.2965C9.8095 10.2101 9.78024 10.09 9.75801 9.94675C9.7146 9.66691 9.6923 9.26215 9.8163 8.83763C9.94529 8.39604 10.2276 7.95503 10.7469 7.63717ZM21.3368 13.2153C21.3368 18.0116 17.4486 21.8998 12.6523 21.8998C7.85607 21.8998 3.96792 18.0116 3.96792 13.2153C3.96792 8.41906 7.85607 4.53091 12.6523 4.53091C17.4486 4.53091 21.3368 8.41906 21.3368 13.2153ZM22.6523 13.2153C22.6523 18.7382 18.1752 23.2153 12.6523 23.2153C7.1295 23.2153 2.65234 18.7382 2.65234 13.2153C2.65234 7.69248 7.1295 3.21533 12.6523 3.21533C18.1752 3.21533 22.6523 7.69248 22.6523 13.2153Z" fill="#EDECE9"/>
                            </svg>
                        </NavLink>
                        <div className="link social-media-link">
                            <svg className="icon icon-15" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="icon-svg-path" fill-rule="evenodd" clip-rule="evenodd" d="M13.4028 25.8047C20.3064 25.8047 25.9028 20.2082 25.9028 13.3047C25.9028 6.40113 20.3064 0.804688 13.4028 0.804688C6.49927 0.804688 0.902832 6.40113 0.902832 13.3047C0.902832 20.2082 6.49927 25.8047 13.4028 25.8047ZM14.204 4.10588C14.204 3.66339 13.8453 3.30469 13.4028 3.30469C12.9603 3.30469 12.6016 3.66339 12.6016 4.10588V13.3047C12.6016 13.7472 12.9603 14.1059 13.4028 14.1059C13.8453 14.1059 14.204 13.7472 14.204 13.3047V4.10588ZM7.4057 7.42639C7.71546 7.11041 7.71041 6.60315 7.39443 6.29339C7.07846 5.98363 6.57119 5.98867 6.26143 6.30465C4.49399 8.10758 3.40283 10.5795 3.40283 13.3047C3.40283 18.8275 7.87998 23.3047 13.4028 23.3047C18.9257 23.3047 23.4028 18.8275 23.4028 13.3047C23.4028 10.5795 22.3117 8.10758 20.5442 6.30465C20.2345 5.98867 19.7272 5.98363 19.4112 6.29339C19.0953 6.60315 19.0902 7.11041 19.4 7.42639C20.8857 8.94193 21.8004 11.0157 21.8004 13.3047C21.8004 17.9426 18.0407 21.7023 13.4028 21.7023C8.76496 21.7023 5.00522 17.9426 5.00522 13.3047C5.00522 11.0157 5.91998 8.94193 7.4057 7.42639Z" fill="#EDECE9"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="small-box-inner">
                    <h3 className="form-title">Sign Up</h3>
                    { error && <p className="error-message">Error: {error}</p>}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label className="form-label">E-mail</label>
                        <input 
                        type="email"
                        className={emptyFields.includes('email') ? "error-input form-input login" : "form-input login"} 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}>
                        </input>

                        <label className="form-label">Password</label>
                        <input 
                        type="password"
                        className={emptyFields.includes('password') ? "error-input form-input login" : "form-input login"} 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}>
                        </input>

                        <label className="form-label">Birth date</label>
                        <input 
                        type="date"
                        className={emptyFields.includes('birthDate') ? "error-input form-input login" : "form-input login"} 
                        onChange={(e) => setBirthDate(e.target.value)} 
                        value={birthDate}>
                        </input>

                        <input type="submit" disabled={isLoading} className="simple-button" value="Sign up"/>
                    </form>
                    <a href="/login-page" className="link grey-text">Already have an account? Sign in.</a>
                    <div className="bottom-right-corner">
                        <img src = { FTLogo } className="icon icon-30-no-margin" alt="Fit Tracker star"/>
                    </div>
                </div>
            </div>
        </div>
)
}