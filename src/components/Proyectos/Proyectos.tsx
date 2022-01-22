import './Proyectos.css';
import { Fragment } from 'react';
import { ProyectosDummy } from '../../data/proyectos';
import Carrusel from '../Carrusel/Carrusel';
import IdScroll from '../IdScroll/IdScroll';
import { Constantes } from '../../utiles/constantes';
import { ModalContent } from '../../models/ModalContent';

type ProyectosProps = {
  activarModal: (content: ModalContent, version: number) => void;
}

const Proyectos: React.FC<ProyectosProps> = ({activarModal}) => {
  return(
    <Fragment>
      <IdScroll id="proyectos"/>
      <div className='pp-main'>
        <h3 className='pp-titulo'>Proyectos Personales</h3>
        <Carrusel 
          items={ProyectosDummy}
          version={Constantes.V2}
          versionModal={Constantes.V2}
          activarModal={activarModal}
          />
      </div>
    </Fragment>
  )
}

export default Proyectos;