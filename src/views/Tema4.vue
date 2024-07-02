<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Navegación (Intents)

    p(data-aos="fade-down") La navegación entre pantallas en Android se realiza a través de los Intents. El Intent es básicamente una intención de realizar una acción; es la forma de comunicación en Android que permite la interacción entre componentes de la misma aplicación o entre diferentes aplicaciones (Activities, Services, Broadcasts, etc.).

    p(data-aos="fade-down") Existen dos tipos de Intents:

    .row.justify-content-start.mb-4.mt-5
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Intent explícito   

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-7.my-3
        p(data-aos="fade-down") Se utiliza para llamar a un componente específico. Por ejemplo, si se tiene una aplicación que contiene dos actividades, Actividad A y Actividad B, y se requiere navegar desde la Actividad A hasta la Actividad B, se define una intención explícita.

        p(data-aos="fade-down") Para ello, se utiliza la clase Intent donde se especifica dónde está y a dónde se quiere ir: 

        .bg8.p-3
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
        .bg9.p-3
          p.code(data-aos="fade-right") #[b.code4 Intent intent] #[b.code3 new] #[b.code4 Intent](ActividadA.#[b.code5 this], ActividadB.class);
          p.code(data-aos="fade-right") startActivity(intent);                            
      .col-lg-5.my-3
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/63.png', alt='')

    .row.justify-content-center.mb-5
      .col-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 19.
          span Uso intent explicito  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.svg', alt='Un diagrama que explica el flujo de navegación en Android, mostrando la interacción entre Activity A, Android System y Activity B utilizando Intents.')   

    p(data-aos="fade-down") La figura presenta cómo se utiliza un intent para iniciar una actividad. Cuando el objeto Intent nombra un componente de actividad específico de forma explícita, el sistema inicia ese componente al instante.              

    .row.justify-content-start.mb-4.mt-5
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Intent implícito   

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-7.my-3
        p(data-aos="fade-down") A diferencia de los explícitos, los intent implícitos no nombran el componente específico. Se usan para iniciar un componente específico de la aplicación. Por ejemplo, si se desea abrir la cámara, una ubicación en un mapa o una página web, se utilizan los intent implícitos para solicitar que se activen estos servicios.

        p(data-aos="fade-down") Ejemplo:

        .bg8.p-3
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
        .bg9.p-3
          p.code(data-aos="fade-right") #[b.code4 Intent intent] #[b.code3 new] Intent(Intent.ACTION_VIEW, Uri.parse(#[b.code2 "http://www.example.com"]));
          p.code(data-aos="fade-right") startActivity(intent);                            
      .col-lg-5.my-3
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/65.png', alt='')
</template>

<script>
export default {
  name: 'Tema4',
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
