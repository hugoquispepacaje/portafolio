import './Experiencia.css';
import { Fragment } from 'react';
import { ExperienciaDummy } from '../../data/experiencia';
import Carrusel from '../Carrusel/Carrusel';
import IdScroll from '../IdScroll/IdScroll';

type ExperienciaProps = {

}

const Experiencia: React.FC<ExperienciaProps> = ({}) => {
  return(
    <Fragment>
      <IdScroll id="experiencia"/>
      <div className='ex-main'>
        <h3 className='ex-titulo'>Experiencia</h3>
        <Carrusel items={ExperienciaDummy}/>
      </div>
    </Fragment>
  )
}

export default Experiencia;