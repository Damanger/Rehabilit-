import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Style from '../assets/css/inicio.module.css'

const Inicio = () =>{

    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const handleScroll = () => {
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (index) => {
        const sections = document.querySelectorAll('section');
        sections[index].scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <>
            <NavBar/>
                <aside className={Style.aqui}>
                    <div 
                        className={`${Style.circulo} ${activeSection === 0 ? Style.active : ''}`} 
                        onClick={() => scrollToSection(0)}
                    ></div>
                    <div 
                        className={`${Style.circulo} ${activeSection === 1 ? Style.active : ''}`} 
                        onClick={() => scrollToSection(1)}
                    ></div>
                    <div 
                        className={`${Style.circulo} ${activeSection === 2 ? Style.active : ''}`} 
                        onClick={() => scrollToSection(2)}
                    ></div>
                </aside>
                <section>
                    <div className={Style.figura}></div>
                </section>
                <section>
                    <div className={Style.figura2}></div>
                </section>
                <section>
                    <div className={Style.figura}></div>
                </section>
            <Footer/>
        </>
    );
};

export default Inicio