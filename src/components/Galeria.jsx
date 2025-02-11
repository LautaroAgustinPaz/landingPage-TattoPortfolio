import React, { useState } from 'react'

const Galeria = () => {

  // Botones activos
  const [activeButton, setActiveButton] = useState(null);

  // Cambio de categoria
  const[categoria, setCategoria] = useState("tradicional"); // Valor por defecto TRADICIONAL

  // Rutas de imágenes sin necesidad de importar
  const imagenes = {
    tradicional: [1, 2, 3, 4, 5, 6].map((num) => `/imgs/tradicional/imagen-${num}.jpg`),
    realismo: [1, 2, 3, 4, 5, 6].map((num) => `/imgs/realismo/imagen-${num}.jpg`),
    geométrico: [1, 2, 3, 4, 5, 6].map((num) => `/imgs/geometrico/imagen-${num}.jpg`),
    blackwork: [1, 2, 3, 4, 5, 6].map((num) => `/imgs/blackwork/imagen-${num}.jpg`),
  };


  return (
    
    <div id="galeria" className='container-fluid contenedor-galeria'>
        <h2 className="text-center galeria-title">Galeria</h2>

        {/* Botones Grupo */}
        <div className="btn-group contenedor-botones-grupo" role="group" aria-label="Basic radio toggle button group">
          <input onClick={() => setCategoria("tradicional")} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
          <label className="btn btn-1" htmlFor="btnradio1">Tradicional</label>

          <input onClick={() => setCategoria("realismo")} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
          <label className="btn btn-2" htmlFor="btnradio2">Realismo</label>

          <input onClick={() => setCategoria("geométrico")}  type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
          <label className="btn btn-3" htmlFor="btnradio3">Geométrico</label>

          <input onClick={() => setCategoria("blackwork")}  type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
          <label className="btn btn-4" htmlFor="btnradio4">Blackwork</label>
        </div>

        {/* Galeria de imagenes */}
        <div className="container-fluid contenedor-galeria">
          <div className="row filas">
          {imagenes[categoria].map((img, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 galeria-cards">
              <img src={img} alt={`Imagen ${index + 1}`} className="img-fluid mb-4 img-card" />
            </div>
          ))}
          </div>
        </div>

        {/* Boton volver hacia arriba */}
        <div className='container-fluid contenedor-elegir-categoria'>
          <a href="#galeria" class="btn btn-elegir-categoria">Elegir otra categoria</a>
        </div>

    </div>
  )
}

export default Galeria
