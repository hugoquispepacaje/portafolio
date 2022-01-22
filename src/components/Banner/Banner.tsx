import './Banner.css';
import { Fragment } from 'react';
import IdScroll from '../IdScroll/IdScroll';
import { BannerDummy } from '../../data/banner';
type BannerProps = {

}

const Banner: React.FC<BannerProps> = ({}) => {
  return(
    <Fragment>
      <IdScroll id="inicio"/>
      <div className="bn-banner">
        <div className="bn-descripcion">
          
          <h3 className="bn-texto">{BannerDummy.saludo}<br/>{BannerDummy.presentacion}</h3>
            <h1 className="bn-title">{BannerDummy.nombre}</h1>
            <h3 className="bn-texto">
            {BannerDummy.titulo}<br/>
            {BannerDummy.bienvenida}</h3>
        </div>
        <div className="bn-contenedor-imagen">
          <img className="bn-imagen" src={BannerDummy.imagen} alt={BannerDummy.altImagen} />
        </div>
      </div>
    </Fragment>
  )
}

export default Banner;