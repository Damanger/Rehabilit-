import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tooltip';
import Style from '../assets/css/Contacto.module.css';

const Contacto = () => {
    return (
        <div className={Style.whats}>
            <a href="https://wa.me/5219514084765?text=Buen%20d%C3%ADa,%20quise%20contactarlo%20para%20desarrollar%20un%20servicio%20web." 
                target="_blank" 
                rel='noreferrer' 
                aria-label="Whatsapp"
                data-tooltip-id="whatsapp-tooltip"
                data-tooltip-content="Contáctanos">
                <span><FontAwesomeIcon icon={faWhatsapp} /></span>
            </a>
            <Tooltip id="whatsapp-tooltip" place="left" type="dark" effect="solid"/>
        </div>
    )
}

export default Contacto;
