import React from 'react';
import Style from '../assets/css/error.module.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className={Style.errorImage}>
            <img src="404.png" alt="404" />
            <Link to="/" className={Style.regresar}><h3>Inicio</h3></Link>
        </div>
    );
};

export default Error;
