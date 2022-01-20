import { ContactoItem } from "../models/ContactoItem";
export const ContactosDummy:ContactoItem[] = [
  {
    id: 1,
    icon: 'pi pi-whatsapp',
    url: 'https://api.whatsapp.com/send?phone=+56983499427&text=Hola!!!%0AEstaba viendo tu portafolio y me gustaria trabajar contigo.',
    esNuevaPestanna: true
  },
  {
    id: 2,
    icon: 'pi pi-envelope',
    url: 'mailto:hugo.quispe96@outlook.el',
    esNuevaPestanna: false
  },
  {
    id: 3,
    icon: 'pi pi-linkedin',
    url: 'https://www.linkedin.com/in/hugo-quispe-71b1b6119',
    esNuevaPestanna: true
  },
  {
    id: 4,
    icon: 'pi pi-phone',
    url: 'tel:+56983499427',
    esNuevaPestanna: false
  },
];
