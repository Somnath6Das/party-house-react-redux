import React from 'react';
import style from '../style/welcome.module.css'
import { Link } from "react-router-dom";


export default function Welcome () {
    return (
    <div className={style.WelcomeContainer}>
        <h1>Welcome!</h1>
        <div className={style.WelcomeInfo}>
            <p>We're working hard to get party house ready for everyone! While we wrap up the finishing touches.</p>
            <p>Anyone can join with an invite from an existing user - or reserve your username and we'll text you if you have a friend on the app who can let you in. we are so grateful you're here and can't wait to have join!</p>
            <p>Somnath the Party house team.</p>
        </div>
        <div className={style.actionBtn}>
            <Link exact to='/get_username' className='primaryBtn d-flex align-items-center mb-3'>Get your username{" "}</Link>
            <Link exact to='/invite'>Have an invite text? Sign in</Link>
        </div>
    </div>       
    );
}