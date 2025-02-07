import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-dark fixed-top">
      <div className="container-fluid">
        
        <img className='navbar-logo' src="src/assets/imgs/logo-tatto.png"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <i className="navbar-toggler-icon"></i>
        </button>

        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            {/* IMG logo */}
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          {/* BODY */}
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Galería</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre mí</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Opiniones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ubicación</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
    </>
  )
}

export default Navbar
