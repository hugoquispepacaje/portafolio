import { Button } from 'primereact/button';

export class UtilModal {
  static HEADERV1:(title:string | undefined, subtitle:string | undefined) => any =
    (title, subtitle) => {
      return (
        <div>
          <p>{title}</p>
          <p className='md-subtitulo'>{subtitle}</p>
        </div>
      );
    }
  static HEADERV2:(title:string | undefined) => any =
    (title) => {
      return (
        <div>
          <p>{title}</p>
        </div>
      );
    }
  static CONTENTV1:(
    description:string | undefined, 
    listTitle:string | undefined,
    list:string[] | undefined
  ) => any =
    (description, listTitle, list) => {
      return (
        <div>
          <p>{description}</p>
          <br />
          <p>{listTitle}</p>
          <br />
          <ul>
            { Array.isArray(list) && list.map((itemList:string)=><li key={itemList} className='md-li'> • {itemList}</li>)}
          </ul>
        </div>
      );
    }
    static CONTENTV2:(
      description:string | undefined, 
      listTitle:string | undefined,
      list:string[] | undefined,
      urlDemo:string | undefined,
      urlGitHub:string | undefined
    ) => any =
      (description, listTitle, list, urlDemo, urlGitHub) => {
        const abrirLink = (link:string = "") => {
          window.open(link, "_blank");
        }
        return (
          <div>
            <p>{description}</p>
            <br />
            <p>{listTitle}</p>
            <br />
            <ul>
              { Array.isArray(list) && list.map((itemList:string)=><li key={itemList} className='md-li'> • {itemList}</li>)}
            </ul>
            <div className='md-content-v2'>
              <Button 
                icon='pi pi-github' 
                className="ct-boton p-button-outlined p-button-rounded" 
                onClick={()=>abrirLink(urlGitHub)}
              />
              <Button 
                icon='pi pi-desktop'
                className="ct-boton p-button-outlined p-button-rounded" 
                onClick={()=>abrirLink(urlDemo)}
              />
            </div>
          </div>
        );
      }
}