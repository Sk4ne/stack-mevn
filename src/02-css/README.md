# Notas sobre CSS :rocket:


::: tip NOTA
Existen 4 formas de enlazar `CSS` con `HTML` y son las siguientes 
::: 

## Enlazar HTML con CSS forma I
Utilizando un archivo externo con extensión `.css` **Esta es la forma recomenda de enlazar html con css**. 

`style.css`

```css
body {
  background-color : black;  
}
```
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- enlazamos el archivo style.css que por lo general se encuentra dentro una carpeta css -->
    <link rel="stylesheet" href='css/style.css'>
    <title>Home Page</title>
  </head>
  <body>
    <!-- html code -->
  </body>
</html>
```

## Enlazar HTML con CSS forma II
Dentro del archivo `.html` creamos un sección con la etiqueta `<style></style>` e importamos los estilos usando `@import`

 ```css
 <style>
   @import url(css/style.css)
 </style>
 ```
 
 ## Enlazar HTML con CSS forma III
 Creando una sección con las etiquetas `<style></style` dentro del archivo `html` en el cual escribimos nuestros estilos.

 ```html 
 <!DOCTYPE html>
 <html>
   <head>
     <link rel="stylesheet" href='css/style.css'>
     <title>Home Page</title>
   </head>
   <!-- Aquí creamos una sección para css -->
   <style>
     body {
       background-color: black;   
     }
   </style>
   <body>
     <!-- html code -->
   </body>
 </html>
 ```

 ## Enlazar HTML con CSS forma IV
 Utilizando estilos css en linea. Es decir utilizando la etiqueta `style` dentro de una etiqueta `html` 

  ```html 
 <!DOCTYPE html>
 <html>
   <head>
     <link rel="stylesheet" href='css/style.css'>
     <title>Home Page</title>
   </head>
   <body>
     <!-- estilo css en linea -->
     <h1 style='background-color:white'>Soy un titulo de primer nivel</h1>
   </body>
 </html>
 ```
 # Sintaxis de css
 
 [Sintax css](https://res.cloudinary.com/dqhme1rod/image/upload/v1653414229/myimages/pja4o0rzu9ryxk9vimzz.png)

 `Fuente: https://ed.team/`

 ```css
  body{
    background-color: black;    
  }
 ``` 

 # Tipos de selectores
 1. Selectores simples
    * selectores elementales
        * Selector universal `*` 
        * Selector de tipo o etiqueta  `nombre la etiqueta `
    * selectores de atributo
 2. Selectores compuestos
    * Selectores Agrupados
    * Selectores combinados
      * Selectores descendientes
      * Selector de hermano siguiente `+`
      * Selector de hermanos siguientes `~` 
      * Selector de hijo directo `>`  
    * Pseudoclases - Pseudoelementos 

## Selectores simples - Selector universal `*`

```css
/*A todas las imagénes se les va a aplicar este estilo. */
 *image {
   width: 100%;
   height: auto; 
 }
```
## Selectores simples - Selector de etiqueta
```css
  p {
   background-color: black;
 }
```
## Selectores simples - Selectores de atributos

Dos de los selectores de atributos más importante son `id` y `class` los usamos de la siguiente manera. 

```html 
<!DOCTYPE html>
 <html>
   <head>
     <link rel="stylesheet" href='css/style.css'>
     <title>Home Page</title>
   </head>
   <body>
     <!-- Dentro de una etiqueta html declaramos un selector de id y/o clases -->
     <h1 id='title'>Soy un titulo de primer nivel</h1>
     <h2 class='title-second'>Titulo de segundo nivel</h2>
   </body>
 </html>

``` 
Para aplicar estilos a los elementos con `id` usamos el simbolo `#` precedido de un nombre en este caso `title`.
 

```css
 #title{
   background-color: green; 
 }
``` 
En las clases usamos el `.` más el nombre de la clase.  

```css
 .title-second {
   background-color: green; 
 }

``` 

::: tip Nota 
Uno de los principios de css es que los estilos sean reutilizables, por lo que se recomienda el uso de `class` en vez de `id`. El uso de `id` se utiliza con más frencuencia en `JavaScript` 
::: 


## Selector simples - Selectores de atributos  

`[href]`

`[href='https://google.com']` 

`[atributo^=valor]`

`[atributo*=valor]`

`[atributo$=valor]`

`[atributo|=valor]`

```css
 /*[href]*/
[href]{
  background-color: black;
}
```
```css
/* [href='https://google.com'] */
[href='https://google.com']{
  background-color:yellow; 
}
``` 
```css
/* [atributo^=valor] */
[href^='color']{
  background-color:yellow; 
}
``` 
```css
/* [atributo*=valor] */
[href*='modo']{
  background-color:yellow; 
}
``` 
```css
/* [atributo$=valor] */
[href$='rojo']{
  background-color:yellow; 
}
```
```css 
/* [atributo|=valor] */
[lang|='en']{
  background-color:blue; 
}
``` 

## Selectores agrupados 

Si tenemos varios elementos a los que queremos aplicarles el mismo estilo podemos hacer uso de los selectores agrupados. Por ejemplo

::: tip Nota
Si tenemos tres etiquetas `h1` con las clases `.text`,`.text2`,`.text3` para aplicarles el mismo color hacemos lo siguiente.
:::

```css
.text,
.text-2,
.text-3 {
  background-color: steelblue;
}
```

## Selectores descendientes 

::: warning
Nota: Las buenas practicas recomiendan que no debemos descender más de dos nivels
:::

En este caso le vamos a aplicar un estilo al primer elemento html que tenga las clase `.title-2` y que se encuentre dentro de un div. 
```css
div .title-2 {
  background-color:teal;
} 
``` 

## Selector de hermano y hermanos siguientes `+`

::: tip Nota
Si elemento esta dentro de otro es hijo y si estan al mismo nivel son hermanos.
:::

``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<!-- Hermano siguiente -->
<h1 class='text-2'>h1</h1>
<h1 class='title-2'>h2</h1>
</body>
</html>
``` 

Para seleccionar el hermano siguiente lo hacemos de la siguiente manera: 

```css
.text-2 + .title-2{
  background-color:tomato;
}
```

## Selector de hermanos siguientes `~`

Si tenemos un elemento con la clase `.text-2` y queremos aplicarle un estilo a todos los hermanos siguientes que sean `p` podemos hacer lo siguiente

```css
.text-2 ~ p {
  background-color: yellow; 
}
```
## Selector hijo directo `>`  

```css 
  .container > p {
    background-color: tomato;
  }
```

# Como funciona CSS?

## Especificidad

La `Especificidad` establece cómo de especifico es un selector para saber qué estilo aplicar. El cálculo se realiza con la siguiente `fórmula:` 

::: tip Fórmula
Etiquetas y pseudoelementos  `001` <br> 
Clases, atributos y pseudoclases `010` <br>
Ids `100` <br>
Estilos en línea `1000` <br>
!important GANA A TODO Y NO SE USA NUNCA 
::: 

::: tip Nota
La `Cascada` dice que todos los estilos que vienen despúes sobrescriben a los que estan antes. La `Especificidad` rompe la cascada.
::: 

## Herencia en CSS
La herencia es la capacidad que tienen algunos elementos de heredar algunas propiedades de sus elementos contenedores (Padres, abuelos, etc)

::: tip Nota:
Los enlaces no heredan de sus padres. Para forzar la herencia usamos el valor `inherit`
::: 

Por ejemplo: Si tenemos un link dentro un párrafo y queremos que herede el color de este, usamos el valor `inherit` 

```css
.link {
  color: inherit;
}
```

Para evitar que un elemento herede propiedades, añadimos el valor initial a una propiedad ejemplo `color:initial`  

## Box Model
::: tip Propiedades del box model 
`Contenido` <br>
`Borde` <br>
`Padding`: Distancia entre el border de la caja y el contenido <br>
`Margin`: Nos sirve para separar un caja de otra <br>
`Width`: Ancho <br>
`Height`: Alto <br>
::: 

![Box model](https://res.cloudinary.com/dqhme1rod/image/upload/v1653326979/myimages/ktfbfs2isdazqpoyviin.png)
fuente: `[CSS Box Model](https://www.w3schools.com/Css/css_boxmodel.asp)`

Los `elementos en linea` no tienen medida. El tamaño lo determina su contenido.


## Margin
Es la propiedad que nos permite generar espacio entre elementos. Es un `shorthand` que controla los 4 lados posibles a los que dar márgenes

::: tip Margin
`margin-top`: Margen superior <br>
`margin-right`: Margen derecho <br>
`margin-bottom`: Margin inferior <br>
`margin-left`: Margen izquierdo
::: 

Admite hasta 4 valores que van el orden de las agujas del reloj

::: tip 
`4 valores`  margin:top right bottom left; <br>
`3 valores`  margin: top left/right bottom; <br>
`2 valores`  margin: top/bottom left/right <br>
`1 valor`  margin:top/right/bottom/left
::: 

**Ejemplo** 

```css
/* Valores separados */
.container-2{
 margin-top: 50px;
 margin-left:24px;
 margin-bottom:14px; 
 margin-left: 40px; 
}
```
```css
  /* shorthand */
.container{
 /* Asigna un valor independiente a cada lado: top,right,bottom y left */
 margin: 5px 14px 30px 4px;
 /* Aplica 4px de margin-top, 3px a la derecha e izquierda y 90px abajo  */
 margin: 4px 3px 90px;
 /* Aplica 53px de margin arriba y abajo y 34 a la derecha e izquierda */
 margin: 53px 34px; 
 /* Aplica 40px de margin: top,left,bottom,right */
 margin: 40px; 
}
```
::: tip Nota
Los elementos de línea solo tienen margenes horizontales <br>
Los elementos de bloque tienen disponibles los 4 margenes <br>
Usando Margenes atomáticos podemos centrar elementos.
::: 

```css
.container{
  width: 200px;
  height:200px;
  background-color: darkgreen;
  /* centrar */
  margin-left:auto;
  margin-right:auto;
}
```

## Padding
La propiedad padding nos permite generar espacio entre el borde interno y la caja.

Es un shorthand que controla los 4 lados posibles a los que dar padding.

:::tip padding 
`padding-top`: padding superior <br>
`padding-right`: padding derecho <br>
`padding-bottom`: padding inferior <br>
`padding-left`: padding izquierdo 
::: 

Admite hasta 4 valores que van en el orden de las agujas del reloj

:::tip  
`4 valores`  padding: top right bottom left; <br>
`3 valores`  padding: top right/left bottom; <br>
`2 valores`  padding: top/bottom right/left; <br>
`1 valor`  padding:top/right/bottom/left
::: 

ejemplo

```css
.container { 
  /* top, right,bottom,left */
  padding: 45px 24px 13px 56px;
  /* top,right/left, bottom */
  padding: 90px 12px 45px;
  /* top/bottom, right/left */
  padding: 24px 45px;
  /* top/right/bottom/left */
  padding: 20px;
}
```

:::tip  Nota
Si nuestro objetivo es separar la caja de los elementos que la rodean debemos usar `margin`. <br>
Si queremos aumentar el tamaño de la caja y separar los bordes del contenido debemos usar `padding`
::: 

## Border
Es la propiedad que nos permite modificar el borde de la caja. Es un shorthand que agrupa 3 propiedades 

:::tip  
* `border-width`: Ancho del borde <br>
  * border-top-width
  * border-right-width
  * border-bottom-width
  * border-left-width <br>
* `border-style`: Estilo del borde <br>
  * border-top-style
  * border-right-style
  * border-bottom-style
  * border-left-style <br>
Valores para `border-style`
    * dotted
    * dashed
    * solid
    * double
    * groove
    * ridge
    * inset
    * outset
    * none
    * hidden <br>
* `border-color`: color del borde <br> 
:::

Ejemplo

```css
.container{
  /* Todas sus propiedades */
  border-width: 5px;
  border-style: solid;
  border-color:red;

  /* shorthand */
  border: 4px solid red;
}
```

## box-sizing
Es la propiedad que nos permite controlar el cálculo que hace el navegador a la hora de modificar las propiedades content, padding y border

Los dos valores que le podemos dar son: 
:::tip 
`context-box` Valor por defecto  <br>
`border-box` Cálculo de tamaño del elemento incluyendo el padding y el border  <br>
:::

`Nota: ` Es buena práctica agregar 
```css
*{
  border-sizing:border-box;
}
```
Para que respete las medidas que le damos a las cajas

## border-radius
Es la propiedad que nos permite redondear vertices de forma independiente. Es un shorthand que engloba 4 propiedades <br>
:::tip border-radius
* `border-top-left-radius` Radio del borde superior izquierdo
*  `border-top-right-radius` Radio del borde superior derecho
* `border-bottom-right-radius` Radio del borde inferior derecho
* `border-bottom-left-radius` Radio del borde inferior izquierdo
:::

Si sólo recibe un valor dibujará un circulo en cada vértice del radio que especifiquemos

```css
  .container {
    width: 300px;
    height: 300px;
    border-top-left-radius: 50px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 150px;
    border-bottom-left-radius: 200px;
    /* shorthand */
    /* Los estilos se empiezan a aplicar desde border-top-left-radiuos */
    border-radius: 50px 100px 150px 200px;
 } 
```

## overflow

Decimos que un contenido se desborda cuando la caja es más pequeña que el contenedor. `overflow` es la propiedad que controla qué debe hacer la caja cuando su contenido se desborda del contenedor.

Tiene cuatro posibles valores:
:::tip 
`visible` Es el valor por defecto <br>
`hidden` El contenido que se desborde no se verá. Si aplícamos esta propiedad en un solo eje, el otro se pondrá automaticamente en el valor scroll<br>
`scroll` Aparecerán barras de scroll en el eje asignado (x, y o ambos)<br>
`auto` Aparecerán barras de scroll en el caso de que hicieran falta
::: 

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<div class="container">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptates quam temporibus amet voluptatem velit soluta reprehenderit, nisi ad. Harum nesciunt, consectetur ullam laborum incidunt blanditiis expedita autem repellat excepturi.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dolor, ab ad dolorum  ut voluptatum dicta commodi accusantium.
  </div>
</body>
</html>
```
```css
/*Al asignarle a overflow el valor hidden, el contenido que se deborda se ocultara*/
.container{
  width: 300px;
  height:300px;
  background-color:yellow; 
  overflow: hidden;
}
```

## colapsado de márgenes
Para solucionar el colapsado de margenes entre padres a hijos podemos usar algunas de estas tres propiedades dentro del padre.

```html
<header class='header'>
  <h1 class='text'>Soy un h1</h1>
</header>
```
```css
.header{
  overflow: hidden;
  /* padding-top:0.1px; */
  /* border-top:0.1px solid lightcoral; */
}
```

## display

La propiedad display nos sirve para cambiar el contexto de los elementos dentro del navegador. Admite varios valores <br>

:::tip  
* `none`  Hace que el elemento no se muestre, pero sigue cargandose
* `block`  Hace que el elemento sea de bloque
* `inline`  Hace que el elemento sea de línea
* `inline-block`  Hace que el elemento sea de linea pero admite medidas y margenes verticales
:::

## outline

Outline es la propiedad que nos permite dibujar un borde por fuera del modelo de caja.
Es un shorthand que engloba:
::: tip 
`outline-width`: Controla el ancho del outline <br>
`outline-style`: Controla el estilo del outline <br>
`outline-color`: Controla el color del outline
::: 

Tiene las mismas propiedades y sintaxis que border, pero con algunas diferencias
* No ocupa sitio, ya que no forma parte del box-model
* No se puede redondear
* No se pueden controlar los lados de forma independiente

También cuenta con la propiedad `outline-offset`, que nos permite aumentar o disminuir la distancia del outline respecto a la caja a la que pertence

:::warning Nota 
El outline siempre se dibuja por fuera de la caja.
::: 
```html
 <div class='container'></div>
```
```css
.container{
  height:200px;
  width: 200px;
  background-color: lightgray;
  margin-left: auto;
  margin-right:auto;
  margin-top: 42px;
  /* shorthand */
  outline: 12px solid red;
  outline-offset: 12px;
  /* Definición de cada una de las declaraciones por separado */
  outline-width: 4px;
  outline-style: solid;
  outline-color: darkgreen;
}
```

## text-align

text-align es la propiedad que nos permite alinear horizontalmente el contenido de un elemento del bloque simpre que el contenido `no tenga ancho declarado`

Acepta 4 posibles valores

:::tip 
* `text-align: left ` Alínea el contenido a la izquierda
* `text-align: right` Alínea el contenido a la derecha
* `text-align: center` Alínea el contenido al centro
* `text-align: justify` Alínea el contenido de forma justificada. No es recomendable usarlo
::: 

:::warning
* text-align centra el contenido de los elementos de bloque. Para centrar un elemento de línea como un en `a` tenemos que usar la propiedad `display:block`
* Las imagenes por defecto son `display:inline-block`
:::

Ejemplo

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Text Align</title>
</head>
<body>
<a href="#" class='enlace'>Soy un enlace</a>
</body>
</html>
```

```css
.enlace {
  display:block;
  text-align:center;
}
```
:::tip Centrar un imágen

Para centrar un imágen debemos definirle las siguientes propiedades 
:::

```css
.image{
  display:block;
  margin-left:auto;
  margin-right:auto;
}
```

## box-shadow

La propiedad box-shadow se creó para añadir efectos de sombra a nuestra caja. En esencia lo que hace es crear un clon de la caja respetando la forma de su box-model (ancho, alto,redondez)

La sintaxis de box-shadow se puede escribir de distintas formas según lo que queremos conseguir.
Los valores que le podemos poner son:

:::tip box-shadow
* `offset-x` Desplazamiento en x (obligatorio)
* `offset-y` Desplazamiento en y (obligatorio)
* `blur-radious` Desenfoque de la sombra
* `spread-radius` Expansión de la sombra
* `color` El color de la sombra, si no le especificamos lo heredará del elemento al que pertenece
* `inset` Determina si la sombre será interior o exterior
:::

```html
<div class='container'>I'M CONTAINER</div>
```

```css
.container{
  width: 300px;
  color: white;
  background-color: darkcyan;
  margin-left:auto;
  margin-right:auto;
  box-shadow: 4px solid red;
  text-align:center;
  margin-top: 45px;
  padding: 40px;
  box-shadow: 5px 5px 12px darkcyan;
}
```