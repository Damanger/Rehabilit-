import React from 'react';
import '../assets/css/error.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error-image">
            <img src="404.png" alt="404" />
            <Link to="/" className='regresar'><h3>Inicio</h3></Link>
        </div>
    );
};

export default Error;
