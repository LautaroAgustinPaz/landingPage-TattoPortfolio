import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {

  const redirigirWhatsApp = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };

  return (
    <section id='inicio' className='container-banner_principal'>
      <video autoPlay muted loop id="background-video">
        <source src="public/vids/video-2.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className='content'>
        <h1 className='banner-p_titulo'>El arte en tu piel,<br />hecho a medida.</h1>
        <button className="btn-custom"
          onClick={redirigirWhatsApp}>
          <FontAwesomeIcon className='i' icon={faWhatsapp}/>
          Agendar turno
        </button>
      </div>
    </section>
  );
};

export default Banner;