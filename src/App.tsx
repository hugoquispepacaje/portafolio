import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Experiencia from './components/Experiencia/Experiencia';
import Proyectos from './components/Proyectos/Proyectos';
import SobreMi from './components/SobreMi/SobreMi';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Tecnologias />
      <Experiencia />
      <Proyectos />
      <SobreMi />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
