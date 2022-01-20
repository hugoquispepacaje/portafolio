import './Proyectos.css';
import { Fragment } from 'react';
import { ProyectosDummy } from '../../data/proyectos';
import Carrusel from '../Carrusel/Carrusel';
import IdScroll from '../IdScroll/IdScroll';

type ProyectosProps = {

}

const Proyectos: React.FC<ProyectosProps> = ({}) => {
  return(
    <Fragment>
      <IdScroll id="proyectos"/>
      <div className='pp-main'>
        <h3 className='pp-titulo'>Proyectos Personales</h3>
        <Carrusel items={ProyectosDummy}/>
      </div>
    </Fragment>
  )
}

export default Proyectos;