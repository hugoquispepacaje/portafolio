import './Footer.css';
import { Fragment } from 'react';

type FooterProps = {

}

const Footer: React.FC<FooterProps> = ({}) => {
  const anno = new Date().getFullYear();
  return(
    <Fragment>
      <div className='ft-container'>
        <p className='ft-texto'>Portafolio Hugo Quispe</p>
        <p className='ft-texto'>{anno} - Proyecto Personal</p>
      </div>
    </Fragment>
  )
}

export default Footer;