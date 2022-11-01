<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Creación de registros bibliográficos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Un registro sistematizado bibliográfico contiene todos los datos correspondientes a la identificación, descripción física y electrónica y descripción de contenido, de un ejemplar. Los catálogos están compuestos de registros bibliográficos, que son los elementos principales para localizar y poder acceder a las obras requeridas por los usuarios.
        .row.align-items-center.BG01.mb-4
          .col-1.px-0
            img(src="@/assets/curso/temas/img01.png")
          .col-11.p-3
            p.mb-0 Los registros bibliográficos contienen una serie de elementos que identifican, de forma única, cada una de las partes en que se divide un ítem bibliográfico o cualquier documento, libro, publicación u otro registro de la comunicación humana; cualquier grupo de documentos o partes de un documento tratados como una entidad. 
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img01.png")
    
    p.text-center.mb-5 Algunos elementos que son imprescindibles para el registro bibliográfico son:

    .row.mb-4(data-aos="fade-right")
      .col-xl-1.d-none.d-xl-flex.px-0
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-5
            .col-7
              img(src='@/assets/curso/tema3/img02.svg')
          .h5.text-center Autor.
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-5
            .col-7
              img(src='@/assets/curso/tema3/img03.svg')
          .h5.text-center Titulo.
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-5
            .col-7
              img(src='@/assets/curso/tema3/img04.svg')
          .h5.text-center ISBN/SSN.
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-5
            .col-7
              img(src='@/assets/curso/tema3/img05.svg')
          .h5.text-center Palabras clave.
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-4
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-5
            .col-7
              img(src='@/assets/curso/tema3/img06.svg')
          .h5.text-center Editorial.
      .col-xl-1.d-none.d-xl-flex.px-0
      .col-xl-1.d-none.d-xl-flex.px-0
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-5
            .col-7
              img(src='@/assets/curso/tema3/img07.svg')
          .h5.text-center Lugar de publicación. 
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-5
            .col-7
              img(src='@/assets/curso/tema3/img08.svg')
          .h5.text-center Fecha de publicación.
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-5
            .col-7
              img(src='@/assets/curso/tema3/img09.svg')
          .h5.text-center Tipo de documento.
      .col-xl-2.col-lg-3.col-md-4.col-6.mb-xl-0.mb-4
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-5
            .col-7
              img(src='@/assets/curso/tema3/img10.svg')
          .h5.text-center Serie/colección.
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Fuentes y recursos de información
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img11.png")
      .col-lg-7(data-aos="fade-left")
        p Las fuentes de información son instrumentos para el conocimiento, búsqueda y acceso a la información misma. Se trata, entonces, del fomento y uso de la comunicación a través de ordenadores y de flujos de información a través de internet.
        .row.align-items-center.BG09.mb-4
          .col-1.px-0
            img(src="@/assets/curso/temas/img03.png")
          .col-11.p-3
            p.mb-0 Esto permite avances en el campo de un conocimiento determinado; se recurre a las distintas bibliotecas y/o centros de información que se han acondicionado para prestar o suministrar información a todo tipo de usuarios. 
    
    p.mb-5 En el siguiente esquema se detallan los tipos de fuentes de información. Se invita asimilar cada uno de ellos y a llevar registro en la libreta personal de apuntes.
    .h4 Tipos de fuentes de información

    .BGIMG05.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img12.png')
        .col-lg-8
          LineaTiempoD.color-primario
            p.text-small(numero="1" titulo="Fuentes de búsqueda directa") llamadas, tradicionalmente,  “fuentes de información inmediata”. Se pueden clasificar en fuentes de información primarias y obras de referencia.
            p.text-small(numero="2" titulo="Fuentes de información primarias") Contienen información original. Entre las que destacan, por su presencia en internet, las monografías y las publicaciones periódicas.
            p.text-small(numero="3" titulo="Monografías o libros electrónicos") Disponibles, mayormente, en internet. Son obras y escritos que han dejado de ser propiedad intelectual de sus autores/as o herederos/as por haber perdido su vigencia. Suelen ser publicadas por instituciones públicas.
            p.text-small(numero="4" titulo="Revistas") Publicaciones periódicas que ofrecen apoyo en trabajos de investigación. Internet brinda soporte de grandes ventajas para la difusión de revistas especializadas, tanto científicas como de divulgación, entre ellas la accesibilidad desde cualquier parte del mundo y la rapidez en la circulación de los contenidos científicos.
            p.text-small(numero="5" titulo="Obras de referencia") Diseñadas, especialmente, como instrumentos eficaces en las tareas informativas y se denominan “obras de consulta”. Son obras realizadas intencionadamente para la consulta rápida.
            p.text-small(numero="6" titulo="Enciclopedias") Son obras de consulta por excelencia, concebidas para resolver dudas, ampliar conocimientos o para saber más sobre un tema concreto. Pueden estar ilustradas con fotografías, dibujos o mapas.
            p.text-small(numero="7" titulo="Diccionarios y directorios") Ordenados alfabéticamente, los primeros recogen, definen y aclaran vocabulario de un área del saber y, los segundos, agrupan personas, instituciones, organizaciones, etc., ofreciendo, además, los datos más importantes para su identificación.
            p.text-small(numero="8" titulo="Repertorios bibliográficos") Contienen biografías de autores ilustres que han destacado a lo largo de la historia en algún campo de la actividad que ejercía. Mayormente, se especializan en alguna actividad profesional o área de conocimiento, aunque también localizan algunos generales menos exhaustivos.
            p.text-small(numero="9" titulo="Estadísticas") Instrumento de análisis y toma de decisiones imprescindibles para las personas que trabajan en política, economía, áreas estratégicas. Favorecen, mediante la representación de datos o gráficos, resumir y extractar la información.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        .BG13.p-4.mb-4
          p.mb-0 En este mismo sentido y como complementariedad al proceso de hallazgo y acceso a la información bibliográfica, existen algunos tipos de fuentes que se relacionan directamente con la identificación y localización de documentos concretos.
        p Estos tipos de fuentes de identificación y localización de documentos, con algunas generalidades, son:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        img(src='@/assets/curso/tema3/img13.svg')
    
    .BGIMG06.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img14.png')
        .col-lg-6
          .BGR04.p-4
            SlyderA(tipo="b")
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827;">Bibliografías</span>
                p.text-center.mb-0 Son listados de referencias bibliográficas elaboradas con rigor, es decir, siguiendo un método establecido. En internet hacen alusión a referencias bibliográficas de monografías y publicaciones periódicas en soporte papel. La mayoría de ellas están especializadas en una determinada materia. Su página principal presenta una serie de temas que enlazan con todas aquellas referencias relacionadas con él o bien aparece el listado de obras sin más.
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827;">Catálogos de bibliotecas</span>
                p.text-center.mb-0 Son los instrumentos para la búsqueda bibliográfica: son las bases de datos #[b bibliografías y los catálogos de bibliotecas]. La diferencia entre ambas es que las primeras identifican los documentos y las segundas, además de identificarlos, los localizan.
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827;">Diferencias en cuanto a contenido</span>
                p.text-center.mb-0 En cuanto al contenido, se diferencian en que las bases de datos bibliográficas, en su mayoría, recogen los artículos de las publicaciones periódicas mediante un análisis del contenido, mientras que los catálogos recogen los datos de identificación de monografía y de publicaciones periódicas.
              .row.justify-content-center
                .h4.text-center <span style="color:#FD9827;">Catálogos consultables vía internet</span>
                p.text-center.mb-0 A diferencia de las bases de datos, ofrecen la ventaja de consulta gratuita, por ello también se les denomina OPAC (Open Public Catalog Access). Otra ventaja es que cuentan con servicios de préstamo por correo, normalmente tienen una dirección de correo electrónico para hacer la petición de los documentos que nos interesen en cuestión. Además, al igual que las bases de datos, la mayoría permiten exportar los registros en diferentes formatos.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Bases de datos bibliográficas
    
    .BGIMG07.px-md-5.px-4.py-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p Una base de datos bibliográfica contiene registros bibliográficos. Se trata de una colección organizada de referencias a la literatura digital publicada, que incluye actas de conferencias, revistas y artículos periodísticos, publicaciones gubernamentales y jurídicas, patentes, normas, informes, libros, publicaciones periódicas, etc.
          .row.align-items-center.mb-4
            .col-1.px-0
              img(src="@/assets/curso/temas/img06.png")
            .col-11.p-3
              p.mb-0 Gran parte de los datos bibliográficos disponibles en estas bases de datos suelen pertenecer a ponencias de conferencias, artículos, etc. y no solo a monólogos. 
          .row.align-items-center.BGR06
            .col-lg-1.col-2.px-0
              img(src="@/assets/curso/temas/img04.svg")
            .col.p-4
              .h4 <span style="color:#FD9827;">¡Nota!</span>
              p.text-white.mb-0 Estos datos bibliográficos contienen descripciones ricas y relevantes de los temas, como palabras clave, términos técnicos y números de llamada.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img15.png")
      p.text-center En cuanto al uso de las bases de datos bibliográficas, se debe tener presente que:

      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img16.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                .h5.text-white.text-center Palabras clave
                p.mb-0.text-white.text-center El término de búsqueda correcto es importante. Considere qué palabras podría utilizar un experto para describir los conceptos que está buscando.
        .col-lg-4.col-8.mb-lg-0.mb-4
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img17.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                .h5.text-white.text-center Revisado por pares
                p.mb-0.text-white.text-center Utilice opciones de búsqueda que le permitan limitar su búsqueda a artículos que hayan sido revisados por expertos.
        .col-lg-4.col-8.mb-lg-0.mb-4
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img18.png')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                .h5.text-white.text-center Recientes
                p.mb-0.text-white.text-center Intente seleccionar artículos escritos en los últimos diez años para asegurarse de no recuperar resultados de investigación obsoletos.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Herramientas de almacenaje y registro de información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p El almacenamiento de datos hace referencia a medios magnéticos, ópticos o mecánicos que registran y preservan información digital para operaciones en curso o a futuro.
        .BG14.p-4.mb-4
          p.mb-0 La custodia y el funcionamiento y ventajas de los almacenes de información electrónica más habitualmente utilizados, son los discos ópticos, las bases de datos, las bibliotecas digitales e internet.
        p Estos son algunos aspectos clave sobre las herramientas de almacenaje y registro de información:
        TabsA.color-acento-contenido
          .BGR05.p-4(titulo="Almacenamiento")
            .h4 Almacenamiento
            p.mb-0 El almacenamiento es un registro que se hace sistemáticamente en discos ópticos que son un tipo de soporte físico para almacenar información.
          .BGR05.p-4(titulo="Bases de datos")
            .h4 Bases de datos
            p.mb-0 Las bases de datos son entornos de almacenamiento y acceso a la información que puede guardarse, por ejemplo, en discos ópticos o acceder a través de internet.
          .BGR05.p-4(titulo="Bibliotecas digitales")
            .h4 Bibliotecas digitales
            p.mb-0 Las bibliotecas digitales son almacenes de documentos accesibles a través del internet y, finalmente, internet es un mecanismo de acceso a algunos servicios (web, FTP), que constituyen excelentes sistemas de almacenamiento de información.
          .BGR05.p-4(titulo="Medios de almacenamiento")
            .h4 Medios de almacenamiento
            p.mb-0 Los medios de almacenamiento que se pueden utilizar no son excluyentes, por lo que pueden complementarse entre sí.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img19.png")

    .BGM08.px-md-5.px-4.py-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img20.png")
        .col-lg-7(data-aos="fade-left")
          p Algunos de los tipos de solución más comunes que se pueden utilizar son:
          ul.lista-ul--color
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Almacén de datos personales o de proyectos (por ejemplo, utilizando discos USB, discos duros de laptops o unidades en red dentro de la Biblioteca o centro de información).
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Repositorio institucional.
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Almacén de datos institucional.
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Infraestructura de almacenamiento.
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Almacén de datos en la nube.
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Repositorio disciplinar.
      
      separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 #[em Software] bibliográfico

      .BGIMG08.p-4.mb-4
        p Los programas de gestión bibliográfica, también llamados gestores bibliográficos, son #[em software] que se utilizan para buscar, almacenar, organizar, gestionar, recuperar y exportar referencias bibliográficas.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/tema3/img21.png")
          .col-lg-7(data-aos="fade-left")
            p Las referencias bibliográficas se pueden introducir en un gestor bibliográficos, así:
            ul.lista-ul--color.ms-4
              li
                <i class="fas fa-dot-circle" style="color:#785549;"></i>
                | Por exportación directa desde una base de datos bibliográfica.
              li
                <i class="fas fa-dot-circle" style="color:#785549;"></i>
                | Por exportación directa desde otro gestor bibliográfico.
              li
                <i class="fas fa-dot-circle" style="color:#785549;"></i>
                | Tecleándolas una a una.
              li
                <i class="fas fa-dot-circle" style="color:#785549;"></i>
                | Importándolas desde un fichero en formato normalizado de intercambio bibliográfico, como RIS o BibTeX .
      separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Etiquetas, usos y aplicación
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p El etiquetado, en el diseño de software, hace referencia a los textos que representan funciones en la interfaz de usuario. Derivado del término en inglés #[em labeling], se entiende como toda estructura textual utilizada en una interfaz de usuario, como los títulos, textos de botones, hipervínculos, rótulos (#[em taglines]), textos alternativos (#[em alt]), etc.
          .row.align-items-center.BG01.mb-4
            .col-1.px-0
              img(src="@/assets/curso/temas/img01.png")
            .col-11.p-3
              p.mb-0 El etiquetado es una forma de representaciones. Tal como se usan las palabras para expresar ideas, se usan las etiquetas para representar amplios fragmentos de información en los sitios web.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img22.png")
          
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img23.svg")
        .col-lg-7(data-aos="fade-left")
          p La tipología de etiquetado puede establecerse de la siguiente forma: 
          ul.lista-ul--color.ms-4
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Etiquetado en los sistemas de navegación (etiquetado de navegación).
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Etiquetado de vínculos (etiquetado de hipervínculos fuera de barras de navegación).
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Etiquetado como encabezamiento de títulos y subtítulos.
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Etiquetado como términos de indización (etiquetado metadatos).
            li
              <i class="fas fa-dot-circle" style="color:#785549;"></i>
              | Etiquetado adjunto al sistema de iconos (etiquetado como textos alternativos de imágenes a hipervínculos) .

    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Normalización bibliográfica
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .row.align-items-center.mb-4
          .col-1.px-0
            img(src="@/assets/curso/temas/img07.png")
          .col-11.p-3
            p.mb-0 Esta se basa, principalmente, en la asignación de códigos normalizados a cada obra publicada, a modo de seña de identidad, con el fin de facilitar las operaciones documentales y agilizar los intercambios de información bibliográfica.
        p.mb-0 La siguiente tabla muestra los principales identificadores bibliográficos. Se invita a leerla a detenidamente y llevar registro de lo más destacado en la libreta personal de apuntes.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img24.svg")

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 4
      span Principales identificadores bibliográficos
    .tabla-b.color-primario
      table
        tbody
          tr
            td(style="background-color: #EBD0BC; width: 35%; border: 2px solid #785549; border-top: 8px solid #785549;").text-center ISBN (International Standard Book Number)
            td(style="background-color: #ECDACC; width: 65%; border: 2px solid #785549; border-top: 8px solid #785549;") Número internacional normalizado para libros y folletos, es un código de control que identifica la edición de un título por parte de una editorial concreta y única.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center ISSN (International Standard Serial Number)
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Número internacional normalizado que identifica las publicaciones seriadas de forma inequívoca, entre ellas, periódicos y revistas, memorias anuales, actas de congresos o entidades, etc.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center DL (Depósito Legal)
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Está relacionado con el deber legal del fabricante (impresor o productor) de depositar, en una o varias agencias especificadas, ejemplares de publicaciones de todo tipo, reproducidas en cualquier soporte, por cualquier procedimiento, para distribución pública, alquiler o venta.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center NIPO (Número de Identificación de Publicaciones Oficiales)
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Código internacional de control para las publicaciones emanadas de la administración pública, a través de sus distintos ministerios, direcciones, subdirecciones, oficinas, centros o departamentos. Quedan exentas de este control de identificación aquellas publicaciones que posean carácter reservado y estén restringidas al ámbito interno de la administración.
          tr
            td(style="background-color: #EBD0BC; border: 2px solid #785549;").text-center ISRC (International Standard Recording Code)
            td(style="background-color: #ECDACC; border: 2px solid #785549;") Para grabaciones sonoras y videos.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
