<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Multimedia

    .row.justify-content-center          
      .col-lg-7.my-3
        .bg1.text-white.brad.px-3.mb-5
          .row.justify-content-center.align-items-center        
            .col-lg-auto.my-3                  
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png', alt='')         
            .col.my-3
              p(data-aos="fade-down").mb-0 En Android Studio, la integración de contenido multimedia en las aplicaciones es muy sencilla gracias a las opciones que presenta la API. Las principales clases que facilitan el acceso a los servicios multimedia son #[i MediaPlayer] y #[i VideoView], siendo estas las más utilizadas.
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/102.png', alt='')                              



    .row.bg19.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            Separador 
            #t_7_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
              h2 7.1 #[i MediaPlayer]           
            .row.justify-content-center          
              .col-lg-7.my-3
                p(data-aos="fade-down") MediaPlayer permite reproducir sonido y video a través de su API. Es uno de los componentes principales del marco de trabajo de medios. Un objeto de esta clase puede recuperar, decodificar y reproducir audio y video con una configuración mínima. Es compatible con varias fuentes de medios diferentes, entre las que se incluyen las siguientes: URI, recursos locales y URL externas.             
                .bg14.brad.p-4
                  p(data-aos="fade-down").mb-0 A continuación, se presenta un ejemplo de cómo reproducir un archivo de audio que está disponible como recurso local (ubicado en el directorio #[b res/raw/] de la app):

              .col-lg-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/105.png', alt='') 

    .row.bg6.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.p-5 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .tarjeta.bgw.p-4(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.p-2
                  .col-lg-5.my-3.col-md-auto
                    .row
                      .col-auto                   
                        .bg1.brad.py-3
                          .row
                            .col-auto                     
                              .bg27.p-2
                                  h5.t4.mb-0 1
                          .p-3.text-white
                            p(data-aos="fade-down") Crear un directorio dentro de la carpeta res llamada raw.
                  .col-lg-6.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/103.png', alt="Pantalla de Android Studio que presenta el menú contextual para crear un nuevo directorio dentro del proyecto, con opciones adicionales para crear archivos de recursos y actividades.")    

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-5.my-3.col-md-auto
                    .row
                      .col-auto                   
                        .bg1.brad.py-3
                          .row
                            .col-auto                     
                              .bg27.p-2
                                  h5.t4.mb-0 2
                          .p-3.text-white
                            p(data-aos="fade-down") Copiar un sonido en la carpeta raw de extensión mp3.
                  .col-lg-6.my-3.mb-4.mb-md-0
                    .bg1.brad.p-3
                      .row.justify-content-center     
                        .col-lg-auto.my-3 
                          .bgw.p-3.brad.px-4
                            img.img-a.img-t.mb-4(src='@/assets/curso/temas/104.png', alt='') 
                            .row
                              .col-auto
                                .bg28.px-3.py-2.brad.mb-2 
                                  h5.mb-0.t28 Botón 1
                            .row
                              .col-auto
                                .bg28.px-3.py-2.brad.mb-2 
                                  h5.mb-0.t28 Botón 3
                            .row
                              .col-auto
                                .bg28.px-3.py-2.brad
                                  h5.mb-0.t28 Botón 3
                        .col.my-3
                          .row.justify-content-center
                            .col-auto                        
                              .bg28.px-3.py-2.brad.mb-4 
                                h5.mb-0.t28 Button Click Sound
                          .text-white.text-center 
                            p How to play audio on button click 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-5.my-3.col-md-auto
                    .row
                      .col-auto                   
                        .bg1.brad.py-3
                          .row
                            .col-auto                     
                              .bg27.p-2
                                  h5.t4.mb-0 3
                          .p-3.text-white
                            p(data-aos="fade-down") En la clase Java escribe el siguiente código.
                  .col-lg-6.my-3.mb-4.mb-md-0
                    .bg8.p-3
                      img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                    .bg9.p-3
                      p.code(data-aos="fade-right") #[b.code3 public class]#[b.code4 MainActivityPractica] #[b.code3 extends]#[b.code4 AppCompatActivity] {

                      p.ps-3.code(data-aos="fade-right") MediaPlayer cancion;

                      p.code(data-aos="fade-right") }


                .row.justify-content-center.align-items-center.p-2
                  .col-lg-5.my-3.col-md-auto
                    .row
                      .col-auto                   
                        .bg1.brad.py-3
                          .row
                            .col-auto                     
                              .bg27.p-2
                                  h5.t4.mb-0 4
                          .p-3.text-white
                            p(data-aos="fade-down") Se crea la instancia del sonido.
                  .col-lg-6.my-3.mb-4.mb-md-0
                    .bg8.p-3
                      img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                    .bg9.p-3
                      p.code(data-aos="fade-right") #[b.code3 protected void] #[b.code4 onCreate](Bundle savedInstanceState) {
                      p.ps-3.code(data-aos="fade-right") #[b.code5 super].onCreate(savedInstanceState);
                      p.ps-3.code(data-aos="fade-right") setContentView(R.layout.activity_main);

                      p.ps-3.code(data-aos="fade-right") cancion = MediaPlayer.create(#[b.code5 this], R.raw.bruja);
                      p.code(data-aos="fade-right") } 

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-5.my-3.col-md-auto
                    .row
                      .col-auto                   
                        .bg1.brad.py-3
                          .row
                            .col-auto                     
                              .bg27.p-2
                                  h5.t4.mb-0 5
                          .p-3.text-white
                            p(data-aos="fade-down") Ejecución del sonido.
                  .col-lg-6.my-3.mb-4.mb-md-0
                    .bg8.p-3
                      img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                    .bg9.p-3
                      p.code(data-aos="fade-right") #[b.code3 protected void] #[b.code4 onCreate](Bundle savedInstanceState)  {
                      p.ps-3.code(data-aos="fade-right") #[b.code5 super].onCreate(savedInstanceState);
                      p.ps-3.code(data-aos="fade-right") setContentView(R.layout.activity_main);

                      p.ps-3.code(data-aos="fade-right") cancion = MediaPlayer.create(#[b.code5 this], R.raw.bruja);
                      p.code(data-aos="fade-right") }

                .row.justify-content-center.align-items-center.p-2
                  .col-lg-5.my-3.col-md-auto
                    .row
                      .col-auto                   
                        .bg1.brad.py-3
                          .row
                            .col-auto                     
                              .bg27.p-2
                                  h5.t4.mb-0 6
                          .p-3.text-white
                            p(data-aos="fade-down") Ejecución del sonido.
                  .col-lg-6.my-3.mb-4.mb-md-0
                    .bg8.p-3
                      img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                    .bg9.p-3
                      p.code(data-aos="fade-right") #[b.code3 public void] #[b.code4 iniciarSonido](View view) {
                      p.ps-3.code(data-aos="fade-right") cancion.start();
                      p.code(data-aos="fade-right") }
                      
    Separador 
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.2 #[i VideoView]    

    p(data-aos="fade-down") La clase #[i VideoView] permite presentar un archivo de video. Puede cargar videos de varias fuentes (como recursos o proveedores de contenido). La propiedad principal de VideoView es setVideoURI, donde se establece la ruta del video.

    p(data-aos="fade-down") A continuación, se describe un ejemplo para utilizar #[i VideoView]: 

    ol.lista-ol--cuadro.fa-ul.mb-5
      li 
        .lista-ol--cuadro__vineta
          span A.
        span Al igual que con el MediaPlayer, se debe crear la carpeta res/raw y guardar en esta carpeta el video con extensión .mp4.     

      li 
        .lista-ol--cuadro__vineta
          span B.
        span En el layout, se crea el componente VideoView.  

    .row.justify-content-center.mb-5 
      .col-lg-5
        .bg8.p-3
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
        .bg9.p-3
          p.code(data-aos="fade-right") &#60;VideoView
          p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/videoview"]
          p.ps-3(data-aos="fade-right") #[b.code1  android:layout_width]#[b.code =]#[b.code2 "match_parent"]
          p.ps-3.code(data-aos="fade-right") #[b.code1  android:layout_height]#[b.code =]#[b.code2 "wrap_content"] /> 
    .row.bg17.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            ol.lista-ol--cuadro.fa-ul.mb-5
              li 
                .lista-ol--cuadro__vineta
                  span C.
                span En la clase Java se realiza todo el código:    

            .row.justify-content-center 
              .col-lg-8
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3
                  p.code(data-aos="fade-right") #[b.code3 public class] #[b.code4 MainActivity] #[b.code3 extends] #[b.code4 AppCompatActivity] {

                  p.ps-3.code(data-aos="fade-right") // Paso 1. Se declara el VideoView
                  p.ps-3.code(data-aos="fade-right") VideoView videoView;

                  p.ps-3.code(data-aos="fade-right") @Override
                  p.ps-3.code(data-aos="fade-right") #[b.code3 protected void] #[b.code4 onCreate](Bundle savedInstanceState) { // Método principal
                  p.ps-5.code(data-aos="fade-right") #[b.code5 super].onCreate(savedInstanceState);
                  p.ps-5.code(data-aos="fade-right") setContentView(R.layout.activity_main);

                  p.ps-5.code(data-aos="fade-right") // Paso 2. Referenciar el VideoView
                  p.ps-5.code(data-aos="fade-right") videoView = findViewById(R.id.videoview);

                  p.ps-5.code(data-aos="fade-right") // Paso 3. Se asigna la ruta al VideoView
                  p.ps-5.code(data-aos="fade-right") videoView.setVideoPath(#[b.code2 "android.resource://"] + getPackageName() + "/" + R.raw.video);

                  p.ps-5.code(data-aos="fade-right") // 4. La propiedad SetMediaController permite visualizar los controles de pausar, adelantar, iniciar
                  p.ps-5.code(data-aos="fade-right") videoView.setMediaController(#[b.code3 new] #[b.code4 MediaController](#[b.code5 this]));

                  p.ps-5.code(data-aos="fade-right") // 5. Se inicia la ejecución de video
                  p.ps-5.code(data-aos="fade-right") videoView.start();
                  p.ps-3.code(data-aos="fade-right") }
                  p.code(data-aos="fade-right") }

            img.img-a.img-t.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/106.png', alt='')
</template>

<script>
export default {
  name: 'Tema7',
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
