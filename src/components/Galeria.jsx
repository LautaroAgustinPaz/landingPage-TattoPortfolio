import React, { useState } from 'react'

const Galeria = () => {

  // Cambio de categoria
  const [categoria, setCategoria] = useState("tradicional"); // Valor por defecto TRADICIONAL

  // Rutas de imágenes sin necesidad de importar
  const imagenes = {
    tradicional: [1, 2, 3, 4, 5, 6].map((num) => `/imgs/tradicional/imagen-${num}.jpg`),
    realismo: [1, 2, 3, 4, 5, 6].map((num) => `/imgs/realismo/imagen-${num}.jpg`),
    geométrico: [1, 2, 3, 4, 5, 6].map((num) => `/imgs/geometrico/imagen-${num}.jpg`),
    blackwork: [1, 2, 3, 4, 5, 6].map((num) => `/imgs/blackwork/imagen-${num}.jpg`),
  };

  return (
    
    <section id="galeria" className='contenedor-galeria'>
        <h2 className="text-center galeria-title">Galeria</h2>

        {/* Botones Grupo */}
        <div className="btn-group contenedor-botones-grupo" role="group" aria-label="Basic radio toggle button group">
          {["tradicional", "realismo", "geométrico", "blackwork"].map((tipo, index) => (
          <React.Fragment key={tipo}>
            <input
              onClick={() => setCategoria(tipo)}
              type="radio"
              className="btn-check"
              name="btnradio"
              id={`btnradio${index + 1}`}
              autoComplete="off"
              defaultChecked={categoria === tipo}
            />
            <label 
              className={`btn btn-${index + 1} ${categoria === tipo ? "activo" : ""}`} 
              htmlFor={`btnradio${index + 1}`}
            >
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </label>
          </React.Fragment>
        ))}
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

    </section>
  )
}

export default Galeria
