import React from 'react'
import Logo from '../images/Logo.png'
import'../styles/Banner.css';

function Banner() {
    const titre = "La maison jungle";
    return (
        <div className="lmj-banner">
             <img src={Logo} alt="Logo" className="lmj_logo"/>
             <h1 className="lmj_titre">{titre}</h1> 
        </div>
    )
}

export default Banner
