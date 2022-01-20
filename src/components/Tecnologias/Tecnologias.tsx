import './Tecnologias.css';
import { Fragment } from 'react';
import CarruselContainer from '../CarruselContainer/CarruselContainer';
import { TecnologiaDummy } from '../../data/tecnologia';
import IdScroll from '../IdScroll/IdScroll';
type TecnologiasProps = {

}

const Tecnologias: React.FC<TecnologiasProps> = ({}) => {
  const tecnologias = TecnologiaDummy.map(
    (tecnologia)=><CarruselContainer key={tecnologia.id} tecnologia={tecnologia}/>
  );
  return(
    <Fragment>
      <IdScroll id="tecnologias"/>
      <div className='tc-main'>
        <h3 className='tc-titulo'>Tecnolog&iacute;as Manejadas</h3>
        {tecnologias}
      </div>
    </Fragment>
  )
}

export default Tecnologias;