<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Eventos #[i listeners]

    .row.bg17.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            p(data-aos="fade-down") En Android, la interacción del usuario con la aplicación se gestiona a través de eventos. Por ejemplo, cuando se toca una vista (como un botón), se llama al método #[b onTouchEvent()] del objeto, utilizando los objetos de escucha de eventos para detectar la interacción del usuario.

            .row.justify-content-center          
              .col-lg-7.my-3
                .bg2.brad.px-3.mb-5
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/61.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down").mb-0 Los #[i Event Listeners] (objetos de escucha de eventos) son interfaces de la clase #[i View] que contienen un método de llamada, el cual será invocado cuando la vista registre una interacción del usuario con el elemento de la interfaz gráfica. Esto significa que los #[i View], como #[i Button], #[i ImageView], #[i RadioButton] y #[i Checkbox], al interactuar con el usuario, el objeto escuchará y llamará al método correspondiente, ejecutando una acción determinada.

              .col-lg-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.png', alt='')  

            p(data-aos="fade-down") La ejecución de los eventos se realiza en el código Java ubicado en la carpeta /#[b java].

            p(data-aos="fade-down").mb-5 Para fijar un #[i listener], se debe implementar y agregar los métodos del evento correspondiente a cada #[i View] mediante el método #[b setOn]. Para realizar el ejemplo del evento #[i listener] de un #[i Button], se deben seguir algunos pasos:

            .row.justify-content-start.mb-4.mt-5
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 Crear el #[i Button] en el #[i Layout]

            .row.justify-content-center
              .col-lg-6.my-3
                p(data-aos="fade-down") Crear el Button en el Layout con su propiedad ID, ya que es la que nos va a permitir referenciarlo desde el código Java. Se muestra la creación de un botón en el layout llamado activity_main.xml. El código XML tiene un contenedor de tipo LinearLayout con su propiedad vertical y el Button es creado con sus propiedades básicas. La propiedad que se necesita para referenciar es la del id. El nombre del identificador que se colocó para el ejemplo fue btnclic, y en la vista de diseño se puede ver cómo queda el botón. Estas son las diferentes vistas en las que se puede trabajar en el layout: 

                .bg14.p-3.brad 
                  ul.lista-ul--color.fa-ul.mb-0.ms-0
                    li 
                      i.fas.fa-cube.color1
                      span #[i #[b Code:]] permite visualizar solo el código XML. 
                    li 
                      i.fas.fa-cube.color1
                      span #[i #[b Split:]] permite visualizar el código y el diseño como se ve en la figura. 
                    li 
                      i.fas.fa-cube.color1
                      span #[i #[b Design:]] permite visualizar solo el editor de diseño. 

              .col-lg-6.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3
                  p(data-aos="fade-right") #[b.code &#60;LinearLayout] #[b.code1 xmlns:android]#[b.code =]#[b.code2 "http://schemas.android.com/apk/res/android"]
                  p.ps-3(data-aos="fade-right") #[b.code1 xmlns:app]#[b.code =]#[b.code2 "http://schemas.android.com/apk/res-auto"]
                  p.ps-3(data-aos="fade-right") #[b.code1 xmlns:tools]#[b.code =]#[b.code2 "http://schemas.android.com/tools"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:orientation]#[b.code =]#[b.code2 "vertical"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "match_parent"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_marginTop]#[b.code =]#[b.code2 "80dp"]
                  p.ps-3(data-aos="fade-right") #[b.code1 tools:context]#[b.code =]#[b.code2 ".MainActivity"]#[b.code >]

                  p.code.ps-3(data-aos="fade-right") &#60;Button
                  p.ps-5(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/btnclic"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:text]#[b.code =]#[b.code2 "@string/click"] #[b.code />]

                  p.code(data-aos="fade-right") &#60;/LinearLayout>

            .row.justify-content-start.mb-4.mt-5
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 Declarar el tipo de view                   

            p(data-aos="fade-down") En la clase Java, declarar el tipo de view y referenciarlo. La clase en Java está compuesta por un método principal que se llama onCreate. Todo el código que esté dentro de este método se ejecuta inmediatamente se corra la aplicación. Cada clase tiene relacionado su layout en el método setContentView, por lo tanto, se debe referenciar los view en cada clase que lo contenga. En el ejemplo, la clase Java MainActivity contiene el layout activity_main que es donde se creó el Button.

            .row.justify-content-center.align-items-center          
              .col-lg-8.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3 
                  p.code(data-aos="fade-right") #[b.code3 import] android.os.Bundle;
                  p.code(data-aos="fade-right") #[b.code3 import] android.widget.Button;
                  p.code(data-aos="fade-right") #[b.code3 import] androidx.appcompat.app.AppCompatActivity;

                  p.code(data-aos="fade-right") #[b.code3 public class] #[b.code4 MainActivity] #[b.code3 extends] #[b.code4 AppCompatActivity] {

                  p.ps-3.code(data-aos="fade-right") Button btnclic; // Declarar el botón

                  p.ps-3.code(data-aos="fade-right") @Override
                  p.ps-3.code(data-aos="fade-right") #[b.code3 protected void] #[b.code4 onCreate](Bundle savedInstanceState) { // Método principal
                  p.ps-5.code(data-aos="fade-right") #[b.code5 super].onCreate(savedInstanceState);
                  p.ps-5.code(data-aos="fade-right") setContentView(R.layout.activity_main);

                  p.ps-5.code(data-aos="fade-right") /* Para referenciar el Button que está en el layout
                  p.ps-5.ms-4.code(data-aos="fade-right") se hace por medio del Id y con el método findViewByID */
                  p.ps-5.code(data-aos="fade-right") btnclic = findViewById(R.id.btnclic);

                  p.ps-5.code(data-aos="fade-right") /* En la variable btnclic quedan almacenadas las propiedades del botón
                  p.ps-5.ms-4.code(data-aos="fade-right") para poder manejar el evento listener */
                  p.ps-3.code(data-aos="fade-right") }
                  p.code(data-aos="fade-right") }

            .row.justify-content-start.mb-4.mt-5
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 Implementar el evento #[i listener]

            .row.justify-content-center
              .col-lg-5.my-3
                p(data-aos="fade-down") Implementar el evento listener: En la figura se ve la implementación del evento setOnClickListener para que cuando el usuario dé clic en el botón se ejecute una instrucción. El código debe escribirse en el método onClick.

                p(data-aos="fade-down") Los View tiene diferentes métodos escuchadores, en la tabla que se encuentra a continuación se pueden observar los más utilizados:

                .bg14.p-3.brad 
                  ul.lista-ul--color.fa-ul.mb-0.ms-0
                    li 
                      i.fas.fa-cube.color1
                      span #[i #[b ListView.]] SetOnItemClickListener
                    li 
                      i.fas.fa-cube.color1
                      span #[i #[b Spinner.]] SetOnItemSelectedListener.
                    li 
                      i.fas.fa-cube.color1
                      span #[i #[b ImageView.]] SetOnClickListener
                    li 
                      i.fas.fa-cube.color1
                      span #[i #[b RadioButton.]] SetOnClickListener

              .col-lg-7.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3
                  p.code3(data-aos="fade-right") public class #[b.code4 MainActivity] extends #[b.code4 AppCompatActivity] #[b.code {]

                  p.ps-3.code(data-aos="fade-right") Button btnclic; // Declarar el botón

                  p.ps-3.code(data-aos="fade-right") @Override
                  p.ps-3.code(data-aos="fade-right") #[b.code3 protected void] #[b.code4 onCreate](Bundle savedInstanceState) { // Método principal
                  p.ps-5.code(data-aos="fade-right") #[b.code5 super].onCreate(savedInstanceState);
                  p.ps-5.code(data-aos="fade-right") setContentView(R.layout.activity_main);

                  p.ps-5.code(data-aos="fade-right") /* Para referenciar el Button que está en el layout
                  p.ps-5.ms-4.code(data-aos="fade-right") se hace por medio del Id y con el método findViewByID */
                  p.ps-5.code(data-aos="fade-right") btnclic = findViewById(R.id.btnclic);

                  p.ps-5.code(data-aos="fade-right") /* En la variable btnclic quedan almacenadas las propiedades del botón
                  p.ps-5.ms-4.code(data-aos="fade-right") para poder manejar el evento listener */
                  p.ps-5.code(data-aos="fade-right") btnclic.setOnClickListener(#[b.code3 new] #[b.code4 View].OnClickListener() {
                  p.ps-5.ms-4.code(data-aos="fade-right") @Override
                  p.ps-5.ms-4.code(data-aos="fade-right") #[b.code3 public void] #[b.code4 onClick](View v) {
                  p.ps-5.ms-5.code(data-aos="fade-right") // Aquí se colocan las instrucciones que se quieran ejecutar al dar clic en el botón
                  p.ps-5.ms-4.code(data-aos="fade-right") }
                  p.ps-5.code(data-aos="fade-right") });
                  p.ps-3.code(data-aos="fade-right") }
                  p.code(data-aos="fade-right") }                   
            
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
