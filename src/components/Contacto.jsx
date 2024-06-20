import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tooltip';
import Style from '../assets/css/Contacto.module.css';

const Contacto = () => {
    return (
        <>
            <div className={Style.whats}>
                <a href="https://wa.me/5219515093674?text=Buen%20d%C3%ADa,%20quisiera%20saber%20si%20tiene%20fechas%20disponibles." 
                    target="_blank" 
                    rel='noreferrer' 
                    aria-label="Whatsapp"
                    data-tooltip-id="whatsapp-tooltip"
                    data-tooltip-content="Contáctanos">
                    <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                </a>
                <Tooltip id="whatsapp-tooltip" place="left" type="dark" effect="solid"/>
            </div>
        </>
    )
}

export default Contacto;
