import { Fragment, useState } from 'react';
import { Constantes } from '../../utiles/constantes'; 
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './Modal.css';
import { ModalContent } from '../../models/ModalContent';
import { UtilModal } from './Utiles'

type ModalProps = {
  esActivo: boolean, 
  content: ModalContent,
  version: number,
  desactivarModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ 
  esActivo, 
  content, 
  version, 
  desactivarModal }) => {
  const onHide = () => {
    desactivarModal();
  }
  const renderFooter = () => {
    return (
      <div>
        <Button label="Cerrar" icon="pi pi-times" onClick={() => onHide()} className="p-button-outlined md-boton" />
      </div>
    );
  }
  let versionHeaderSelected;
  let versionContentSelected;
  switch(version){
    case Constantes.V1:
        versionHeaderSelected=UtilModal.HEADERV1(content.titulo, content.subtitulo);
        versionContentSelected=UtilModal.CONTENTV1(content.descripcion, content.tituloLista, content.lista);
        break;
      case Constantes.V2:
        versionHeaderSelected=UtilModal.HEADERV2(content.titulo);
        versionContentSelected=UtilModal.CONTENTV2(content.descripcion, content.tituloLista, content.lista, content.urlDemo, content.urlGitHub);
        break;
      default:
        versionHeaderSelected=UtilModal.HEADERV1(content.titulo, content.subtitulo);
        versionContentSelected=UtilModal.CONTENTV1(content.descripcion, content.tituloLista, content.lista);
        break;
  }
  return(
    <Fragment>
      <Dialog 
        visible={esActivo} 
        onHide={() => onHide()} 
        breakpoints={{'960px': '75vw', '640px': '100vw'}} 
        draggable={false}
        maximizable={true}
        className='md-modal'
        style={{width: '50vw'}}
        header={versionHeaderSelected}
        footer={renderFooter()}
      >
        {versionContentSelected}
      </Dialog>
    </Fragment>
  )
}

export default Modal;