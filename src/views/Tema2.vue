<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Interfaz de usuario en Android
      
    .row.justify-content-center.align-items-center          
      .col-lg-9.my-3
        p(data-aos="fade-down") La interfaz de usuario se define a través de la estructura de un diseño para la aplicación, como en el caso de una actividad en Android. La creación de los elementos del diseño se realiza utilizando una jerarquía de objetos View y ViewGroup. Los View son los elementos que el usuario puede interactuar con, como botones, textos e imágenes, mientras que un ViewGroup es un contenedor no visible que define la estructura del diseño de los View y otros objetos.
          .bg5.brad.p-3
            p(data-aos="fade-down").mb-0 Los objetos ViewGroup se denominan Layout (diseños) y existen en varios tipos, dependiendo de la distribución y la posición de sus View. Ejemplos de estos son LinearLayout, RelativeLayout, entre otros.
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')  

    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 7.
                  span Ilustración jerarquía de diseño   
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='Diagrama presenta la jerarquía de vistas en Android, con Activity, ViewGroup y View.')     


    .row.bg3.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center        
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") El diseño en Android se puede trabajar de dos maneras: en XML, o en el editor de diseño (mediante una interfaz de arrastrar y soltar). 
            .row.justify-content-center.mb-5
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 8.
                  span Vista diseño XML 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='Código XML de un layout en Android Studio utilizando ConstraintLayout.')  

            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 9.
                  span Vista diseño XML 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='Vista previa del archivo activity_main.xml en Android Studio.')      

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Layouts     
    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12      
            .row.justify-content-center
              .col-lg-7.my-3
                .bg7.p-4.brad.h-100.j
                  p(data-aos="fade-down") En Android Studio, los componentes visuales (como #[i Button, EditText, TextView], etc.) se organizan mediante contenedores llamados Layout. Los Layouts son elementos no visuales que permiten controlar la organización, posición y dimensiones de los View que se crean dentro de ellos. Al igual que muchos otros componentes contenedores, son capaces de contener otros controles, es decir, se puede tener un contenedor dentro de otro contenedor.
                  p(data-aos="fade-down").mb-0 Existen diferentes tipos de #[i Layout], entre los más comunes están: LinearLayout, #[i TableLayout] y #[i ConstraintLayout]. A continuación, se profundiza en cada uno: 
              .col-lg-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='')                                                 

    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12                   
            .row.justify-content-start.mb-4
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 LinearLayout   

            .row.justify-content-center
              .col-lg-7.my-3
                p(data-aos="fade-down") Un LinearLayout dispone las vistas de la interfaz una debajo de otra (orientación vertical) o una al lado de la otra (orientación horizontal). Sus propiedades principales son:
                ol.lista-ol--cuadro.fa-ul
                  li 
                    .lista-ol--cuadro__vineta
                      span a
                    span #[b #[i Orientation]:] es la propiedad que define la disposición de sus vistas, ya sea horizontal o vertical. 
                  li 
                    .lista-ol--cuadro__vineta
                      span b
                    span #[b #[i Layout_height]:] esta propiedad especifica el alto del #[i ViewGroup] (contenedor). 
                  li 
                    .lista-ol--cuadro__vineta
                      span c
                    span #[b #[i Layout_width]:] esta propiedad especifica el ancho del #[i ViewGroup].

                p(data-aos="fade-down").pt-3 Los valores que pueden tomar las propiedades #[i height] y #[i width] son:
                ul.lista-ul--color.fa-ul.mb-0.ms-0
                  li 
                    i.fas.fa-cube.color1
                    span #[b #[i match_parent]:] para que ocupe el mismo tamaño de la pantalla.
                  li 
                    i.fas.fa-cube.color1
                    span #[b #[i wrap_content]:] para que se adapte al tamaño de su contenido.
                  li 
                    i.fas.fa-cube.color1
                    span Valores personalizados que se miden con dp (píxeles de densidad independiente).

                p(data-aos="fade-down").py-3 Estas propiedades de #[i height] y #[i width] se aplican a todos los contenedores y vistas.              
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='')                            

              .col-lg-5.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3
                  p(data-aos="fade-right").code &#60;LinearLayout 
                  p(data-aos="fade-right") #[b.code1 xmlns:android]#[b.code =]#[b.code2 "http://schemas.android.com/apk/res/android"]
                  p(data-aos="fade-right").ps-3 #[b.code1 xmlns:app]#[b.code =]#[b.code2 "http://schemas.android.com/apk/res-auto"]
                  p(data-aos="fade-right").ps-3 #[b.code1 xmlns:tools]#[b.code =]#[b.code2 "http://schemas.android.com/tools"]
                  p(data-aos="fade-right").ps-3 #[b.code1 android:orientation]#[b.code =]#[b.code2 "vertical"]
                  p(data-aos="fade-right").ps-3 #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p(data-aos="fade-right").ps-3 #[b.code1 android:layout_height]#[b.code =]#[b.code2 "match_parent"]
                  p(data-aos="fade-right").ps-3 #[b.code1 tools:context]#[b.code =]#[b.code2 ".MainActivity">]

                  p(data-aos="fade-right").code.ps-3 &#60;!-- Dentro del contenedor se agregan los view en este              caso p Button -->
                  p(data-aos="fade-right").code.ps-3 &#60;Button
                  p(data-aos="fade-right").ps-5 #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p(data-aos="fade-right").ps-5 #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
                  p(data-aos="fade-right").ps-5 #[b.code1 android:layout_marginTop]#[b.code =]#[b.code2 "45dp"]
                  p(data-aos="fade-right").ps-5 #[b.code1 android:text]#[b.code =]#[b.code2 "@string/boton1" />]

                  p(data-aos="fade-right").code.ps-3 &#60;Button
                  p(data-aos="fade-right").ps-5 #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p(data-aos="fade-right").ps-5 #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
                  p(data-aos="fade-right").ps-5 #[b.code1 android:text]#[b.code =]#[b.code2 "@string/boton2" />]
        
                  p(data-aos="fade-right").code &#60;/LinearLayout>
                  p(data-aos="fade-right").code &#60;!-- Cierre del contenedor LinearLayout --> 
            .row.justify-content-center
              .col-lg-7.my-3
                .bg101.p-4.brad
                  p(data-aos="fade-down") El código XML para la creación de un layout de tipo #[i #[b LinearLayout:]] con orientación vertical, el cual contiene dos vistas de tipo Button.  
                    ul.lista-ul--color.fa-ul.mb-0.ms-0
                      li 
                        i.fas.fa-cube.color1
                        span #[b <#[i LinearLayout:]] tipo de contenedor lineal 
                      li 
                        i.fas.fa-cube.color1
                        span #[i #[b orientation=vertical:]] propiedad que define la ubicación de los views de forma vertical.
                      li 
                        i.fas.fa-cube.color1
                        span #[i #[b layout_width:]] propiedad que define el ancho del contenedor. 
                      li 
                        i.fas.fa-cube.color1
                        span #[i #[b layout_height:]] propiedad que define el alto del contenedor >
                      
                    p(data-aos="fade-down")  <#[i Button]:  etiqueta para crear un #[i view] de tipo #[i Button] (Botón).

                    p(data-aos="fade-down") #[b #[i layout_width:]] propiedad que define el ancho del view.
                    p(data-aos="fade-down") #[b #[i layout_height:]] propiedad que define el alto del view
                    p(data-aos="fade-down") #[b #[i text:]] propiedad que define el título del button />

                    p(data-aos="fade-down") El código anterior mostraría el LinearLayout de la siguiente forma:

              .col-lg-5.my-3 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='') 

            .row.justify-content-start.mb-4.mt-5
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 TableLayout

            p(data-aos="fade-down") Es un contenedor ViewGroup que permite mostrar los elementos View en columnas y filas. Para crear las filas se utiliza el objeto TableRow. Cada fila puede tener una o más celdas, o ninguna, y cada celda se crea mediante un tipo de objeto View. Es decir, las celdas de una fila pueden formarse por una diversidad de objetos View, como ImageView o TextView.

            p(data-aos="fade-down") El siguiente código XML de diseño muestra dos filas con tres celdas en cada una, y una tercera fila con dos celdas:  
            .row.justify-content-center.align-items-center          
              .col-lg-7.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3 
                  p(data-aos="fade-right").code &#60;!-- Crea la tabla -->
                  p(data-aos="fade-right").code &#60;TableLayout
                  p(data-aos="fade-right").ps-3 #[b.code1 xmlns:android]#[b.code =]#[b.code2 "http://schemas.android.com/apk/res/android"]
                  p(data-aos="fade-right").ps-3 #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p(data-aos="fade-right").ps-3 #[b.code1 android:layout_height]#[b.code =]#[b.code2 "match_parent"]
                  p(data-aos="fade-right").ps-3 #[b.code1 android:stretchColumns]#[b.code =]#[b.code2 "0,1,2"]>

                  p(data-aos="fade-right").code.ps-3 &#60;!-- Crea la fila -->
                  p(data-aos="fade-right").code.ps-3 &#60;TableRow>
                  p(data-aos="fade-right").ps-5 #[b.code &#60;TextView] #[b.code1 android:text]#[b.code =]#[b.code2 "Celda 1.1"] #[b.code /> &#60;!-- Crea la Columna -->]
                  p(data-aos="fade-right").ps-5 #[b.code &#60;TextView] #[b.code1 android:text]#[b.code =]#[b.code2 "Celda 1.2"] #[b.code /> &#60;!-- Crea la Columna -->]
                  p(data-aos="fade-right").ps-5 #[b.code &#60;TextView] #[b.code1 android:text]#[b.code =]#[b.code2 "Celda 1.3"] #[b.code /> &#60;!-- Crea la Columna -->]
                  p(data-aos="fade-right").code.ps-3 &#60;/TableRow>

                  p(data-aos="fade-right").code.ps-3 &#60;!-- Crea la fila -->
                  p(data-aos="fade-right").code.ps-3 &#60;TableRow>
                  p(data-aos="fade-right").ps-5 #[b.code &#60;TextView] #[b.code1 android:text]#[b.code =]#[b.code2 "Celda 2.1"] #[b.code /> &#60;!-- Crea la Columna -->]
                  p(data-aos="fade-right").ps-5 #[b.code &#60;TextView] #[b.code1 android:text]#[b.code =]#[b.code2 "Celda 2.2"] #[b.code /> &#60;!-- Crea la Columna -->]
                  p(data-aos="fade-right").ps-5 #[b.code &#60;TextView] #[b.code1 android:text]#[b.code =]#[b.code2 "Celda 2.3"] #[b.code /> &#60;!-- Crea la Columna -->]
                  p(data-aos="fade-right").code.ps-3 &#60;/TableRow>

                  p(data-aos="fade-right").code.ps-3 &#60;!-- Crea la fila -->
                  p(data-aos="fade-right").code.ps-3 &#60;TableRow>
                  p(data-aos="fade-right").ps-5 #[b.code &#60;TextView] #[b.code1 android:text]#[b.code =]#[b.code2 "Celda doble de ancho 3.1"]
                  p(data-aos="fade-right").ps-5.ms-4 #[b.code1 android:layout_span]#[b.code =]#[b.code2 "2"] />
                  p(data-aos="fade-right").ps-5 #[b.code &#60;TextView] #[b.code1 android:text]#[b.code =]#[b.code2 "Celda 3.2"] />
                  p(data-aos="fade-right").code.ps-3 &#60;/TableRow>
                      
                  p(data-aos="fade-right").code &#60;/TableLayout>                

              .col-lg-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='') 

            .bg11.p-4.mt-5
              .row.justify-content-center.align-items-center
                .col-lg-6.my-3
                  p(data-aos="fade-down").t3.j El código anterior mostraría el TableLayout de la siguiente forma:
            
                .col-lg-6.my-3
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='') 
            

            .row.justify-content-start.mb-4.mt-5
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 ConstraintLayout    

            .bg11.p-4.mt-5
              .row.justify-content-center.align-items-center
                .col-lg-6.my-3.text-white.p-4
                  p(data-aos="fade-down") ConstraintLayout es el contenedor más utilizado actualmente y es el que se configura por defecto al crear una actividad, ya que permite diseñar los view directamente desde las herramientas visuales del editor de diseño. Con este contenedor se puede crear todo el diseño arrastrando y soltando elementos, en lugar de editar el XML manualmente.

                  p(data-aos="fade-down") Cada posición de un view en un ConstraintLayout se define agregando al menos una restricción horizontal y una vertical. Cada restricción representa una conexión o alineación con otra vista. Estas restricciones determinan la posición de la vista a lo largo del eje vertical u horizontal, por lo que cada vista debe tener al menos una restricción para cada eje. Sin embargo, normalmente se requieren más restricciones para lograr un diseño preciso.

                  p(data-aos="fade-down") Vista de Diseño ConstraintLayout: 
            
                .col-lg-6.my-3
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')                       

            Separador 
            #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
              h2 2.2 Controles básicos  

            .row.justify-content-center.align-items-center
              .col-lg-6.my-3
                p(data-aos="fade-down") En Android Studio se encuentra una amplia variedad de controles que se pueden utilizar en la interfaz de usuario, tales como botones (Button), campos de texto (EditText), vista de imágenes (ImageView), casillas de verificación (CheckBox), botones de selección (RadioButton), etiquetas de texto (TextView), listas (ListView), entre otros.
                p(data-aos="fade-down") Existen tres propiedades indispensables en la creación de los controles mencionados anteriormente:
              .col-lg-6.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='')

            .row.justify-content-center.my-4
              .col-lg-8
                .bg12.brad
                  .bg8.p-3(data-aos="flip-down")
                    p.fst-italic.t3.mb-0(data-aos="fade-down") Android: layout_width
                  .row.justify-content-center.align-items-center.p-3       
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')         
                    .col.my-3
                      ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade-down")
                        li 
                          i.fas.fa-cube.color1
                          | Esta propiedad es común a todas las vistas y permite establecer el ancho que se utilizará. Este valor puede ser fijado en relación con el contenido que se visualizará o con la vista que lo contiene. 

                  .bg8.p-3(data-aos="flip-down")
                    p.fst-italic.t3.mb-0(data-aos="fade-down") Android: layout_height
                  .row.justify-content-center.align-items-center.p-3       
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')         
                    .col.my-3
                      ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade-down")
                        li 
                          i.fas.fa-cube.color1
                          | Esta propiedad es común a todas las vistas y permite establecer el ancho que se utilizará. Este valor puede ser fijado en relación con el contenido que se visualizará o con la vista que lo contiene.

                  .bg8.p-3(data-aos="flip-down")
                    p.fst-italic.t3.mb-0(data-aos="fade-down") Android: id
                  .row.justify-content-center.align-items-center.p-3       
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down") Define el identificador asociado a la vista para ser referenciado por código Java. La forma de crear un identificador es la siguiente:
                      ul.lista-ul--color.fa-ul.mb-0.ms-0(data-aos="fade-down")
                        li 
                          i.fas.fa-cube.color1
                          span.text-bold android:id="@+id/myText“ 
                        li 
                          i.fas.fa-cube.color1
                          span El símbolo @+id/ indica que se está generando un nuevo identificador, lo que provocará que la clase R del paquete gen del proyecto cree una referencia a este objeto, para que luego pueda ser manipulado por código.

            p(data-aos="fade-down") Los valores que pueden tomar las propiedades de Android: #[i #[b layout_width]], y Android: #[i #[b layout_height]] los cuales aplican para todos los controles son:

            .bg13.p-4.mb-5
              img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/41.svg', alt='')
              img.img-a.img-t.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='')

            p(data-aos="fade-down") Estas tres propiedades básicas son las principales en los componentes que se describen a continuación. 
            .bg13.p-4
              .row.justify-content-center
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 10.
                    span Controles básicos    
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='Diferentes componentes de la interfaz de usuario en Android como botón, etiquetas de texto, selección, campo de texto y casilla de verificación.') 

            .row.justify-content-start.mb-4.mt-5
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 Botones

            p(data-aos="fade-down").mb-4 Un botón (#[i Button]) es un elemento de la interfaz en el que el usuario puede tocar o hacer clic para realizar una acción. A continuación, se presenta un ejemplo de un #[i Button] con sus propiedades básicas: 
            .row.justify-content-center.mb-5
              .col-lg-8
                .titulo-sexto.color-acento-contenido(data-aos="fade-down")
                  h5 Tabla 1.
                  span Propiedades básicas #[i Button]

                .tabla-a.color-acento-contenido(data-aos="fade-down")
                  table
                    thead.bgh
                      tr
                        th(style="width: 240px") Propiedades
                        th Definición 
                    tbody.bgb  
                      tr
                        td.text-bold android:layout_width
                        td Define el ancho de la vista.     
                      tr
                        td.text-bold android:layout_height 
                        td Define el alto de la vista.   
                      tr
                        td.text-bold android:id 
                        td Define el identificador asociado a la vista para ser referenciado por código java.     
                      tr
                        td.text-bold android:text 
                        td Define el texto asociado a la vista.  

            .row.justify-content-center.align-items-center      
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") XML Creación Button:                                                  
            .row.justify-content-center.align-items-center          
              .col-lg-4.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3 
                  p.code(data-aos="fade-right") &#60;Button
                  p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/button"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:text]#[b.code =]#[b.code2 "Boton"] #[b.code />]

            .row.justify-content-center.align-items-center      
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") Y el botón quedaría como se presenta a continuación:   

            .bg13.p-4
              .row.justify-content-center
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 11.
                    span Vista diseño Button   
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='Una pantalla que presenta el botón de color azul con el texto "BOTON".')          

    .row.justify-content-start.mb-4.mt-5
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Texto e imágenes 

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-7.my-3    
        .row.justify-content-center.align-items-center      
          .col-lg-auto.my-3                  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')         
          .col.my-3
            p(data-aos="fade-down") Uno de los controles más utilizados son los referentes a los textos e imágenes, ya que son con los que más interactúa el usuario. A continuación, se describen tres de los componentes básicos más imprescindibles para el desarrollo de nuestras aplicaciones: los textos o etiquetas (TextView), las imágenes (ImageView) y los cuadros de texto (EditText). 
        .bg14.p-3.brad(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 TextView: es un control utilizado para desplegar contenido textual generalmente estático. Tiene la propiedad de acoplarse al control que lo contenga y no captura el foco en ningún momento, por lo que generalmente no se programa ningún evento sobre él. Sus propiedades básicas son las siguientes:        
      .col-lg-5.my-3    
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='') 

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Tabla 2.
          span Propiedades básicas TextView

        .tabla-a.color-acento-contenido(data-aos="fade-down")
          table
            thead.bgh
              tr
                th(style="width: 240px") Propiedades
                th Definición 
            tbody.bgb  
              tr
                td.text-bold android:layout_width
                td Define el ancho de la vista.
              tr
                td.text-bold android:layout_height
                td Define el alto de la vista. 
              tr
                td.text-bold android:id 
                td 
                  p Establece cuál es el contenido para mostrar por el TextView.
                  p Existen dos formas de asociar el texto a una vista, la primera forma y más simple es asociar el texto de forma directa:

                  p android:text=“Hola Mundo”
                  p La segunda forma es por medio de archivo string XML ubicado dentro de la carpeta values de los recursos del proyecto y asociar cada uno de los textos con una llave respectiva.

                  p Ya luego se referencia el contenido por medio de este archivo XML de la siguiente forma: android:text="@string/boton2"
 
                  p.mb-0 El color de tinte de la imagen. 
              tr
                td.text-bold android: textColor 
                td Esta propiedad nos permite definir cuál va a ser el color del texto. 
              tr
                td.text-bold android: textSize 
                td 
                  p Con esta propiedad podemos definir el tamaño de la fuente la unidad es sp. 
                  p.mb-0 Ejemplo: android:textSize="20sp" 
              tr
                td.text-bold android: textStyle 
                td
                  p Define el estilo de la fuente a usar, tiene los siguientes valores:
                  p android:textStyle="bold"
                  p android:textStyle="italic"
                  p.mb-0 android:textStyle="normal"                 
              tr
                td.text-bold android: typeface
                td Esta propiedad me permite cambiar el tipo de fuente dentro de un conjunto de 4 posibles opciones: normal, sans, serif y monospace, se pueden descargar otro tipo de fuentes.

    .row.justify-content-center.align-items-center      
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") Ejemplo de TextView con sus propiedades básicas:                                                 
    .row.justify-content-center.align-items-center          
      .col-lg-5.my-3
        .bg8.p-3
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
        .bg9.p-3 
          p.code(data-aos="fade-right") &#60;TextView
          p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =] #[b.code2 "@+id/txtTexto"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:text]#[b.code =] #[b.code2 "@string/control_de_texto"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =] #[b.code2 "wrap_content"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =] #[b.code2 "wrap_content"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:textStyle]#[b.code =] #[b.code2 "bold"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:textColor]#[b.code =] #[b.code2 "@color/purple_500"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:typeface]#[b.code =] #[b.code2 "monospace"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:textSize]#[b.code =] #[b.code2 "40sp"] #[b.code />]

    .row.justify-content-center.align-items-center      
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") El TextView quedaría como se presenta a continuación: 


    .row.justify-content-center
      .col-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 12.
          span Vista diseño TextView
    .row.bg3.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12            
            img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='Un control de texto con el texto "Control de Texto" en color morado.')    

            .row.justify-content-center.align-items-center.mb-5      
              .col-lg-7.my-3    
                p(data-aos="fade-down") #[b ImageView:] es un control de imágenes que permite acceder a los recursos de imágenes (drawable o mipmap) y publicar en la aplicación. Su propiedad principal es #[b android:src], que permite indicar la imagen a exponer del proyecto. Lo primero que se debe hacer es copiar la imagen que se quiere presentar en la carpeta #[b drawable] del proyecto (#[b /res/drawable]) y, después, en el XML se debe indicar la ruta de origen así: #[b android:src="@drawable/imagen"]. 
                .bg14.p-3.brad(data-aos="flip-down") 
                  p(data-aos="fade-down").mb-0 Aparte de las propiedades de #[i width] y #[i height] que se encuentran en todos los view, están las siguientes propiedades básicas para el ImageView:      
              .col-lg-5.my-3    
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='')                    
                
            .row.justify-content-center.mb-5
              .col-lg-8
                .titulo-sexto.color-acento-contenido(data-aos="fade-down")
                  h5 Tabla 3.
                  span Propiedades básicas ImageView

                .tabla-a.color-acento-contenido(data-aos="fade-down")
                  table
                    thead.bgh
                      tr
                        th(style="width: 240px") Propiedades
                        th Definición 
                    tbody.bgb  
                      tr
                        td.text-bold android:src
                        td Establece la imagen del ImageView 
                      tr
                        td.text-bold android:scaleType
                        td Controla cómo se debe cambiar el tamaño o mover la imagen para que coincida con el tamaño de este ImageView 
                      tr
                        td.text-bold android:tint
                        td El color de tinte de la imagen. 

            .row.justify-content-center.align-items-center      
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") Ejemplo de ImageView con sus propiedades básicas:                                                
            .row.justify-content-center.align-items-center          
              .col-lg-5.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3 
                  p.code(data-aos="fade-right") &#60;ImageView
                  p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/txtTexto"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "wrap_content"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:src]#[b.code =]#[b.code2 "@drawable/andy"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:scaleType]#[b.code =]#[b.code2 "centerInside"] #[b.code />]

            .row.justify-content-center.align-items-center      
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") El ImageView quedaría como se presenta a continuación: 

            .row.justify-content-center.mb-5
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 13.
                  span Vista diseño ImageView  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='Una aplicación de Android que presenta el logo de Android en la pantalla con el encabezado "Layouts".')   

            .row.justify-content-center.align-items-center.mb-5      
              .col-lg-7.my-3    
                p(data-aos="fade-down") #[b EditText:] es un elemento de la interfaz que permite al usuario ingresar y editar texto. Una de sus propiedades más funcionales es #[b inputType], que define el tipo de entrada que tendrá el cuadro de texto. El valor se aplica dependiendo de lo que se quiera ingresar: por ejemplo, un correo electrónico (#[b #[i textEmailAddress]]), edad (#[b #[i number]]), apellido (#[b #[i text]]), entre otros. La elección del tipo de entrada configura el tipo de teclado que se expondrá. 
  
              .col-lg-5.my-3    
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.png', alt='')   

            .row.justify-content-center.mb-5
              .col-lg-10
                .titulo-sexto.color-acento-contenido(data-aos="fade-down")
                  h5 Tabla 4.
                  span Propiedades básicas de EditText

                .tabla-a.color-acento-contenido(data-aos="fade-down")
                  table
                    thead.bgh
                      tr
                        th(style="width: 240px") Propiedades
                        th Definición 
                    tbody.bgb  
                      tr
                        td.text-bold android:inputType 
                        td Establece el tipo de dato que se ingresará en el campo de texto. Para esta propiedad existen valores como: #[b #[i text, number, textUri, textPassword, phone, date]], entre otros.
                      tr
                        td.text-bold android:hint 
                        td Permite desplegar un texto sobre el control a manera de ayuda mientras el usuario aún no ingresa información. Se prefiere sobre la propiedad #[b #[i text.]] 
                      tr
                        td.text-bold android:text
                        td Al igual que en TextView, se puede definir cuál es el texto que se mostrará en el control  

            .row.justify-content-center.align-items-center      
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") Ejemplo de EditText con sus propiedades básicas:                                               
            .row.justify-content-center.align-items-center          
              .col-lg-5.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3 
                  p.code(data-aos="fade-right") &#60;EditText
                  p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/txtTexto"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:hint]#[b.code =]#[b.code2 "Escriba su Nombre"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:inputType]#[b.code =]#[b.code2 "text"] #[b.code />]

            .row.justify-content-center.align-items-center      
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") El EditText quedaría como se presenta a continuación: 

            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 14.
                  span Vista diseño EditText  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='Un campo de texto con el título "EditText" y el texto "Escriba su Nombre".')   

    .row.justify-content-start.mb-4.mt-5
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0.fst-italic  Checkbox y Radiobutton 

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-7.my-3    
        p(data-aos="fade-down") Otro de los controles muy utilizados en las aplicaciones son los que permiten hacer una selección o un chequeo de alguna opción. Android cuenta con dos tipos: #[i checkboxes] y #[i radiobuttons].
        p(data-aos="fade-down") #[i #[b CheckBox:]] Las casillas de verificación permiten que el usuario seleccione una o más opciones de un grupo. Aparte de las propiedades de #[i width] y #[i height] que se encuentran en todas las vistas (#[i view]), las siguientes son básicas para el #[i Checkbox]:     
      .col-lg-5.my-3    
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.png', alt='') 

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Tabla 5.
          span Propiedades básicas #[i Checkbox]

        .tabla-a.color-acento-contenido(data-aos="fade-down")
          table
            thead.bgh
              tr
                th(style="width: 240px") Propiedades
                th Definición 
            tbody.bgb  
              tr
                td.text-bold android:checked
                td Establece el estado actual del #[i Checkbox]. 
              tr
                td.text-bold android:text
                td Define el texto del #[i Checkbox].
              tr
                td.text-bold android:id 
                td Define el identificador único asociado a la vista para ser referenciado por código Java. 

    .row.justify-content-center.align-items-center      
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") Para definir un control de este tipo, se utiliza el siguiente código, que define dos #[i checkboxes] con los textos "español" e "inglés":                                             
    .row.justify-content-center.align-items-center          
      .col-lg-5.my-3
        .bg8.p-3
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
        .bg9.p-3 
          p.code(data-aos="fade-right") &#60;CheckBox
          p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/txtTexto"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:text]#[b.code =]#[b.code2 "@string/espa_ol"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:checked]#[b.code =]#[b.code2 "true"] #[b.code />]

          p.mt-4.code(data-aos="fade-right") &#60;CheckBox
          p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/txtTexto2"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:text]#[b.code =]#[b.code2 "@string/ingles"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:checked]#[b.code =]#[b.code2 "false"] #[b.code />]


    .row.justify-content-center.align-items-center      
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") Los #[i checkbox] quedarían como se presenta a continuación: 

    .row.justify-content-center
      .col-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 15.
          span Vista diseño #[i Checkbox]  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='Dos casillas de verificación con el título "CheckBox", donde una está seleccionada con el texto Español y la otra no está seleccionada con el texto ingles.')   

    .row.justify-content-center.align-items-center.mt-5        
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") #[i #[b RadioButton:]] a diferencia del #[i CheckBox], el control RadioButton permite realizar una selección única entre una lista de opciones. En Android, un grupo de botones RadioButton se define mediante un elemento RadioGroup, el cual contiene todos los elementos RadioButton necesarios.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-down")
          h5 Tabla 5.
          span Propiedades básicas de RadioButton

        .tabla-a.color-acento-contenido(data-aos="fade-down")
          table
            thead.bgh
              tr
                th(style="width: 240px") Propiedades
                th Definición 
            tbody.bgb  
              tr
                td.text-bold android:checked
                td Establece el estado actual de selección por defecto del RadioButton. 
              tr
                td.text-bold android:text
                td Define el texto que se mostrará en el RadioButton.
              tr
                td.text-bold android:id 
                td Define el identificador único asociado a la vista para ser referenciado por código Java, al igual que en los otros controles.

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-7.my-3    
        .row.justify-content-center.align-items-center      
          .col-lg-auto.my-3                  
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.png', alt='')         
          .col.my-3
            p(data-aos="fade-down") Para definir un control de este tipo, se utiliza como componente padre un RadioGroup y como hijos dos RadioButton. El RadioGroup es el que permite que solo sea seleccionable una sola opción; si se crean RadioButton sin un RadioGroup, todas las opciones serán seleccionables, lo que no es el propósito de este componente.
        .bg7.p-3.brad.mb-3(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 En las propiedades del RadioGroup se puede definir la orientación de los RadioButton, que puede ser vertical u horizontal. 
        .bg1.text-white.p-3.brad(data-aos="flip-down") 
          p(data-aos="fade-down").mb-0 El siguiente código presenta la creación de dos RadioButton con los textos de "femenino" y "masculino", los cuales están dentro de un RadioGroup con la propiedad de orientación vertical.              
      .col-lg-5.my-3    
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.png', alt='')  

    .row.bg15.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center.align-items-center          
              .col-lg-5.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3 
                  p.code(data-aos="fade-right") &#60;RadioGroup
                  p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/rg1"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_heigh]#[b.code t]#[b.code2 ="wrap_content"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:orientation]#[b.code =]#[b.code2 "vertical"]>

                  p.ps-3.code(data-aos="fade-right") &#60;RadioButton
                  p.ps-5(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/rb1"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:layout_heigh]#[b.code t]#[b.code2 ="wrap_content"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:text]#[b.code =]#[b.code2 "@string/femenino"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:checked]#[b.code =]#[b.code2 "true"] #[b.code />]

                  p.ps-3.code(data-aos="fade-right") &#60;RadioButton
                  p.ps-5(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/rb2"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "match_parent"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:text]#[b.code =]#[b.code2 "@string/masculino"]
                  p.ps-5(data-aos="fade-right") #[b.code1 android:checked]#[b.code =]#[b.code2 "false"] #[b.code />]
                  p.code(data-aos="fade-right") &#60;/RadioGroup>

            .row.justify-content-center.align-items-center      
              .col-lg-auto.my-3                  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')         
              .col.my-3
                p(data-aos="fade-down") Los RadioButton quedarían como se presenta a continuación:  

            .row.justify-content-center
              .col-auto
                .titulo-sexto.color-acento-contenido
                  h5 Figura 16.
                  span Vista diseño RadioButton  
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='Dos opciones de radio con el título "RadioButton", donde una está seleccionada con el texto Femenino y la otra no está seleccionada con el texto Masculino.')  

    .row.justify-content-start.mb-4.mt-5
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Controles de selección 
    .row.bg15.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center.mb-5      
              .col-lg-7.my-3    
                p(data-aos="fade-down") Los diferentes controles que Android ofrece para seleccionar opciones dentro de una lista de posibilidades se llaman Spinner (para listas desplegables) y ListView (para listas fijas).
                .bg16.p-3.brad(data-aos="flip-down")
                  p(data-aos="fade-down").text-bold Spinner
                  p(data-aos="fade-down") Este permite seleccionar un valor de un conjunto. Al hacer clic sobre él, se presenta  una especie de lista emergente con todas las opciones disponibles. Su propiedad más importante es #[b android:entries="@array/lista"], que permite fijar el contenido de datos que se quiere mostrar en la lista.

                  p(data-aos="fade-down") Para añadir una lista de este tipo, se deben seguir los pasos que se mencionan a continuación:
              .col-lg-5.my-3    
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='') 

            ol.lista-ol--cuadro.fa-ul
              li 
                .lista-ol--cuadro__vineta
                  span A
                span En los recursos /res/values/strings.xml, se debe crear un arreglo de #[i strings] (#[i string-array]) con los valores que se quieren presentar en el spinner.    

            .row.justify-content-center.align-items-center          
              .col-lg-6.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3 
                  p.code(data-aos="fade-right") &#60;resources>
                  p.code(data-aos="fade-right") &#60;string #[b.code1 name]#[b.code =]#[b.code2 "app_name"]#[b.code >]RadioButton&#60;/string>
                  p.ps-3.code(data-aos="fade-right") &#60;string-array #[b.code1 name]#[b.code =]#[b.code2 "ciudades"]#[b.code >]
                  p.ps-5.code(data-aos="fade-right") &#60;!-- Se crea el Arreglo, en este caso se coloca el nombre de ciudades -->
                  p.ps-5.code(data-aos="fade-right") &#60;item>Popayán&#60;/item> <!-- Se crean los elementos del arreglo -->
                  p.ps-5.code(data-aos="fade-right") &#60;item>Cali&#60;/item>
                  p.ps-5.code(data-aos="fade-right") &#60;item>Bogotá&#60;/item>
                  p.ps-5.code(data-aos="fade-right") &#60;item>Cartagena&#60;/item>
                  p.ps-5.code(data-aos="fade-right") &#60;item>Medellín&#60;/item>
                  p.ps-5.code(data-aos="fade-right") &#60;item>Pasto&#60;/item>
                  p.ps-3.code(data-aos="fade-right") &#60;/string-array> &#60;!-- Cierre del arreglo -->
                  p.code(data-aos="fade-right") &#60;/resources>

            ol.lista-ol--cuadro.fa-ul.mt-5
              li 
                .lista-ol--cuadro__vineta
                  span B
                span Ahora en el /res/layout se crea el siguiente código para crear el #[i Spinner] y enlazar el #[i string-array] a través de la propiedad entries como se presenta:    

            .row.justify-content-center.align-items-center.mb-5          
              .col-lg-4.my-3
                .bg8.p-3
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
                .bg9.p-3 
                  p.code(data-aos="fade-right") &#60;Spinner
                  p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/spCiudades"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "wrap_content"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
                  p.ps-3(data-aos="fade-right") #[b.code1 android:entries]#[b.code =]#[b.code2 "@array/ciudades"] #[b.code />]

            p(data-aos="fade-down") El código enseña la creación de un Spinner con sus propiedades básicas #[i height], #[i width] y id, y la propiedad #[i entries], donde se relaciona el array "ciudades" creado en los recursos.
            p(data-aos="fade-down") El #[i Spinner] se presentaría de la siguiente manera:  

    .row.justify-content-center
      .col-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 17.
          span Vista Diseño #[i Spinner] ciudades
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='Un menú desplegable con la opción seleccionada Popayán y otras opciones como Cali, Bogotá, Cartagena, Medellín y Pasto.')      

    .row.justify-content-start.mb-4.mt-5
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 ListView

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-7.my-3    
        p(data-aos="fade-down") El ListView permite mostrar al usuario una lista de opciones seleccionables directamente sobre el propio control, sin listas emergentes como en el caso del control #[i Spinner]. Si existen más opciones de las que se pueden mostrar en el control, se podrá hacer scroll sobre la lista para acceder al resto de los elementos.
        .bg1.brad.p-2
          .row.justify-content-center.align-items-center        
            .col-lg-auto.my-3                  
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')         
            .col.my-3.text-white
              p(data-aos="fade-down").mb-0 Para crear el ListView, al igual que en el Spinner, también se debe crear el arreglo de elementos que se quiere mostrar en la lista. Para este ejemplo, se utilizará el mismo arreglo de ciudades que se usó para el Spinner. 
      .col-lg-5.my-3    
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/58.png', alt='') 

    .row.justify-content-center.align-items-center      
      .col-lg-auto.my-3                  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='')         
      .col.my-3
        p(data-aos="fade-down") Cuando los elementos que se quieren mostrar en la lista o en el Spinner no son estáticos, se crea el arreglo desde el código Java.

        p(data-aos="fade-down") Cuando los elementos que se Ejemplo de creación de un ListView:

    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-4.my-3
        .bg8.p-3
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')
        .bg9.p-3 
          p.code(data-aos="fade-right") &#60;ListView
          p.ps-3(data-aos="fade-right") #[b.code1 android:layout_gravity]#[b.code =]#[b.code2 "center"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:id]#[b.code =]#[b.code2 "@+id/listaCiudades"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:layout_width]#[b.code =]#[b.code2 "wrap_content"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:layout_height]#[b.code =]#[b.code2 "wrap_content"]
          p.ps-3(data-aos="fade-right") #[b.code1 android:entries]#[b.code =]#[b.code2 "@array/ciudades"] #[b.code />]        

    p(data-aos="fade-down") El código describe la creación de un ListView, utilizando las mismas propiedades que el #[i Spinner], y la propiedad entries, donde se relaciona el array "ciudades" creado en los recursos.

    .row.justify-content-center
      .col-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 18.
          span Lista diseño ListView ciudades
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='Una lista de opciones con el título "ListView" que presenta  las opciones: Popayán, Cali, Bogotá, Cartagena, Medellín y Pasto.')  
</template>

<script>
export default {
  name: 'Tema2',
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
