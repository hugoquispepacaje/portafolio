import './Sidebar.css';
import { Fragment } from 'react';
import { Sidebar as SBar } from 'primereact/sidebar';
import { menuDummy } from '../../data/menu';

type SidebarProps = {
  esActivo:boolean;
  desactivarSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({esActivo, desactivarSidebar}) => {
  const menuList = menuDummy.map((item)=>{
    return(
      <li className="sd-li" key={item.id}><a className="sd-a" href={item.url} onClick={() => desactivarMenu()}>{item.descripcion}</a></li>
    )
  });

  const desactivarMenu = () => {
    desactivarSidebar();
  }

  return(
    <Fragment>
      <SBar blockScroll={true} position='right' visible={esActivo} onHide={() => desactivarMenu()}>
        <ul>
          {menuList}
        </ul>
      </SBar>
    </Fragment>
  )
}

export default Sidebar;