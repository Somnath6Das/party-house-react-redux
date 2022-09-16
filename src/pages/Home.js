import React from 'react';
import Header from '../components/Header'
import DailyInfoCard from '../components/DailyInfoCard';
import style from '../style/home.module.css'

export default function Home() {
    return (
       
        <>
        <Header/>
        <div className={style.home_container}>
        <DailyInfoCard/>
        </div>
        </>


        
    )
}


// import variables for js pages must have start with capital letter.

