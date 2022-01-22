import { Fragment } from 'react';
import { Carousel } from 'primereact/carousel';
import { CarruselItem } from '../../models/CarruselItem';
import { Constantes } from '../../utiles/constantes'; 
import { Button } from 'primereact/button';
import { ModalContent } from '../../models/ModalContent';

import './Carrusel.css';
type CarruselProps = {
  items: CarruselItem[],
  version?: number,
  versionModal?: number,
  activarModal?: (content: ModalContent, version: number) => void;
}

const Carrusel: React.FC<CarruselProps> = ({ 
  items, 
  version,
  versionModal, 
  activarModal=()=>{}
}) => {
  const seleccionar = (modalContent:ModalContent={}) => {
    let versionSelected;
    switch(versionModal) {
      case Constantes.V1:
        versionSelected=Constantes.V1;
        break;
      case Constantes.V2:
        versionSelected=Constantes.V2;
        break;
      default:
        versionSelected=Constantes.V1;
        break;
    }
    activarModal(modalContent,versionSelected);
  }
  
  const itemsTemplate1 = (item:CarruselItem) => {
    return (
        <Fragment>
          <img src={item.url} alt={item.url} className='cl-imagen'/>
          <h4 className='cl-titulo'>{item.titulo}</h4>
        </Fragment>
    );
  }

  const itemsTemplate2 = (item:CarruselItem) => {
    return (
        <Fragment>
          <img src={item.url} alt={item.url} className='cl-imagen'/>
          <h4 className='cl-titulo'>{item.titulo}</h4>
          <Button 
            className="cl-boton p-button-outlined"
            label="Ver más" 
            onClick={()=>seleccionar(item.modalContent)}
          />
        </Fragment>
    );
  }
  let templateSelected:any;
  switch(version) {
    case Constantes.V1:
      templateSelected=itemsTemplate1;
      break;
    case Constantes.V2:
      templateSelected=itemsTemplate2;
      break;
    default:
      templateSelected=itemsTemplate1;
      break;
  }
  
  const responsiveOptions = [
    {
        breakpoint: '1000px',
        numVisible: 1,
        numScroll: 1
    },
  ];
  return(
    <Fragment>
      <Carousel 
        value={items} 
        numVisible={3} 
        numScroll={1} 
        responsiveOptions={responsiveOptions}
        itemTemplate={templateSelected}/>
    </Fragment>
  )
}

export default Carrusel;