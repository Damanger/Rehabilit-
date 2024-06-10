import React, { useState, useEffect } from 'react';
import '../assets/css/navbar.css';
import { FaHome, FaUserMd , FaEnvelope } from 'react-icons/fa';
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
            <nav className='navbar-container'>
                <Link to="/" onClick={() => handleLinkClick('/')}>
                    <img src='./re4.1.png' alt='Logo' className="logo" />
                </Link>
                <Link to="/" onClick={() => handleLinkClick('/')}>
                    <img src='./re4.2.png' alt="Rehabilité" className='nombre' />
                </Link>
                <div className="navbar-items">
                    <NavLink exact="true" to="/" className={`icon ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>
                        <FaHome size={30} />
                    </NavLink>
                    <NavLink exact="true" to="/info" className={`icon ${activeLink === '/info' ? 'active' : ''}`} onClick={() => handleLinkClick('/info')}>
                        <FaUserMd size={30} />
                    </NavLink>
                    <NavLink exact="true" to="/contacto" className={`icon ${activeLink === '/contacto' ? 'active' : ''}`} onClick={() => handleLinkClick('/contacto')}>
                        <FaEnvelope size={30} />
                    </NavLink>
                </div>
            </nav>
            <footer className="navigation">
                <ul>
                    <li className={`list ${activeLink === '/' ? 'active' : ''}`}>
                        <Link to="/" onClick={() => handleLinkClick('/')}>
                            <span className="icon">
                                <FaHome size={30} />
                            </span>
                        </Link>
                    </li>
                    <li className={`list ${activeLink === '/info' ? 'active' : ''}`}>
                        <Link to="/info" onClick={() => handleLinkClick('/info')}>
                            <span className="icon">
                                <FaUserMd size={30} />
                            </span>
                        </Link>
                    </li>
                    <li className={`list ${activeLink === '/contacto' ? 'active' : ''}`}>
                        <Link to="/contacto" onClick={() => handleLinkClick('/contacto')}>
                            <span className="icon">
                                <FaEnvelope size={30} />
                            </span>
                        </Link>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </footer>
        </>
    );
};

export default NavBar;
