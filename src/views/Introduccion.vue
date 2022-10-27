<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.BGIMG01.p-4.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img01.png")
      .col-lg-10(data-aos="fade-left")
        p.mb-0 Aquí comienza el estudio de las temáticas del componente formativo “<span style="color:#FD9827">#[b Ordenación de los recursos de información bibliográfica]</span>”. Comience esta experiencia de aprendizaje, explorando con suma atención el video que se muestra a continuación. <span style="color:#FD9827">#[b ¡Adelante!]</span>
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
