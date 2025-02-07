import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Servicios = () => {
  return (
    <section className="container-fluid servicios-contenedor">
      <h2 className="text-center servicios-title">Servicios</h2>
      <div className="row">
        {/* Card 1: Diseños personalizados */}
        <div className="col-md-4 mb-5">
          <div className="card h-100 servicios-cards">
            <img
              src="src/assets/imgs/cards/card-1.jpeg"
              className="card-img-top servicios-imgs"
              alt="Diseños personalizados"
            />
            <div className="card-body">
              <h5 className="card-title">Diseños personalizados</h5>
            </div>
          </div>
        </div>

        {/* Card 2: Tapado de tatuajes antiguos */}
        <div className="col-md-4 mb-5">
          <div className="card h-100 servicios-cards">
            <img
              src="src/assets/imgs/cards/card-2.jpeg"
              className="card-img-top servicios-imgs"
              alt="Tapado de tatuajes antiguos"
            />
            <div className="card-body">
              <h5 className="card-title">Tapado de tatuajes antiguos</h5>
            </div>
          </div>
        </div>

        {/* Card 3: Productos de cuidado post-tatuaje */}
        <div className="col-md-4 mb-5">
          <div className="card h-100 servicios-cards">
            <img
              src="src/assets/imgs/cards/card-3.jpeg"
              className="card-img-top servicios-imgs"
              alt="Productos de cuidado post-tatuaje"
            />
            <div className="card-body">
              <h5 className="card-title">Productos de cuidado post-tatuaje</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;