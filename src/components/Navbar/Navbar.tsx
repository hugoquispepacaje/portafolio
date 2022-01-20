import './Navbar.css';
import { Fragment } from 'react';
import logo from '../../../src/logo.svg';
import { menuDummy } from '../../data/menu';

type NavbarProps = {
  activarSidebar: () => void;
 }

const Navbar: React.FC<NavbarProps> = ({ activarSidebar }) => {
  const menuList = menuDummy.map((item)=>{
    return(
      <li key={item.id}><a className="nv-a" href={item.url}>{item.descripcion}</a></li>
    )
  });

  const activarMenu = () => {
    activarSidebar();
  }

  return(
    <Fragment>
      <nav className="nv-nav">
        <div className="nv-nav-izquierda">
          <a href="#inicio"><img className="nv-logo" src={logo} /></a>
          <h1 className="nv-item-logo"><a className="nv-a" href="#inicio">Hugo Quispe</a></h1>
        </div>
        <div className="nv-nav-derecha">
          <ul className="nv-navbar">
            {menuList}
          </ul>
          <div className="nv-hamburguer" onClick={activarMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar;