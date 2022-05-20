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
 ::: tip Sintaxis
 Selector<br>
 Propiedad <br>
 Valor<br>
 `Revisar esta parte` <br>
 Al conjunto de selector(declaraciones se les denomina regla)
 ::: 

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

## Especificidad: 

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

# Herencia en CSS
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

# Box Model
::: tip Propiedades del box model 
`Contenido` <br>
`Borde` <br>
`Padding`: Distancia entre el border de la caja y el contenido <br>
`Margin`: Nos sirve para separar un caja de otra <br>
`Width`: Ancho <br>
`Height`: Alto <br>
::: 

`Los elementos en linea no tienen medida. El tamaño lo determina su contenido.`