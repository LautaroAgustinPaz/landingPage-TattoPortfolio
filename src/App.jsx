import Banner from './components/Banner'
import Galeria from './components/Galeria'
import Navbar from './components/Navbar'
import Servicios from './components/Servicios'
import SobreMi from './components/SobreMi'
import Testimonios from './components/Testimonios'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Servicios></Servicios>
      <Galeria></Galeria>
      <SobreMi></SobreMi>
      <Testimonios></Testimonios>
      <Ubicacion></Ubicacion>
      <Footer></Footer>
    </>
  )
}

export default App
