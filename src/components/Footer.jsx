import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid contenedor-footer'>
        <div className='row'>

                {/* Columna 1 - Foto */}
                <div className="col-md-4 columna-img">
                    <img src="public\imgs\logo-tatto.png" alt="Logo" className="img-fluid footer-img"></img>
                </div>

                {/* Columna 2 - Indice */}
                <div className="col-md-4 columna-indice">
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
                <div className="col-md-4 columna-contacto">
                    <h5 class="contacto-titulo">Contacto</h5>
                    <p className='contacto-p'><i class="bi bi-whatsapp text-light"></i> +54 1123905187</p>
                    <p className='contacto-p'><i class="bi bi-geo-alt text-light"></i> Calle Falsa 1284, CABA, Argentina</p>
                </div>

        </div>
    </div>
  )
}

export default Footer
