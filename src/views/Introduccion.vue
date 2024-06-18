<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            p(data-aos="fade-down") Actualmente, los sistemas operativos para dispositivos móviles permiten la construcción de aplicaciones mediante el uso de un software llamado SDK. Tanto Android como iOS ofrecen sus respectivas herramientas para crear aplicaciones nativas. Las características de los dispositivos móviles, como GPS, cámara y navegación por internet, se aprovechan en el desarrollo de aplicaciones, permitiendo ideas interesantes y útiles para los usuarios. 

            .row.justify-content-center          
              .col-lg-8.my-3
                .bg1.brad.p-3.mb-5
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down").text-white.mb-0 El sistema operativo Android es compatible con la mayoría de los dispositivos y es, hoy en día, uno de los más utilizados en teléfonos móviles. El mercado de aplicaciones para Android está en constante crecimiento, y la presencia de empresas y sus aplicaciones en esta plataforma es prácticamente un requisito indispensable. Por lo tanto, el desarrollo de aplicaciones para este sistema puede convertirse en una excelente oportunidad laboral para muchos ingenieros.
       
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')  

          .bgw.brad.p-4    
            p(data-aos="fade-down").mb-0 Este componente formativo se enfoca en el desarrollo de aplicaciones nativas para la plataforma Android, utilizando su entorno de desarrollo oficial, Android Studio, y el lenguaje Java.                     
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
