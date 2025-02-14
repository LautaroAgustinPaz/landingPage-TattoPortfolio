import Banner from './components/Banner'
import Galeria from './components/Galeria'
import Navbar from './components/Navbar'
import Servicios from './components/Servicios'
import SobreMi from './components/SobreMi'
import Testimonios from './components/Testimonios'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Servicios></Servicios>
      <Galeria></Galeria>
      <SobreMi></SobreMi>
      <Testimonios></Testimonios>
    </>
  )
}

export default App
