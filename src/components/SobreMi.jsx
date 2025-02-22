import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok} from '@fortawesome/free-brands-svg-icons';
import React from 'react'

const SobreMi = () => {
    
  return (

    <section id='sobre-mi' className='container-fluid contenedor-sobremi'>
        <h2 className='sobre-mi_titulo text-center'>Sobre mi</h2>

        <div className="row sobre-mi_row">
            <div className="col-sm-12 col-md-6 col-lg-6 columna-img">
                <img className='foto-biografia' src="src/assets/imgs/foto-tatuador.jpg" alt="foto-tatuador"/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 columna-biografia">
                <h2 className='biografia_titulo'>Nahuel Diaz</h2>
                <p className='biografia_parrafo'>¡Hola! Soy Nahuel Díaz, un apasionado tatuador residente en la vibrante ciudad de Buenos Aires. Desde muy joven, descubrí que el arte era mi forma de expresarme y conectar con el mundo. Mi viaje en el mundo del tatuaje comenzó cuando tenía apenas 16 años, y desde entonces he dedicado mi vida a perfeccionar esta técnica ancestral.</p>

                <div className='grupo-redes-sociales'>
                     <div className='contenedor-redondo'><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}  className='iconos-redes'/></a></div>
                        <div className='contenedor-redondo'><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}  className='iconos-redes'/></a></div>
                    <div className='contenedor-redondo'><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} className='iconos-redes'/></a></div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default SobreMi
