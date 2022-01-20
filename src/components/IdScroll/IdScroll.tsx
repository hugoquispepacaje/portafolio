import './IdScroll.css';
import { Fragment } from 'react';
type IdScrollProps = {
  id:string
}

const IdScroll: React.FC<IdScrollProps> = ({ id }) => {
  return(
    <Fragment>
      <div id={id} className="is-scroll"></div>
    </Fragment>
  )
}

export default IdScroll;