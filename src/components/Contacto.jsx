import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Style from '../assets/css/Contacto.module.css';

const Contacto = () => {
    return (
        <>
            <div className={Style.whats}>
                <a href="https://wa.me/5219515093674?text=Buen%20d%C3%ADa,%20quisiera%20hacer%20una%20consulta%20:)." 
                    target="_blank" 
                    rel='noreferrer' 
                    aria-label="Whatsapp"
                    data-tooltip-id="whatsapp-tooltip"
                    data-tooltip-content="Contáctanos">
                    <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                </a>
            </div>
        </>
    )
}

export default Contacto;
