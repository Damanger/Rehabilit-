import React, { useEffect } from 'react';
import '../assets/css/contacto.css'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contacto = () =>{

    useEffect(() => {
        // Obtén el formulario
        const form = document.querySelector('form');
    
        // Verifica si el formulario existe antes de agregar el evento 'submit'
        if (form) {
            // Agrega un evento 'submit' al formulario
            form.addEventListener('submit', function(event) {
                event.preventDefault();
    
                // Inicializa EmailJS con tu clave pública
                emailjs.init('1wQ5hcO2lkSg1UWH6');

                // Obtén los valores de los campos del formulario
                const fullNameInput = document.querySelector('#Nombre');
                const emailInput = document.querySelector('#Correo');
                const phoneNumberInput = document.querySelector('#Telefono');
                const messageTextarea = document.querySelector('textarea[placeholder="  Escriba su mensaje"]');

                // Crea un objeto con los datos del formulario
                const formData = {
                    name: fullNameInput.value,
                    email: emailInput.value,
                    phoneNumber: phoneNumberInput.value,
                    subject: "Cita u observación",
                    message: messageTextarea.value
                };

                // Envía el formulario a través de EmailJS
                emailjs.send("service_7ac3amo", "template_1ngo741", {from_name: 'Name: ' + formData.name + '\nEmail: ' + formData.email + '\nPhone Number: ' + formData.phoneNumber + '\nSubject: ' + formData.subject, message: '\nMessage:' + formData.message})
                .then(function(response) {
                    Swal.fire(
                        '¡Correo Enviado!',
                        '¡Tu correo fue enviado exitosamente!',
                        'success'
                    );
                }, function(error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '¡Algo salió mal, no pudimos enviar tu correo!'
                    });
                });
            });
        }
    }, []);
    
    return (
        <>
            <div className="container">
                <span className="big-circle"></span>
                <img src="shape.png" className="square" alt="" />
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Contáctanos y agenda tu cita</h3>
                        <p className="text">
                            Horarios: 
                            Lunes a Viernes de 09:00-20:00
                            Sábados de 09:00-15:00
                        </p>
                        
                        <div className="info">
                            <div className="information">
                                <img src="location.png" className="icon" alt="" />
                                <a href='https://maps.app.goo.gl/Lou7GrYr9LE6iYue6' target='_blank' rel='noreferrer'>21 de Marzo 604, FERROCARRIL, Agencia de Policia de Cinco Señores, 68120 Oaxaca de Juárez, Oax.</a>
                            </div>
                            <div className="information">
                                <img src="email.png" className="icon" alt="" />
                                <a href="mailto:rehabilitefisioterapiaoax@gmail.com">rehabilitefisioterapiaoax@gmail.com</a>
                            </div>
                            <div className="information">
                                <img src="phone.png" className="icon" alt="" />
                                <a href="tel:+529515093674"><p>+529515093674</p></a>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Siguenos en nuestras redes sociales :</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/rehabiliteoax" target='_blank' rel='noreferrer'>
                                    <FaFacebook/>
                                </a>
                                <a href="https://www.instagram.com/rehabilite_oax/" target='_blank' rel='noreferrer'>
                                    <FaInstagram/>
                                </a>
                                <a href="https://wa.me/529515093674?text=Quisiera%20agendar%20una%20cita%20por%20favor." target='_blank' rel='noreferrer'>
                                    <FaWhatsapp/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form>
                            <h3 className="title">Contáctanos</h3>
                            <div className="input-container">
                                <input type="text" name="name" placeholder='  Nombre' id='Nombre' className="input" autoComplete="off"/>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" placeholder='  Correo electrónico' id='Correo' className="input" autoComplete="off"/>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" placeholder='  Teléfono' id='Telefono' className="input" autoComplete="off"/>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" placeholder='  Escriba su mensaje' className="input"/>
                            </div>
                                <input type="submit" value="Enviar" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacto