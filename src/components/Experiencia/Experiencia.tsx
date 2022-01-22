import './Experiencia.css';
import { Fragment } from 'react';
import { ExperienciaDummy } from '../../data/experiencia';
import Carrusel from '../Carrusel/Carrusel';
import IdScroll from '../IdScroll/IdScroll';
import { Constantes } from '../../utiles/constantes';
import { ModalContent } from '../../models/ModalContent';

type ExperienciaProps = {
  activarModal: (content: ModalContent, version: number) => void;
}

const Experiencia: React.FC<ExperienciaProps> = ({activarModal}) => {
  return(
    <Fragment>
      <IdScroll id="experiencia"/>
      <div className='ex-main'>
        <h3 className='ex-titulo'>Experiencia</h3>
        <Carrusel 
          items={ExperienciaDummy} 
          version={Constantes.V2}
          versionModal={Constantes.V1}
          activarModal={activarModal}
        />
      </div>
    </Fragment>
  )
}

export default Experiencia;