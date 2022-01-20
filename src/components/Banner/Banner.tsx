import './Banner.css';
import { Fragment } from 'react';
import IdScroll from '../IdScroll/IdScroll';
import hugo from '../../images/hugo.png';
type BannerProps = {

}

const Banner: React.FC<BannerProps> = ({}) => {
  return(
    <Fragment>
      <IdScroll id="inicio"/>
      <div className="bn-banner">
        <div className="bn-descripcion">
          
          <h3 className="bn-texto">Hola!!<br/> Soy </h3>
            <h1 className="bn-title">Hugo Quispe Pacaje</h1>
            <h3 className="bn-texto">
            Ing. Civil en Computaci&oacute;n e Inform&aacute;tica<br/>
            Bienvenido a mi Portafolio :D</h3>
        </div>
        <div className="bn-contenedor-imagen">
          <img className="bn-imagen" src={hugo} alt="hugo quispe" />
        </div>
      </div>
    </Fragment>
  )
}

export default Banner;