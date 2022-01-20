import { Fragment, useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { CarruselItem } from '../../models/CarruselItem';
import './Carrusel.css';
type CarruselProps = {
  items: CarruselItem[]
}

const Carrusel: React.FC<CarruselProps> = ({ items }) => {
  const itemsTemplate = (item:CarruselItem) => {
    return (
        <Fragment>
          <img src={item.url} alt={item.url} className='cl-imagen'/>
          <h4 className='cl-titulo'>{item.titulo}</h4>
        </Fragment>
    );
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
        circular
        responsiveOptions={responsiveOptions}
        itemTemplate={itemsTemplate}/>
    </Fragment>
  )
}

export default Carrusel;