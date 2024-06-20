import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Style from '../assets/css/error.module.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <NavBar/>
            <div className={Style.errorImage}>
                <img src="404.webp" alt="404" />
                <Link to="/" className={Style.regresar}><h3>Inicio</h3></Link>
            </div>
            <Footer/>
        </>
    );
};

export default Error;
