import './Contacto.css';
import { Fragment } from 'react';
import { Button } from 'primereact/button';
import { ContactosDummy } from '../../data/contactos';
import { ContactoItem } from "../../models/ContactoItem";
import IdScroll from '../IdScroll/IdScroll';
type ContactoProps = {

}

const Contacto: React.FC<ContactoProps> = ({}) => {
  const seleccionar = (contacto:ContactoItem) => {
    if(contacto.esNuevaPestanna){
      window.open(contacto.url, "_blank");
    }
    else{
      window.open(contacto.url);
    }
  }
  const botones = ContactosDummy.map(
    (contacto)=><Button 
      key={contacto.id}
      icon={contacto.icon} 
      className="ct-boton p-button-outlined p-button-rounded" 
      onClick={()=>seleccionar(contacto)}
    />
  );
  return(
    <Fragment>
      <IdScroll id="contacto"/>
      <div className='ct-main'>
        <h3 className='ct-titulo'>¿Te gustar&iacute;a trabajar conmigo?</h3>
        <h4 className='ct-subtitulo'>Contactame :D</h4>
        <div className='ct-button-container'>
          {botones}
        </div>
      </div>
    </Fragment>
  )
}

export default Contacto;