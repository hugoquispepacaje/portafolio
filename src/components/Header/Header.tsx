import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Fragment, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
interface Props {
}

const Header = () => {
  const [sidebarState, setSidebarState] = useState(false);

  const activarSidabar = () => {
    setSidebarState(true);
  }
  const desactivarSidebar = () => {
    setSidebarState(false);
  }

  return(
    <Fragment>
      <Navbar activarSidebar={activarSidabar}/>
      <Sidebar esActivo={sidebarState} desactivarSidebar={desactivarSidebar}/>
    </Fragment>
  )
}

export default Header;