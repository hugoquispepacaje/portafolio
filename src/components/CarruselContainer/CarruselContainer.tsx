import './CarruselContainer.css';
import { Fragment } from 'react';
import { Tecnologia } from '../../models/Tecnologia'
import Carrusel from '../Carrusel/Carrusel';
type CarruselContainerProps = {
  tecnologia:Tecnologia
}

const CarruselContainer: React.FC<CarruselContainerProps> = ({
  tecnologia
}) => {
  return(
    <Fragment>
      <div className='cc-container'>
        <div className='cc-titulo-carrusel'>
          <h3 className='cc-titulo'>{tecnologia.titulo}</h3>
        </div>
        <div className='cc-carrusel'>
          <Carrusel items={tecnologia.items}/>
        </div>
      </div>
    </Fragment>
  )
}

export default CarruselContainer;