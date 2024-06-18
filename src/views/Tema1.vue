<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Estructura de un proyecto en Android Studio
      
    p(data-aos="fade-down") Las actualizaciones en Android Studio avanzan rápidamente. Para este componente, los ejemplos se presentan para la versión 4.1.3.      

    .row.justify-content-center          
      .col-lg-9.my-3
        .bg2.brad.p-3.mb-5
          .row.justify-content-center.align-items-center        
            .col-lg-auto.my-3                  
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')         
            .col.my-3
              p(data-aos="fade-down").mb-0 En Android Studio, un proyecto contiene todos los elementos necesarios para el desarrollo de una aplicación: desde código fuente y recursos hasta código de prueba y configuraciones de compilación. Al iniciar un nuevo proyecto, Android Studio crea la estructura necesaria para todos los archivos y los organiza en la ventana Project, ubicada en el lado izquierdo del IDE (accede a ella mediante View > Tool Windows > Project), o utilizando el acceso directo Alt + 1.

      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')    

    .row.bg3.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center        
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") A continuación, se presenta la estructura:    
            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 1.
                  span Imagen estructura de proyecto en Android Studio
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='Nombre del Proyecto: Estructura de proyecto en Android Studio destacando la carpeta "Project".')    

    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") Ahora bien, las vistas de proyectos en Android, o la visualización completa de la estructura de archivos del proyecto, se realizan mediante la opción "Project" del menú desplegable en la parte superior de la ventana, como se ilustra a continuación.     

    .row.bg3.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 2.
                  span Vista estructura del proyecto  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt=' Estructura de proyecto en Android Studio con todas las carpetas del proyecto visibles.')  

    .row.justify-content-center.my-5
      .col-lg-10 
        .row.justify-content-center.align-items-center.bg4.p-3.brad        
          .col-lg-auto.my-3                  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')         
          .col.my-3
            p(data-aos="fade-down") Los proyectos de Android Studio tienen unos componentes principales que se explican en el siguiente video, los cuales se distribuyen entre:
            ul.lista-ul--color.fa-ul.mb-0.ms-0
              li 
                i.fas.fa-cube.color1
                | Módulos
              li 
                i.fas.fa-cube.color1
                | Archivos de proyecto

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Manifest     


    .row.justify-content-center.align-items-center       
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-auto.my-3                  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')         
          .col.my-3
            p(data-aos="fade-down") En el manifest se encuentra la información esencial de una aplicación para las herramientas de desarrollo de Android, el sistema operativo Android y Google Play. El manifest es un archivo en lenguaje XML donde se definen aspectos principales de la aplicación, como su identificación (nombre, ícono, estilos), sus componentes (pantallas, servicios) y los permisos necesarios para su ejecución. 
        .bg5.p-3.brad   
          p(data-aos="fade-down").mb-0 A continuación, se presentan algunos de los elementos más importantes que se deben declarar en el archivo manifest:
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')         

    .row.bg3.align-items-center.my-5
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 3.
                  span Archivo manifest   
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='Contenido del archivo AndroidManifest.xml en Android Studio.')

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0.fst-italic Java                 

    .row.justify-content-center.align-items-center      
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") La carpeta java contiene todo el código fuente de la aplicación, organizado en paquetes, clases, interfaces, POJOs (Plain Old Java Objects), entre otros. Inicialmente, Android Studio crea el código básico de la pantalla principal de la aplicación (actividad o activity), que por defecto se llamará MainActivity, siempre bajo la estructura del paquete java definido durante la creación del proyecto. 

    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 4.
                  span Clase MainActivity de la carpeta java    
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='Código de la clase MainActivity en Android Studio.')    

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0.fst-italic Res                 

    .row.justify-content-center.align-items-center      
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") En esta carpeta se encuentran todos los recursos del proyecto que no contienen código, como diseños XML, cadenas de texto de la interfaz de usuario y también imágenes de mapa de bits, organizados en subdirectorios. 

    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 5.
                  span Imagen estructura carpeta res      
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='Estructura de carpetas en Android Studio destacando la carpeta "res".')  

    p(data-aos="fade-down").mb-3 A continuación, se explican las subcarpetas:

    .row.bg6.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.p-5 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .tarjeta.bgw.p-4(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t2 Subcarpeta drawable
                    p #[i #[b /res/drawable:]] Contiene las imágenes que se van a usar en la aplicación. Los formatos que soporta son (png, jpg, gif).  
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/16.png', alt="Explorador de archivos de Android Studio mostrando la carpeta 'drawable' que contiene imágenes y archivos XML relacionados con la interfaz gráfica de la aplicación.")    

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t2 Subcarpeta mipmap
                    p #[i #[b /res/mipmap:]] Contiene los íconos que se van a utilizar en la aplicación para las diferentes densidades de las pantallas existentes. Al igual que la carpeta drawable, se divide en subcarpetas dependiendo de la densidad de la pantalla.  
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/17.png', alt="Explorador de archivos de Android Studio mostrando la carpeta 'mipmap' que contiene diferentes resoluciones de iconos de la aplicación.")

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t2 Subcarpeta layout
                    p #[i #[b /res/layout:]] En esta carpeta se define el diseño de la interfaz de usuario. El formato del archivo es en XML.  
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/18.png', alt="Explorador de archivos de Android Studio mostrando la carpeta 'layout' que contiene archivos XML que definen la estructura visual de las actividades de la aplicación.")

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t2 Subcarpeta values
                    p #[i #[b /res/values:]] Esta carpeta contiene archivos XML que contienen valores simples, como strings, temas y colores.  
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/19.png', alt="Explorador de archivos de Android Studio mostrando la carpeta 'values' que contiene archivos XML para definir colores, cadenas de texto y temas de la aplicación.")

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0.fst-italic Gradle                 

    .row.justify-content-center.align-items-center      
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") Gradle permite la compilación del proyecto. En este, es posible configurar la versión del SDK que Android utilizará para compilar, la versión mínima de Android que soportará la aplicación, referencias a las bibliotecas externas utilizadas, entre otros aspectos. 

    .row.bg3.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 6.
                  span Gradle Scripts  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='Estructura de proyecto en Android Studio destacando los scripts de Gradle.')                      

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
