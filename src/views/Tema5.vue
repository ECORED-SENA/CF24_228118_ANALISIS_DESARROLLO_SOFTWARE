<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Tareas asincrónicas

    .row.bg17.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center          
              .col-lg-7.my-3
                p(data-aos="fade-down") Todos los componentes de una aplicación Android, como las actividades, los servicios o los broadcast receivers, se ejecutan en el mismo hilo de ejecución, llamado hilo principal, #[i main thread] o #[i GUI thread]. Como sugiere este último nombre, también es el hilo donde se realizan todas las operaciones que gestionan la interfaz de usuario de la aplicación. Por ello, cualquier operación larga o costosa que se realice en este hilo bloqueará la ejecución del resto de componentes de la aplicación y, por supuesto, también la interfaz, produciendo un efecto evidente de lentitud, bloqueo o mal funcionamiento en general para el usuario.
                .bg1.brad.px-3.mb-5
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/68.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down").mb-0.code2 Android utiliza la clase AsyncTask para ejecutar tareas en segundo plano.

              .col-lg-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='')  

            p(data-aos="fade-down") La forma básica de utilizar la clase #[b AsyncTask] consiste en crear una nueva clase que extienda de ella y sobrescribir varios de sus métodos, distribuyendo la funcionalidad de la tarea entre ellos. Estos métodos son los siguientes:  

            .row.bg10.align-items-center.pt-3.mb-4
              .col-lg-12.col-12.px-lg-5.px-4.up
                .row.justify-content-center.align-items-center
                  .col-md-6.col-lg-4.mb-4.mb-md-0.up.d-none.d-lg-block(data-aos="fade-right")
                    img(src='@/assets/curso/temas/70.png', alt='')
                  .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
                    SlyderF.text-center.mb-3(columnas="col-lg-6")
                      .tarjeta.bgcard.ts.h-100.p-4
                        .row.justify-content-center.mb-3
                          .col-8
                            img.img-a.img-t(src='@/assets/curso/temas/71.png' alt='')
                        h5.code2 onPreExecute()
                        p.mb-0.code Se ejecutará antes del código principal de nuestra tarea. Se suele utilizar para preparar la ejecución de la tarea, inicializar la interfaz, etc.    

                      .tarjeta.bgcard.ts.h-100.p-4
                        .row.justify-content-center.mb-3
                          .col-8
                            img.img-a.img-t(src='@/assets/curso/temas/72.png' alt='')
                        h5.code2 doInBackground() 
                        p.mb-0.code Contendrá el código principal de nuestra tarea.  

                      .tarjeta.bgcard.ts.h-100.p-4
                        .row.justify-content-center.mb-3
                          .col-8
                            img.img-a.img-t(src='@/assets/curso/temas/73.png' alt='')
                        h5.code2 onProgressUpdate()
                        p.mb-0.code Se ejecutará cada vez que llamemos al método publishProgress() desde el método doInBackground(). 

                      .tarjeta.bgcard.ts.h-100.p-4
                        .row.justify-content-center.mb-3
                          .col-8
                            img.img-a.img-t(src='@/assets/curso/temas/74.png' alt='')
                        h5.code2 onPostExecute() 
                        p.mb-0.code Se ejecutará cuando finalice nuestra tarea, o, dicho de otra forma, tras la finalización del método doInBackground().  

                      .tarjeta.bgcard.ts.h-100.p-4
                        .row.justify-content-center.mb-3
                          .col-8
                            img.img-a.img-t(src='@/assets/curso/temas/75.png' alt='')
                        h5.code2 onCancelled() 
                        p.mb-0.code Se ejecutará cuando se cancele la ejecución de la tarea antes de su finalización normal.  

            p(data-aos="fade-down") Estos métodos tienen una particularidad esencial para nuestros intereses. El método doInBackground() se ejecuta en un hilo secundario, por lo tanto, no se puede interactuar con la interfaz en su interior. Sin embargo, todos los demás métodos se ejecutan en el hilo principal, lo que significa que dentro de ellos se puede hacer referencia directa a los controles de usuario para actualizar la interfaz. 
</template>

<script>
export default {
  name: 'Tema5',
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
