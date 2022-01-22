import './Certificaciones.css';
import { Fragment } from 'react';
import { CertificacionesDummy } from '../../data/certificaciones';
import Carrusel from '../Carrusel/Carrusel';

type CertificacionesProps = {

}

const Experiencia: React.FC<CertificacionesProps> = ({}) => {
  return(
    <Fragment>
      <div className='cr-main'>
        <h3 className='cr-titulo'>Certificaciones</h3>
        <Carrusel items={CertificacionesDummy}/>
      </div>
    </Fragment>
  )
}

export default Experiencia;