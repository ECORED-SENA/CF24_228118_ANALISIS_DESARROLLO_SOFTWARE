export default {
  global: {
    componenteFormativo:
      'Construir aplicativo según las características de la arquitectura Android',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos claves para el diseño y desarrollo de aplicaciones móviles nativas, junto con sus elementos, vistas, maquetación, entornos de desarrollo, lenguajes de programación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura de un proyecto en Android Studio',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Interfaz de usuario en Android',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<i>Layouts</i>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Controles básicos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Eventos <i>listeners</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Navegación (<i>intents</i>)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tareas asincrónicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Persistencia de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Bases de datos local SQLite',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Bases de datos en tiempo real',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: '<i>MediaPlayer</i>',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: '<i>VideoView</i>',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estructura de un proyecto en Android Studio',
      referencia:
        'Android <i>Developers</i>. (2021, May 25). <i>Aspectos fundamentales de la aplicación</i>.',
      tipo: 'Página',
      link: 'https://developer.android.com/training/basics/activity-lifecycle',
    },
    {
      tema: 'Estructura de un proyecto en Android Studio',
      referencia:
        '<i>Developers</i>. (2021, June 14).  Notas de la versión del complemento de Android para Gradle. ',
      tipo: 'Página',
      link: 'https://developer.android.com/studio/releases/gradle-plugin',
    },
    {
      tema: 'Interfaz de usuario en Android',
      referencia:
        '<i>Developers</i>. (2021) Cómo crear una IU responsiva con ConstraintLayout. ',
      tipo: 'Página',
      link: 'https://developer.android.com/training/constraint-layout',
    },
    {
      tema: 'Interfaz de usuario en Android',
      referencia:
        'Castillo, J. D. L. (2015, May 21). <i>Capítulo 14 - Interacción con Botones, TextView, ImageView</i>. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=-z8zTGTo7vA&ab_channel=Jos%C3%A9DimasLuj%C3%A1nCastillo',
    },
    {
      tema: 'Interfaz de usuario en Android',
      referencia:
        'Castillo, J. D. L. (2015, May 21). <i>Capítulo 15 - Android Studio Intent Abrir una Activity</i>. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=LEVXzsXhO0A&ab_channel=Jos%C3%A9DimasLuj%C3%A1nCastillo',
    },
  ],
  glosario: [
    {
      termino: 'Diseño',
      significado:
        'un diseño define la estructura visual de una interfaz de usuario.',
    },
    {
      termino: '<i>Scrolling</i>',
      significado: 'acción de desplazarse internamente.',
    },
    {
      termino: '<i>SDK</i>',
      significado: 'kit de desarrollo de <i>software</i>.',
    },
    {
      termino: '<i>String</i>',
      significado: 'recurso XML que ofrece una sola <i>string</i>.',
    },
    {
      termino: '<i>View</i>',
      significado: 'es la clase base de los <i>widgets</i>.',
    },
    {
      termino: '<i>Wearable</i>',
      significado:
        'dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil.',
    },
  ],
  referencias: [
    {
      referencia:
        'Android Developers. (2021). <i>Documentation</i> | <i>Desarrolladores de Android</i>.',
      link: 'https://developer.android.com/docs',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zulema León',
          cargo: 'Experta Temática',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andres Felipe Herrera Roldan',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
