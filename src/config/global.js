export default {
  global: {
    componenteFormativo:
      'Ordenación de los recursos de información bibliográfica',
    descripcionCurso:
      'Este componente formativo aborda aspectos clave de la historia y evolución de las bibliotecas y los sistemas de clasificación, ordenación y almacenamiento de los recursos bibliográficos. Con su estudio consciente y responsable, el aprendiz se afianzará en el proceso de creación de registros, clasificación bibliográfica, herramientas de almacenaje, bases de datos, normas de catalogación, normalización bibliográfica, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia y evolución de las bibliotecas y sus servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de bibliotecas y sus características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Recursos bibliográficos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características de los servicios bibliotecarios',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas de clasificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación bibliográfica',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Proceso de catalogación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Normas de catalogación',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Clases de catálogos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Creación de registros bibliográficos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fuentes y recursos de información',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Bases de datos bibliográficas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas de almacenaje y registro de información',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Software bibliográfico',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Etiquetas, usos y aplicación',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Normalización bibliográfica',
            hash: 't_3_6',
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
      tema: 'Sistemas de clasificación',
      referencia:
        'Biblioteca Dgire (s. f.). Procesos técnicos de los materiales. Dgire.',
      tipo: 'Página web',
      link:
        'https://www.dgire.unam.mx/webdgire/bibliotecas/cat-proceso.html#inventariar',
    },
    {
      tema: 'Sistemas de clasificación',
      referencia:
        'Pontificia Universidad Javeriana (s.f.). Manual práctico y competencias para la organización de los recursos bibliográficos: de la biblioteca comunitaria La Fuerza de las Palabras. Repository.javeriana.',
      tipo: 'Libro en repositorio institucional',
      link: 'https://repository.javeriana.edu.co/handle/10554/5688',
    },
    {
      tema: 'Creación de registros bibliográficos ',
      referencia:
        'Universidad Libre (s .f.). Estadística - Gestión de bibliotecas. Unilibre.',
      tipo: 'Página web',
      link:
        'https://www.unilibre.edu.co/socorro/index.php/event-program/nuestra-universidad/noticias-home/266-estadisticas-gestion-de-biblioteca#',
    },
  ],
  glosario: [
    {
      termino: 'Acceso al patrimonio bibliográfico y documental',
      significado:
        'derecho u oportunidad de usar de forma libre y gratuita el patrimonio bibliográfico y documental sin discriminación de sexo, raza, religión, idioma, condición económica o geográfica o situación ideológica, cognitiva, étnica y física.',
    },
    {
      termino: 'Accesibilidad',
      significado:
        'acceso a la información, que es la capacidad de identificar, recuperar y utilizar la información de forma eficaz.',
    },
    {
      termino: 'Acervo bibliográfico y documental patrimonial',
      significado:
        'conjunto de documentos con valor patrimonial que se encuentran en cualquier formato o soporte y hacen parte de una unidad de información.',
    },
    {
      termino: 'Asistencia técnica',
      significado:
        'apoyo prestado por especialistas que se puede desarrollar a través de la transmisión de información y conocimientos teóricos y prácticos, instrucción, formación de habilidades y servicios de consultoría, y aplicar la transferencia de datos técnicos.',
    },
    {
      termino: 'Biblioteca',
      significado:
        'estructura organizativa que, mediante los procesos y servicios técnicamente apropiados, tiene como misión facilitar el acceso de una comunidad o grupo particular de usuarios a documentos publicados o difundidos en cualquier soporte.',
    },
    {
      termino: 'Biblioteca digital patrimonial',
      significado:
        'colecciones organizadas de contenidos digitales con valor patrimonial que se ponen a disposición del público.',
    },
    {
      termino: 'Biblioteca pública',
      significado:
        'aquella que presta servicios al público en general, por lo que está a disposición de todos los miembros de la comunidad por igual, sin distinción de raza, nacionalidad, edad, sexo, religión, idioma, discapacidad, condición económica y laboral.',
    },
    {
      termino: 'Bienes de Interés Cultural',
      significado:
        'bienes materiales que las autoridades competentes han declarado como monumentos, áreas de conservación histórica, arqueológica, o arquitectónica, conjuntos históricos.',
    },
    {
      termino: 'Catalogación',
      significado:
        'proceso que describe las características físicas de los documentos, de acuerdo con métodos y técnicas bibliotecológicas, normas y estándares nacionales e internacionales, para crear referentes de acceso, catálogos e índices calcográficos, para la recuperación fácil y oportuna de la información (patrimonio bibliográfico y documental en bibliotecas).',
    },
    {
      termino: 'Conservación',
      significado:
        'patrimonio bibliográfico y documental tiene que ver con las acciones y métodos de conservación preventiva y restauración, de acuerdo con los procedimientos establecidos por las instituciones que están a cargo de las colecciones.',
    },
    {
      termino: 'Contenidos estáticos',
      significado:
        'obras digitales publicadas como obras finalizadas, pensadas para no tener variaciones en su contenido, que no tienen posibilidades de interacción social o que no utilizan tecnologías de lenguaje, contenido y diseño dinámicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, A. (1985). Catalogación y clasificación de documentos procedimientos. Centro Agronómico Tropical de Investigación y Enseñanza, Turrialba, Costa Rica. Repositorio ICCA.',
      link:
        'https://repositorio.iica.int/handle/11324/14901?locale-attribute=es',
    },
    {
      referencia:
        'Cordon, J.(1996). El servicio de información y referencia. Síntesis.',
      link: 'http://eprints.rclis.org/15076/1/CAPITULO_15.SERV._INFOR.pdf',
    },
    {
      referencia: 'Delgado, A. (1991). Los catálogos en las bibliotecas.',
      link: 'https://sabus.usal.es/docu/pdf/Catalogo.PDF',
    },
    {
      referencia:
        'Fundalectura (2009). Manual de procesamiento técnico y físico de material bibliográfico.',
      link:
        'https://bibliotecanacional.gov.co/es-co/formacion/caja-de-herramientas/Documents/Manual%20de%20procesamiento%20tecnico.pdf',
    },
    {
      referencia:
        'Moreno, R. (1991). El bibliotecario de referencia y su entorno espacial. Redc.',
      link: 'https://redc.revistas.csic.es/index.php/redc/article/view/1215',
    },
    {
      referencia:
        'Pontificia Universidad Javeriana (s.f.). Manual práctico y competencias para la organización de los recursos bibliográficos : de la biblioteca comunitaria La Fuerza de las Palabras. Repository Javeriana.',
      link: 'https://repository.javeriana.edu.co/handle/10554/5688',
    },
    {
      referencia:
        'Rodríguez, G. (2013). Descarte de material bibliográfico y guía para organizar espacios y recursos. Panamericana.',
    },
    {
      referencia:
        'Universidad Libre (s.f.). Estadística - Gestión de Bibliotecas. Unilibre.',
      link:
        'https://www.unilibre.edu.co/socorro/index.php/event-program/nuestra-universidad/noticias-home/266-estadisticas-gestion-de-biblioteca#',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Justino Rojas Cabrera',
        cargo: 'Experto temático',
        centro:
          'Sede Comercio Centro de la Industria, la Empresa y los Servicios Ciudad, Neiva',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yeimmy Bibiana Barrera Maldonado',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
