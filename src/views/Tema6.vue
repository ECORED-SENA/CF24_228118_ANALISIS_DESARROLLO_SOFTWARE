<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Persistencia de datos

    .row.justify-content-center          
      .col-lg-7.my-3
        .bg1.text-white.brad.px-3.mb-5
          .row.justify-content-center.align-items-center        
            .col-lg-auto.my-3                  
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png', alt='')         
            .col.my-3
              p(data-aos="fade-down").mb-0 En el desarrollo móvil, es indispensable que las aplicaciones puedan guardar datos, ya sea para no perder información en una nueva ejecución o para manejar información en bases de datos. La persistencia de datos es una habilidad esencial para que un desarrollador cree aplicaciones de alta calidad. Uno de los métodos más comunes de almacenamiento en Android es el de las Bases de Datos en SQLite.
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/77.png', alt='')                              

    Separador 
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.1 Bases de datos local SQLite 

    p(data-aos="fade-down").mb-5 SQLite es un motor de bases de datos relacional de código abierto y actualmente muy popular, ya que ofrece particularidades muy útiles como su pequeño tamaño, ligereza, no necesitar servidor, requerir poca configuración y guardar toda la base de datos en un solo fichero. Su uso es muy habitual en aplicaciones de tamaño pequeño.    

    .row.bg19.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center.mb-5          
              .col-lg-8.text-white      
                .bg20.brad.px-3.mb-2(data-aos="fade-right")
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down").mb-0 Android incluye soporte para SQLite y utiliza el paquete android.database.sqlite para trabajar con bases de datos.

                .bg21.brad.px-3.mb-2(data-aos="fade-right")
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down").mb-0 Permite ejecutar la aplicación en tiempo real en el dispositivo móvil.

                .bg22.brad.px-3.mb-2(data-aos="fade-right")
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down").mb-0 Para crear un esquema de base de datos o actualizar el mismo, se debe crear una clase que herede de SQLiteOpenHelper, donde se implementa el constructor y dos métodos abstractos (obligatorios de implementar): onCreate() y onUpgrade(). 

                .bg23.brad.px-3.mb-2(data-aos="fade-right")
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down").mb-0 A través de los métodos getReadableDatabase() y getWritableDatabase(), se abre y se obtiene una instancia de la base de datos de solo lectura o de lectura y escritura, respectivamente. 

                .bg24.brad.px-3.mb-2(data-aos="fade-right")
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down").mb-0 Para la creación de las tablas, se ejecutan las sentencias SQL dentro del método onCreate() utilizando el método db.execSQL.
            .row.justify-content-center.align-items-center          
              .col-lg-8
                p(data-aos="fade-down").mb-0 Para la administración de una base de datos SQLite se utiliza la clase SQLiteDatabase:
                
    .row.justify-content-center.align-items-center          
      .col-lg-8                
        p(data-aos="fade-down") SQLiteDatabase: tiene métodos para crear, eliminar, ejecutar comandos SQL y realizar otras tareas comunes de administración de bases de datos.

        p(data-aos="fade-down").mb-5 Los métodos más utilizados son:  

    .row.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Tabla 7.
          span Métodos de administración de bases de datos de la clase SQLiteDatabase
    .row.bg15.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.mb-5
              .col-lg-7
                .tabla-a.color-acento-contenido(data-aos="fade-down")
                  table
                    thead.bgh
                      tr
                        th(style="width: 240px") Acción
                        th Definición 
                    tbody.bgb  
                      tr
                        td Insertar datos
                        td db.insert
                      tr
                        td Consultar datos
                        td db.rawQuery() y db.query() 
                      tr
                        td Eliminar datos
                        td db.delete 
                      tr
                        td Actualizar datos
                        td db.update 
                      tr
                        td Ejecutar sentencia SQL
                        td db.execute

            .row.justify-content-center          
              .col-lg-10.my-3
                .bg1.brad.px-3
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/80.png', alt='')         
                    .col.my-3.text-white
                      p(data-aos="fade-down").mb-0 Para reflejar la utilidad de las bases de datos SQLite, se realizará un ejemplo de una base de datos para registro de usuarios y de entidades. Se tendrá una actividad de solicitud de datos para la creación, actualización y borrado en la base de datos, permitiendo gestionar la información de forma persistente.

    Separador 
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.2 Bases de datos en tiempo real


    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center          
              .col-lg-7.my-3
                p(data-aos="fade-down") Una base de datos en tiempo real se refiere a un sistema de base de datos que procesa datos en tiempo real, tomando los datos entrantes a medida que fluyen del servidor. La base de datos en tiempo real de Firebase (Firebase Realtime Database) es sin duda uno de los servicios más populares de la plataforma.              
                .bg14.brad.px-3
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/81.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down").mb-0 Firebase es una plataforma para el desarrollo de aplicaciones web y móviles, creada por James Tamplin y Andrew Lee en 2011, y adquirida por Google en 2014. Provee servicios muy útiles que se pueden incorporar en aplicaciones Android (además de otros sistemas operativos), tales como:

              .col-lg-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/82.png', alt='')         


    .row.bg26.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12   
            .tarjeta.bg25.p-4.mb-5(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.p-2
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/84.png', alt="")           
                  .col-lg-6.my-3.col-md-auto
                    h4.code5.mb-4 Analytics 
                    .text-white
                      p Firebase Analytics proporciona una visión profunda sobre el uso de la aplicación por parte de los usuarios, con datos que sirven para analizar el comportamiento de los usuarios con la aplicación.

                .row.justify-content-center.p-2
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/85.png', alt="")           
                  .col-lg-6.my-3.col-md-auto
                    h4.code5.mb-4 Auth 
                    .text-white
                      p Servicio que puede autenticar a los usuarios utilizando únicamente código del lado del cliente. Incluye la autenticación mediante Facebook, GitHub, Twitter y Google. Además, incluye un sistema de administración del usuario por el cual los desarrolladores pueden habilitar la autenticación de usuarios con email y contraseña. 

                .row.justify-content-center.p-2
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/86.png', alt="")           
                  .col-lg-6.my-3.col-md-auto
                    h4.code5.mb-4.fst-italic Database 
                    .text-white
                      p Proporciona una base de datos en tiempo real y #[i back-end]. El servicio proporciona a los desarrolladores de aplicaciones una API que permite que la información de las aplicaciones sea sincronizada y almacenada en la nube de Firebase. 

                .row.justify-content-center.p-2
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/87.png', alt="")           
                  .col-lg-6.my-3.col-md-auto
                    h4.code5.mb-4.fst-italic Storage 
                    .text-white
                      p Proporciona cargas y descargas seguras de archivos para aplicaciones Firebase, sin importar la calidad de la red. El desarrollador lo puede utilizar para almacenar imágenes, audio, vídeo, u cualquier otro contenido generado por el usuario. 

                .row.justify-content-center.p-2
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/88.png', alt="")           
                  .col-lg-6.my-3.col-md-auto
                    h4.code5.mb-4.fst-italic Notifications 
                    .text-white
                      p Con Firebase se puede usar la API FirebaseMessaging que permite el envío de mensajes desde Firebase hacia un dispositivo concreto o múltiples dispositivos, pudiendo gestionar las notificaciones desde la consola de Firebase.                                                         
            .row.justify-content-center.align-items-center        
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") Principales características de Firebase Realtime Database: 

            .row.justify-content-center.text-center.mb-5       
              .col-lg-2.my-3
                .bg1.brad.p-3.text-white.h-100
                  img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/90.svg', alt='') 

                  p(data-aos="fade-down").mb-0 No requiere la instalación de un servidor ni de #[i software] adicional, ya que la base de datos está alojada en la nube.     

              .col-lg-2.my-3
                .bg1.brad.p-3.text-white.h-100
                  img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/91.svg', alt='') 

                  p(data-aos="fade-down").mb-0 El formato de almacenamiento de los datos es JSON, utilizando una base de datos no relacional. 

              .col-lg-2.my-3
                .bg1.brad.p-3.text-white.h-100
                  img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/92.svg', alt='') 

                  p(data-aos="fade-down").mb-0 La actualización de los datos se realiza en milisegundos debido a la sincronización en tiempo real. 

              .col-lg-2.my-3
                .bg1.brad.p-3.text-white.h-100
                  img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='') 

                  p(data-aos="fade-down").mb-0 Permite el desarrollo de aplicaciones multiplataforma para iOS, Android y Web (JavaScript). 

              .col-lg-2.my-3
                .bg1.brad.p-3.text-white.h-100
                  img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/94.svg', alt='') 

                  p(data-aos="fade-down").mb-0 Incluso cuando el dispositivo se encuentra sin conexión a Internet, la aplicación sigue funcionando gracias a la caché.

            .row.justify-content-center.align-items-center        
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") Para crear un proyecto con Firebase se deberán tener lo siguiente:                  
            .row.justify-content-center.mb-5       
              .col-lg-8
                .bg14.brad.px-3.mb-5
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/95.png', alt='')         
                    .col.my-3
                      ul.lista-ul--color.fa-ul.mb-0.ms-0
                        li 
                          i.fas.fa-cube.color1
                          | Una cuenta de Gmail para acceder a la consola de Firebase https://console.firebase.google.com

                        li.mb-0 
                          i.fas.fa-cube.color1
                          | Un proyecto de Android Studio para poder hacer la conexión con la base de datos de Firebase.

            .row.justify-content-center.align-items-center        
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") Para la configuración de Firebase en el proyecto de Android Studio se enumera los pasos siguientes:
            .row.justify-content-center.align-items-center        
              .col-lg-10
                PasosA.color-primario(tipo="n")
                  .row.justify-content-center.align-items-center(data-aos="fade-left")
                    .col-lg-6.my-3
                      h5.t4 Crear un Proyecto en la consola de Firebase.  

                    .col-lg-6.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/96.png', alt='')

                  .row.justify-content-center.align-items-center(data-aos="fade-right")
                    .col-lg-6.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/97.png', alt='')
                    .col-lg-6.my-3
                      h5.t4 Agregar el proyecto.    

                  .row.justify-content-center.align-items-center(data-aos="fade-left")
                    .col-lg-6.my-3
                      h5.t4 Seleccionar la plataforma para agregar a la APP.  

                    .col-lg-6.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/98.png', alt='')

                  .row.justify-content-center.align-items-center(data-aos="fade-right")
                    .col-lg-6.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/99.png', alt='')
                    .col-lg-6.my-3
                      .t4
                        h5 Ingresar el nombre del paquete de la APP en el campo Nombre del paquete.
                        h5 más importante es copiar el paquete de su proyecto de Android Studio que se encuentra en el manifest com.dominio.proyecto.  

                  .row.justify-content-center.align-items-center(data-aos="fade-left")
                    .col-lg-6.my-3
                      h5.t4 Descargar archivo Json google-services.json y copiarlo en la raíz del proyecto de Android Studio.  

                    .col-lg-6.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/100.png', alt='')

                  .row.justify-content-center.align-items-center(data-aos="fade-right")
                    .col-lg-6.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/101.png', alt='')
                    .col-lg-6.my-3
                      .t4
                        h5 Agregar SDK de Firebase.
                        h5 Copiar las librerías al gradle del proyecto en Android Studio y ya está lista la configuración de Android Studio con Firebase.
</template>

<script>
export default {
  name: 'Tema6',
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
