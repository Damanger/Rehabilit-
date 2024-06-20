import React, { useState, useEffect } from 'react';
import Style from '../assets/css/navbar.module.css';
import { FaHome, FaUserMd, FaMapMarkerAlt  } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        const storedActiveLink = localStorage.getItem('activeLink');
        if (storedActiveLink) {
            setActiveLink(storedActiveLink);
        }
    }, []);

    const handleLinkClick = (path) => {
        setActiveLink(path);
        localStorage.setItem('activeLink', path);
    };
    return (
        <>
            <nav className={Style.navbarContainer}>
                <Link to="/" aria-label="inicio" onClick={() => handleLinkClick('/')}>
                    <img src='./re4.1.webp' alt='Logo' width="64" height="64" className={Style.logo} />
                </Link>
                <Link to="/" aria-label="inicio" onClick={() => handleLinkClick('/')}>
                    <img src='./re4.2.webp' alt="Rehabilité" className={Style.nombre} />
                </Link>
                <div className={Style.navbarItems}>
                    <NavLink exact="true" to="/" aria-label="inicio" className={`${Style.icon} ${activeLink === '/' ? Style.active : ''}`} onClick={() => handleLinkClick('/')}>
                        <FaHome className={Style.icono} size={30} />
                    </NavLink>
                    <NavLink exact="true" to="/info" aria-label="información" className={`${Style.icon} ${activeLink === '/info' ? Style.active : ''}`} onClick={() => handleLinkClick('/info')}>
                        <FaUserMd className={Style.icono} size={30} />
                    </NavLink>
                    <NavLink exact="true" to="/mapa" aria-label="mapa" className={`${Style.icon} ${activeLink === '/mapa' ? Style.active : ''}`} onClick={() => handleLinkClick('/mapa')}>
                        <FaMapMarkerAlt className={Style.icono} size={30} />
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
