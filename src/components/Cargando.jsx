import React, { useEffect, useState } from 'react';
import Style from'../assets/css/cargando.module.css';

const Cargando = ({ imagen }) => {
    const [mostrarLoader, setMostrarLoader] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMostrarLoader(false);
        }, 750);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={Style.carga}>
            <div className={`${Style.cargando} ${mostrarLoader ? 'visible' : 'oculto'}`}>
                <img className={Style.imagen} src={imagen} alt="Cargando..." />
            </div>
        </div>
    );
};

export default Cargando;
