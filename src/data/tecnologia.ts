import { Tecnologia } from "../models/Tecnologia";

export const TecnologiaDummy:Tecnologia[] = [
  {
    id: 1,
    titulo: 'Lenguajes de Programación',
    items: [
      {
        id:1,
        titulo:'JavaScript',
        url:'/assets/svg/js-logo.svg',
      },
      {
        id:2,
        titulo:'TypeScript',
        url:'/assets/svg/ts-logo.svg',
      },
      {
        id:3,
        titulo:'PHP',
        url:'/assets/svg/php-logo.svg',
      },
      {
        id:4,
        titulo:'Java',
        url:'/assets/svg/java-logo.svg',
      }
    ] 
  },
  {
    id: 2,
    titulo: 'BackEnd',
    items: [
      {
        id:1,
        titulo:'Spring',
        url:'/assets/svg/spring-logo.svg',
      },
      {
        id:2,
        titulo:'Node-Express',
        url:'/assets/svg/nodejs-logo.svg',
      },
      {
        id:3,
        titulo:'Laravel',
        url:'/assets/svg/laravel-logo.svg',
      }
    ]
  },
  {
    id: 3,
    titulo: 'FrontEnd',
    items: [
      {
        id:1,
        titulo:'Angular',
        url: '/assets/svg/angular-logo.svg',
      },
      {
        id:2,
        titulo:'React',
        url: '/assets/svg/react-logo.svg',
      },
      {
        id:3,
        titulo:'Vue',
        url:'/assets/svg/vue-logo.svg',
      },
      {
        id:4,
        titulo:'Material UI',
        url:'/assets/svg/material-ui-logo.svg',
      },
      {
        id:5,
        titulo:'PrimeFaces',
        url:'/assets/svg/primeface-logo.svg',
      }
    ]
  },
  {
    id: 4,
    titulo: 'Base de datos',
    items: [
      {
        id:1,
        titulo:'MySQL',
        url:'/assets/svg/mysql-logo.svg',
      },
      {
        id:2,
        titulo:'PostgreSQL',
        url:'/assets/svg/postgresql-logo.svg',
      },
      {
        id:3,
        titulo:'SQLServer',
        url:'/assets/svg/sqlserver-logo.svg',
      },
      {
        id:4,
        titulo:'MongoDB',
        url:'/assets/svg/mongodb-logo.svg',
      }
    ]
  },
  {
    id: 5,
    titulo: 'Analisis de Datos',
    items: [
      {
        id:1,
        titulo:'PowerBI',
        url:'/assets/svg/powerbi-logo.png',
      },
      {
        id:2,
        titulo:'Excel - Power Pivot',
        url:'/assets/svg/excel-logo.svg',
      }
    ]
  }
];