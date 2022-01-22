import { CarruselItem } from "../models/CarruselItem";
export const ProyectosDummy:CarruselItem[] = [
  {
    id: 1,
    titulo: 'Mascotas perdidas Arica',
    url: '/assets/svg/mp-logo.svg',
    modalContent: {
      titulo:'Mascotas perdidas Arica',
      descripcion: 'Proyecto Personal creado el 2020, su objetivo fue adentrarse en Laravel a través de una pequeña aplicación para encontrar mascotas perdidas.',
      tituloLista: 'Tecnologías Ocupadas:',
      lista: [
        'Laravel.',
        'MySQL.',
        'Bootstrap.',
      ],
      urlDemo: 'https://mascotasperdidasarica.herokuapp.com',
      urlGitHub: 'https://github.com/hugoquispepacaje/mascotasperdidas'
    }
  },
  {
    id: 2,
    titulo: 'Necesito mi chela',
    url: '/assets/svg/nmc-logo.svg',
    modalContent: {
      titulo:'Necesito mi chela',
      descripcion: 'Proyecto Personal creado el 2020, realizado para un mayor entendimiento de Vue, la subida de imágenes a imgbb y la localización.',
      tituloLista: 'Tecnologías Ocupadas:',
      lista: [
        'Vue 2.',
        'PostgreSQL.',
        'Vuetify.',
        'NodeJs.',
        'Express.',
      ],
      urlDemo: 'https://necesitomichela.hugoquispe.cl',
      urlGitHub: 'https://github.com/hugoquispepacaje/necesitomichela'
    }
  },
  {
    id: 3,
    titulo: 'Delivery App',
    url: '/assets/svg/deliveryapp-logo.svg',
    modalContent: {
      titulo:'Delivery App',
      descripcion: 'Proyecto Personal creado el 2021, realizado para un mayor entendimiento de React y ReactContext.',
      tituloLista: 'Tecnologías Ocupadas:',
      lista: [
        'ReactHooks.',
        'React Context.',
        'React MaterialUI.',
        'NodeJs.',
        'Express.',
        'MySQL.',
      ],
      urlDemo: 'https://deliveryapp.hugoquispe.cl',
      urlGitHub: 'https://github.com/hugoquispepacaje/deliveryapp'
    }
  },
  {
    id: 4,
    titulo: 'Mascotas Perdidas Remake',
    url: '/assets/svg/mpr-logo.svg',
    modalContent: {
      titulo:'Mascotas Perdidas Remake',
      descripcion: 'Proyecto Personal creado el 2021, realizado para un adentrase a al desarrollo BackEnd con Java mediante SpringBoot. Se utilizó la idea del primer proyecto de "Mascotas Perdidas".',
      tituloLista: 'Tecnologías Ocupadas:',
      lista: [
        'SprigBoot.',
        'MySQL.',
        'Angular.',
        'MaterialUI'
      ],
      urlDemo: 'https://mascotasremake.hugoquispe.cl/#/',
      urlGitHub: 'https://github.com/hugoquispepacaje/mascotasremake'
    }
  },
  {
    id: 5,
    titulo: 'Test Pagos con Transbank',
    url: '/assets/svg/tb-logo.svg',
    modalContent: {
      titulo:'Test Pagos con Transbank',
      descripcion: 'Proyecto Personal creado el 2021, su objetivo fue implementar la base de una integracion entre NodeJs y Transbank.',
      tituloLista: 'Tecnologías Ocupadas:',
      lista: [
        'NodeJs.',
        'Express.',
        'Handlebars',
        'Transbank API'
      ],
      urlDemo: 'https://pagos-tb-app.herokuapp.com',
      urlGitHub: 'https://github.com/hugoquispepacaje/pagos-app'
    }
  },
  {
    id: 6,
    titulo: 'Portafolio',
    url: '/assets/svg/portafolio-logo.svg',
    modalContent: {
      titulo:'Portafolio Personal',
      descripcion: 'Proyecto Personal creado el 2022, se realizó con el propósito de practicar React junto a TypeScript y tener un curriculum digital.',
      tituloLista: 'Tecnologías Ocupadas:',
      lista: [
        'React/Ts.',
        'PrimeReact.',
        'Vite 2.0.'
      ],
      urlDemo: 'https://hugoquispe.cl',
      urlGitHub: 'https://github.com/hugoquispepacaje/portafolio'
    }
  },
];
