import './SobreMi.css';
import { Fragment } from 'react';
import IdScroll from '../IdScroll/IdScroll';

type SobreMiProps = {

}

const SobreMi: React.FC<SobreMiProps> = ({}) => {
  return(
    <Fragment>
      <IdScroll id="sobre-mi"/>
      <div className='sm-main'>
        <h3 className='sm-titulo'>Sobre Mi</h3>
        <p className='sm-cuerpo'>Me encanta viajar, actualmente me encuentro viviendo en Buenos Aires, Argentina.<br></br> 
          Mi deporte favorito es la Natación, mi comida favorita es el Tallar&iacute;n Saltado y mi animal favorito es la tortuga marina. <br></br> 
          En mis tiempos libres me gusta salir a trotar y consumir la droga del League of Leguends hablando con mis amigos por Discord.
        </p>
      </div>
    </Fragment>
  )
}

export default SobreMi;