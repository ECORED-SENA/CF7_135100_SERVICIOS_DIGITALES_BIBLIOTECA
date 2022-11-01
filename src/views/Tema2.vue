<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de clasificación
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img01.png")
      .col-lg-7(data-aos="fade-left")
        p Los sistemas de clasificación son formas de catalogar libros u obras, es decir, son procedimientos que facilitan la agrupación de los catálogos de acuerdo a los atributos o prioridades. Consiste en la actividad de agrupar los elementos de información según unos atributos o propiedades comunes de estos.
        .BG10.p-4
          p.mb-0 Basándose en el estudio previo de los documentos que conforman la biblioteca, y una vez marcados unos objetivos y un plan de trabajo, es necesario elegir en torno a qué atributos se van a agrupar los contenidos y cómo se van a organizar. 

    p.mb-5 En relación con los sistemas de clasificación, se deben tener en cuenta los siguientes aspectos clave.
    .h4 Sistemas de clasificación

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img02.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              .h5.text-white Elección de los mecanismos orientadores
              p.mb-0.text-white Es importante elegir, desde el principio, el más adecuado dependiendo de la colección y de los servicios brindados por la biblioteca y no usar diferentes modos de clasificación que pueden dispersar los fondos y desorientar al usuario en la búsqueda.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img03.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              .h5.text-white Los documentos y sus contenidos
              p.mb-0.text-white Los sistemas de clasificación consisten en dotar de contenidos a los documentos, averiguando su contenido principal, su clase y sus aspectos secundarios y traduciendo estos a la notación adecuada según el sistema de clasificación.
      .col-lg-4.col-8(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img04.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              .h5.text-white Ordenamiento
              p.mb-0.text-white Los sistemas de clasificación implican el ordenamiento de los documentos de acuerdo con el asunto o área temática que cubre. Este proceso requiere de la utilización de sistemas de clasificación creados con el fin de agrupar información de acuerdo con las materias que trata el documento.

    p Ahora, se invita a detallar los tipos de sistemas de clasificación más usuales y recomendados. Es conveniente tomar nota de los elementos más importantes en la libreta personal de apuntes.

    TabsB.color-acento-contenido.mb-4
      .p-4.p-md-5(titulo="Clasificación Decimal Universal (CDU)" :icono="require('@/assets/curso/tema2/img05.svg')")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Clasificación Decimal Universal (CDU)
            p Es un sistema de clasificación del conocimiento que nace de la necesidad de ordenar y catalogar las obras en las bibliotecas. Es un sistema con notación numérica, ordenado según el principio que rige en los números decimales. Emplea los números arábigos lo que posibilita su uso internacional. Abarca un ámbito temático universal.
          .col-lg-6.col-10
            .BGR12.p-4
              .h5.mb-1 Ejemplo: 
              .h5 Materias o clases que lo conforman:
              p.mb-1 0. Generalidades. 
              p.mb-1 1. Filosofía. Psicología. 
              p.mb-1 2. Religión. Teología. 
              p.mb-1 3. Ciencias sociales. Estadística. Política. Economía. Derecho. Administración. Asistencia social. Seguros. Educación. Etnología. 
              p.mb-1 4. Sin ocupar 
              p.mb-1 5. Matemáticas. Ciencias naturales. 
              p.mb-1 6. Ciencias aplicadas. Medicina. Técnica. 
              p.mb-1 7. Bellas artes. Juegos. Espectáculos. Deportes. 
              p.mb-1 8. Lingüística. Filología. Literatura. 
              p.mb-0 9. Geografía. Biografías. Historia.
      .p-4.p-md-5(titulo="Clasificación Decimal Dewey (DDC)" :icono="require('@/assets/curso/tema2/img05.svg')")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Clasificación Decimal Dewey (DDC)
            p Sus características básicas de división jerárquica en números decimales en base de 10 con dígitos de tres en tres. Es una clasificación enciclopédica y las materias se ordenan por disciplinas que también tienen jerarquía. 
          .col-lg-6.col-10
            .BGR12.p-4
              .h5 Ejemplo:
              p.mb-1 000 - Ciencias de la Computación, Información y Obras Generales.
              p.mb-1 100 - Filosofía y Psicología.
              p.mb-1 200 - Religión, Teología.
              p.mb-1 300 - Ciencias Sociales.
              p.mb-1 400 - Lenguas.
              p.mb-1 500 - Ciencias Básicas.
              p.mb-1 600 - Tecnología y Ciencias Aplicadas.
              p.mb-1 700 - Artes y Recreación.
              p.mb-1 800 - Literatura.
              p.mb-0 900 - Historia y Geografía
      .p-4.p-md-5(titulo="Clasificación de la Library of Congress (LC)" :icono="require('@/assets/curso/tema2/img05.svg')")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Clasificación de la Library of Congress (LC)
            p Es el sistema compuesto de clasificaciones específicas e independientes para cada materia entre las que no existen interconexiones. La notación es alfabética utilizando letras mayúsculas para cada clase. Es un conjunto o serie de clasificaciones amplias y especializadas.
          .col-lg-6.col-10
            .BGR12.p-4
              .h5.mb-1 Ejemplo:
              .h5 Materias o clases que lo conforman
              .row.justify-content-center
                .col-6
                  p.mb-1 A. Obras generales. Poligrafías. 
                  p.mb-1 B. Filosofía, psicología. 
                  p.mb-1 BL. Religión. 
                  p.mb-1 C. Historia y sus ciencias auxiliares. 
                  p.mb-1 D. Historia del mundo antiguo (occidente). 
                  p.mb-1 E. Historia de América (general de EE. UU.).
                  p.mb-1 F. Historia de América (local y posesiones de EE. UU.). 
                  p.mb-1 G. Geografía, antropología.
                  p.mb-1 H. Ciencias sociales. 
                  p.mb-0 HB. Economía.
                .col-6
                  p.mb-1 HM. Sociología. 
                  p.mb-1 J. Ciencias Políticas. 
                  p.mb-1 K. Legislación. 
                  p.mb-1 L. Educación 
                  p.mb-1 M. Música. 
                  p.mb-1 N. Bellas artes. 
                  p.mb-1 P. Lenguaje y literatura. 
                  p.mb-1 Q. Ciencia.
                  p.mb-1 R. Medicina. 
                  p.mb-1 S. Agricultura. 
                  p.mb-1 T. Tecnología. 
                  p.mb-1 U. Ciencia militar. 
                  p.mb-1 V. Ciencia naval. 
                  p.mb-0 Z. Bibliografía y biblioteconomía.
      .p-4.p-md-5(titulo="Clasificación de Bliss (BC)" :icono="require('@/assets/curso/tema2/img05.svg')")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Clasificación de Bliss (BC)
            p Este sistema clasificatorio se basa en un esquema de ordenación por disciplinas suficientemente flexibles. El sistema de notación es alfabético con las letras mayúsculas y se utilizan números para notaciones de forma auxiliares. Es utilizado por las bibliotecas universitarias. Es un sistema de clasificación que divide cada disciplina desde cuatro puntos de vista: filosófico, teórico, histórico y práctico.
          .col-lg-6.col-10
            .BGR12.p-4
              .h5.mb-1 Ejemplo:
              .h5 Generalidades, fenómenos, entidades, comunicación, cibernética, biblioteconomía
              p.mb-1 A. Filosofía, lógica, matemáticas, estadística. 
              p.mb-1 B. Física, Tecnología de la electricidad y de la comunicación. 
              p.mb-1 C. Química y tecnología de los minerales. 
              p.mb-1 D. Astronomía y Ciencia del Espacio. 
              p.mb-1 E/G. Biología (Botánica y Zoología). H/I Ciencias de la salud y psicología. J. Educación. 
              p.mb-1 K. Sociología y geografía social. Folklore. 
              p.mb-1 L/O. Historia P Religión y Ética. Ocultismo. 
              p.mb-0 Q/S. Estudios sociales, Administración y bienestar social. Ciencias políticas. Derecho.
      .p-4.p-md-5(titulo="Clasificación Colonada de Ranganathan CC" :icono="require('@/assets/curso/tema2/img05.svg')")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            h4 Clasificación Colonada de Ranganathan CC
            p Es un sistema jerárquico, que aplica el principio de los números decimales para sistematizar las subdivisiones de las clases. Las clases principales están agrupadas en 10 grupos temáticos que intentan abarcar todas las disciplinas científicas. Utiliza un código numérico.
          .col-lg-6.col-10
            .BGR12.p-4
              .h5.mb-1 Ejemplo:
              .row.justify-content-center
                .col-6
                  .h5 Materias o clases que lo conforman:
                  p.mb-1 Z. Generalidades. 
                  p.mb-1 1-9. Preliminares. 
                  p.mb-1 2. Biblioteconomía. 
                  p.mb-1 B. Matemáticas. 
                  p.mb-1 C. Física. 
                  p.mb-1 D. Ingeniería. 
                  p.mb-1 E. Química. 
                  p.mb-1 F. Tecnología (Incluyendo Química tecnológica). 
                  p.mb-1 G. Biología. 
                  p.mb-1 H. Geología. 
                  p.mb-1 I. Botánica. 
                  p.mb-1 J. Agricultura. 
                  p.mb-1 K. Zoología. 
                  p.mb-1 L. Medicina. 
                  p.mb-1 LX. Farmacia. 
                  p.mb-0 M. Artes aplicadas.
                .col-6
                  .h5 Experiencia espiritual y misticismo
                  p.mb-1 N. Bellas Artes. 
                  p.mb-1 O. Literatura. 
                  p.mb-1 P. Lingüística. 
                  p.mb-1 Q. Religión.
                  p.mb-1 R. Filosofía. 
                  p.mb-1 S. Psicología. 
                  p.mb-1 T. Educación. 
                  p.mb-1 U. Geografí.a 
                  p.mb-1 V. Historia 
                  p.mb-1 W. Ciencia Política. 
                  p.mb-1 X. Economía. 
                  p.mb-1 Y. Sociología. 
                  p.mb-0 Z. Derecho.
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Clasificación bibliográfica
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p El sistema de clasificación bibliográfica tiene por objetivo la organización de la biblioteca, mediante un proceso de agrupación temática, ordenación física y representación gráfica del acervo, haciendo uso de instrumentos y esquemas jerárquicos.
        .row.align-items-center.BG07
          .col-1.px-0.py-2
            img(src="@/assets/curso/temas/img03.png")
          .col-11.p-3
            p.mb-0 El proceso técnico se puede definir como el conjunto de operaciones manuales e intelectuales, efectuadas sobre los fondos de la biblioteca, preparándolos para su difusión y utilización por parte de los usuarios.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img07.png")
    
    .row.align-items-center.BGR06.mb-5(data-aos="flip-up")
      .col-lg-1.col-2.px-0
        img(src="@/assets/curso/temas/img04.svg")
      .col.p-3
        .h4 <span style="color:#FD9827;">¡Atención!</span>
        p.text-white.mb-0 Las tareas que engloba este sistema son el análisis de la colección realizado sobre el conjunto de fondos y el análisis documental realizado sobre cada uno de los documentos, tanto a nivel físico como de contenido. Es en este último donde se engloban las tareas de catalogación y clasificación.

    p.mb-5 La tabla que se muestra enseguida evidencia un ejemplo de proceso técnico de recepción de material bibliográfico, se invita a analizarla con atención.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1
          span Recepción de material bibliográfico en la sección de procesos técnicos
        table
          thead
            tr
              th(style="background-color: #785549; width: 25%;").text-center.text-white N.º de actividad
              th(style="background-color: #785549; width: 50%;").text-center.text-white Actividades
              th(style="background-color: #785549; width: 25%;").text-center.text-white Responsables
          tbody
            tr
              td(style="background-color: #EBD0BC;").text-center 1
              td(style="background-color: #EBD0BC;") 
                ul.lista-ul--color.ms-4
                  li
                    <i class="fas fa-dot-circle" style="color:#785549;"></i>
                    | El proceso de gestión de recursos bibliográficos tiene varias modalidades de recepción del material bibliográfico según sea su procedencia o forma de adquisición, entre estas: 
                  li
                    <i class="fas fa-dot-circle" style="color:#785549;"></i>
                    | Material bibliográfico adquirido mediante compra:
                  li
                    <i class="fas fa-dot-circle" style="color:#785549;"></i>
                    | Una vez se recibe el material según el preparador del material bibliográfico, acomoda el material en la oficina de procesos técnicos, y posteriormente empieza a pasar el material al proceso de catalogación. 
                  li
                    <i class="fas fa-dot-circle" style="color:#785549;"></i>
                    | El encargado de preparar el material bibliográfico, coteja los libros recibidos con el respectivo contrato, verificando el título, autor (es), edición, año, ISBN, editorial y cantidad. 
                  li
                    <i class="fas fa-dot-circle" style="color:#785549;"></i>
                    | Una vez verificado el material bibliográfico, si cumple con las condiciones se informa al líder del proceso para dar trámite ante la oficina de Almacén.
                  li
                    <i class="fas fa-dot-circle" style="color:#785549;"></i>
                    | Si el material bibliográfico no corresponde con las condiciones del contrato, se informa al líder del proceso para la toma de decisiones.
              td(style="background-color: #EBD0BC;").text-center Preparador técnico del material  bibliográfico
    
    .BGM08.px-md-5.px-4
      separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Proceso de catalogación
      
      p La descripción del material bibliográfico se realiza según las normas técnicas establecidas para este fin y su propósito es su sistematización con miras a la presentación a través de un catálogo.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          .row.align-items-center.BG09.mb-4
            .col-1.px-0
              img(src="@/assets/curso/temas/img05.png")
            .col-11.p-3
              p.mb-0 El proceso de catalogación es la descripción bibliográfica de un documento por medio de la cual se identifica los elementos constitutivos de una obra.
          p Los elementos que integran una obra que son catalogables, son:
          .row.justify-content-center
            .col-6
              ul.lista-ul--color.ms-4
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Autor.
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Titulo. 
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Traductores. 
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Edición. 
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Ligar de publicación. 
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-0 Casa editorial.
            .col-6
              ul.lista-ul--color.ms-4
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Año de publicación. 
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Numero de página o volúmenes. 
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Ilustraciones. 
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Notas de serie.
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Notas especiales y otras importantes para la descripción de la obra.
          .row.align-items-center.BGR06
            .col-lg-1.col-2.px-0
              img.img02(src="@/assets/curso/temas/img04.svg")
            .col.p-4
              .h4 <span style="color:#FD9827;">¡Importante!</span>
              p.text-white.mb-0 La catalogación se realiza de acuerdo con las normas vigentes y ampliamente utilizadas por los bibliotecarios.   
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img08.png")

      separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Normas de catalogación
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          .row.align-items-center.mb-4
            .col-1.px-0
              img(src="@/assets/curso/temas/img06.png")
            .col-11.p-3
              p.mb-0 Estas han sido establecidas para permitir la catalogación consistente de diversos materiales bibliotecarios, por distintas personas de un equipo de catalogación y en cualquier momento.
          p.mb-0 El siguiente es un listado de las principales normas de catalogación; las mismas permiten orientan los procesos sistemáticos de organización del material bibliográfico. Se invita a llevar notas en las libreta personal de apuntes.
        .col-lg-5.order-lg-2.order-1(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img09.svg")
      
      .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
        h5 Tabla 2
        span Reglas de catalogación
    .tabla-b.color-primario.mb-4(data-aos="zoom-in")
      table
        tbody
          tr
            td(style="background-color: #FFF0DE; width: 35%; border-top: 8px solid #785549; border-left: 2px solid #785549;").text-center ISBD (CR)
            td(style="background-color: #FFF0DE; width: 65%; border-top: 8px solid #785549; border-left: 2px solid #785549; border-right: 2px solid #785549;") Descripción Bibliográfica Internacional Normalizada para Publicaciones Seriadas y otros Recursos Continuados.
          tr
            td(style="border-left: 2px solid #785549;").text-center AACR2
            td(style="border-left: 2px solid #785549; border-right: 2px solid #785549;") Reglas de Catalogación - Rda: Forma de Puntos de Acceso (2010).
          tr
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549;").text-center Reglas de catalogación
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549; border-right: 2px solid #785549;") Permite el intercambio de información bibliográfica.
          tr
            td(style="border-left: 2px solid #785549;").text-center Reglas de catalogación
            td(style="border-left: 2px solid #785549; border-right: 2px solid #785549;") Ordenación de las entradas de los catálogos automatizados.

          tr
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549;").text-center Reglas de Catalogación Españolas y las RDA
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549; border-right: 2px solid #785549;") Se refiere a la elección y a la forma de puntos de acceso.
          tr
            td(style="border-left: 2px solid #785549;").text-center NC-ISO 2108: 1999
            td(style="border-left: 2px solid #785549; border-right: 2px solid #785549;") Numeración Internacional Normalizada de Libros (ISBN).
          tr
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549;").text-center NC-93 - 2000
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549; border-right: 2px solid #785549;") Norma de Descripción Bibliográfica de Música.
          tr
            td(style="border-left: 2px solid #785549;").text-center NC-94 - 2000
            td(style="border-left: 2px solid #785549; border-right: 2px solid #785549;") Norma de Descripción Bibliográfica de Manuscritos.
          tr
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549;").text-center NC-ISO 3297: 2000
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549; border-right: 2px solid #785549;") Numeración Internacional Normalizada de Publicaciones Seriadas (ISSN).
          tr
            td(style="border-left: 2px solid #785549;").text-center NC-ISO 5963: 2000
            td(style="border-left: 2px solid #785549; border-right: 2px solid #785549;") Métodos para el análisis de documentos, determinación de su contenido y selección de los términos de indización.
          tr
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549;").text-center NC-ISO 214 - 2000
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549; border-right: 2px solid #785549;") Resúmenes para publicaciones y documentación.
          tr
            td(style="border-left: 2px solid #785549;").text-center NC-121 - 2001
            td(style="border-left: 2px solid #785549; border-right: 2px solid #785549;") Encabezamientos, autores individuales y corporativos.
          tr
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549;").text-center NC- ISO 690-2 - 2001
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549; border-right: 2px solid #785549;") Información y documentación. Referencias bibliográficas. Documentos electrónicos y sus partes.
          tr
            td(style="border-left: 2px solid #785549;").text-center NC-ISO 832: 2000
            td(style="border-left: 2px solid #785549; border-right: 2px solid #785549;") Descripción y referencias bibliográficas. Abreviación de las palabras tipo.
          tr
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549;").text-center NC-154: 2002
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549; border-right: 2px solid #785549;") Norma de descripción bibliográfica de libros y folletos.
          tr
            td(style="border-left: 2px solid #785549;").text-center NC-39-09
            td(style="border-left: 2px solid #785549; border-right: 2px solid #785549;") Descripción bibliográfica de publicaciones seriadas.
          tr
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549; border-bottom: 2px solid #785549;").text-center NORMA ISO 11620
            td(style="background-color: #FFF0DE; border-left: 2px solid #785549; border-right: 2px solid #785549; border-bottom: 2px solid #785549;") Información y documentación. Indicadores del trabajo bibliotecario.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Clases de catálogos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2(data-aos="fade-right")
        img(src="@/assets/curso/temas/img03.png")
      .col
        p Existen diferentes tipologías de catálogos de acuerdo a los criterios de cada biblioteca. Se pueden encontrar en forma de libros, (manuscritos), en forma de fichas, en listas, de acceso directo on line (OPAC, Online Public Access Catalog), y en disco óptico (CD, DVD).
        p.mb-0 A continuación, se presentan algunos de los tipos de catálogos más usuales en el contexto de las bibliotecas:
    
    .BGIMG03.px-md-5.px-4.py-2.mb-4(data-aos="zoom-in")
      ImagenInfograficaB.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/img10.svg')
        .row.justify-content-center.align-items-center(x="8.2%" y="10%" tooltip="Catálogo impreso" numero="+")
          .col-lg-6.order-lg-1.order-2
            h5 Catálogo impreso
            p.mb-0 Se hace mediante la reproducción de procesos fotográficos de las referencias existentes acerca del material depositado en la biblioteca. Ofrece tal facilidad de consulta que puede ser consultado por numerosos usuarios, en distintos lugares geográficos y simultáneamente.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img11.png')
        .row.justify-content-center.align-items-center(x="24.5%" y="45.5%" tooltip="Catálogo automatizado" numero="+")
          .col-lg-6.order-lg-1.order-2
            h5 Catálogo automatizado
            p.mb-0 Permite una búsqueda más concreta y una recuperación más exhaustiva y pertinente de información. Se puede acceder por cualquier punto de acceso, por cualquier zona de registro y, además, por varios puntos de acceso de manera simultánea.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img12.png')
        .row.justify-content-center.align-items-center(x="83.2%" y="85.5%" tooltip="Catálogo colectivo" numero="+")
          .col-lg-6.order-lg-1.order-2
            h5 Catálogo colectivo
            p.mb-0 Se encarga de agrupar los registros bibliográficos pertenecientes a varias bibliotecas con interés común.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img13.png')
        .row.justify-content-center.align-items-center(x="54.3%" y="8.8%" tooltip="Catálogo especial" numero="+")
          .col-lg-6.order-lg-1.order-2
            h5 Catálogo especial
            p.mb-0 Contienen asiento de una sola clase de material o fondos que ya están incluidos en otras categorías especiales.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img14.png')

    p Otros tipos de catálogos que se deben conocer, son:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
        h5 Tabla 3
        span Tipos de catálogos
    .tabla-b.color-primario.mb-5(data-aos="zoom-in")
      table
        tbody
          tr
            td(style="background-color: #EBD0BC; width: 35%; border: 2px solid #785549; border-top: 8px solid #785549;").text-center Catálogo de autor
            td(style="background-color: #ECDACC; width: 65%; border: 2px solid #785549; border-top: 8px solid #785549;") Catálogo formal, clasificado alfabéticamente según los nombres de los autores o de los redactores de las entradas.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center Catálogo de título
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Catálogo formal, clasificado alfabéticamente según el título de las entradas.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center Catálogo de diccionario
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Catálogo en el cual todas las entradas (autor, título, tema, serie) en un orden alfabético. esta era la forma primaria de catálogo de fichas en el mundo angloamericano antes de la introducción del catálogo computarizado.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center Catálogo de la palabra clave
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Clasificado alfabéticamente según un cierto sistema de palabras clave.<br><br>
              ul.lista-ul--color
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Formas mezcladas del catálogo alfabético: a veces, se encuentra un autor/un título mezclado, o un autor/un catálogo del título/de la palabra clave.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center Catálogo sistemático
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Clasificado según una cierta subdivisión sistemática de temas. También llamó un catálogo clasificado.<br><br>
              ul.lista-ul--color
                li
                  <i class="fas fa-dot-circle" style="color:#785549;"></i>
                  p.mb-1 Catálogo de la lista de estante: un catálogo formal con las entradas clasificadas en la misma orden que artículos bibliográficos se deja de lado. Este catálogo sirve como el inventario primario para la biblioteca.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center Alfabético de materias
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Este agrupa las obras que posee una biblioteca ordenada alfabéticamente por la materia o término que representa el contenido de un documento.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center Catalogo topográfico
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Se recogen las obras en el mismo orden en el que figuran en las estanterías; de modo que es imprescindible para realizar el inventario y revisión de los fondos, ya que permite detectar cualquier anomalía en la organización de las colecciones y la desaparición de las obras.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
