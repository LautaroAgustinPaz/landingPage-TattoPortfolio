import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
         });
     };
    
  return (
    <div className='container-fluid contenedor-footer'>
        <div className='row'>

            {/* Columna 1 - Foto */}
            <dxiv className="col-sm-12 col-md-4 columna-img">
                <img src="public\imgs\logo-tatto.png" alt="Logo" className="img-fluid footer-img"></img>
            </dxiv>

            {/* Columna 2 - Indice */}
            <div className="col-xs-12 col-sm-6 col-md-4 columna-indice">
                <h5 class="indice-titulo">Índice</h5>
                <ul class="list-unstyled indice-lista">
                    <li><a href="#" class="indice-text text-decoration-none">Servicios</a></li>
                    <li><a href="#" class="indice-text text-decoration-none">Galería</a></li>
                    <li><a href="#" class="indice-text text-decoration-none">Sobre mí</a></li>
                    <li><a href="#" class="indice-text text-decoration-none">Opiniones</a></li>
                    <li><a href="#" class="indice-text text-decoration-none">Ubicación</a></li>
                </ul>
            </div>

            {/* Columna 3 - Contacto */}
            <div className="col-xs-12 col-sm-6 col-md-4 columna-contacto">
                <h5 class="contacto-titulo">Contacto</h5>
                <div className='contenedor-parrafos'>   
                <p className='contacto-p'><i class="bi bi-whatsapp text-light"></i><FontAwesomeIcon icon={faPhone}  className='icono-phone'/> +54 1123905187</p>
                <p className='contacto-p'><i class="bi bi-geo-alt text-light"></i><FontAwesomeIcon icon={faLocationDot}  className='icono-location'/> Calle Falsa 1284, Caba, <br />Argentina</p>
                </div>
                <div className='contenedor-redes-sociales'>
                    <div className='contenedor-redondo'><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp}  className='iconos-redes'/></a></div>
                    <div className='contenedor-redondo'><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}  className='iconos-redes'/></a></div>
                    <div className='contenedor-redondo'><a href="https://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className='iconos-redes'/></a></div>
                </div>
            </div>     
        </div>
        
        {/* Columna - Boton Arriba */}
        <div className='container-fluid columna-btn-arriba'>
            <div className='row'>
                <div className='col-12 contenedor-btn-arriba'>
                    <div className="btn-arriba" onClick={handleScrollToTop}>
                        <FontAwesomeIcon icon={faChevronUp} className="icon-arriba" />
                    </div>
                </div>
            </div>
        </div>

        {/* Copyright y Firma */}
        <div className='container-fluid columna-copyright'>
            <div className='row'>
                <div className='col-12 contenedor-copyright'>
                    <div className='negocio-y-derechos'>
                        <p className='parrafo'>2025 - Nahuel Diaz</p>
                        <p className='parrafo'>Todos los derechos reservados.</p>
                    </div>
                    <p className='firma'>Desarrollada por: <br /><a href="https://www.linkedin.com/in/lautaro-paz-71795b243/" target="_blank" rel="noopener noreferrer">Lautaro Paz</a></p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
