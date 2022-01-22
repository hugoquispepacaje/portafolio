import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Experiencia from './components/Experiencia/Experiencia';
import Proyectos from './components/Proyectos/Proyectos';
import SobreMi from './components/SobreMi/SobreMi';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Certificaciones from './components/Certificaciones/Certificaciones';
import Modal from './components/Modal/Modal';
import { ModalContent } from './models/ModalContent';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useState } from 'react';

function App() {
  const [modalState, setModalState] = useState(false);
  const [contentState, setContentState] = useState({});
  const [versionState, setVersionState] = useState(1);
  const activarModal = (content: ModalContent, version: number) => {
    setModalState(true);
    setContentState(content);
    setVersionState(version);
  }
  const desactivarModal = () => {
    setModalState(false);
  }
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Tecnologias />
      <Experiencia 
        activarModal={activarModal}
      />
      <Certificaciones />
      <Proyectos 
        activarModal={activarModal}
      />
      <SobreMi />
      <Contacto />
      <Footer />
      <Modal 
        esActivo={modalState}
        content={contentState}
        version={versionState}
        desactivarModal={desactivarModal}
      />
    </div>
  )
}

export default App
