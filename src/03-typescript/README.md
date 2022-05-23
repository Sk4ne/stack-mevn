# TypeScript

## Qué es TypeScript ? 

TypeScript es un superconjunto tipado de JavaScript, que compila a JavaScript

:::tip
Con TypeScript puedes prevenir cerca del 15% de bugs <br>
Puedes correr TypeScript tanto en el server como en el cliente. <br>
Lenguaje de programación tipado
:::

## Por qué usar TypeScript ?
* Programación orientada a objetos
* Potencia tu código JavaScript
* Mayor productividad
* Poderoso sistema de tipos
* Compila a ES5, ES6 y más

## Instalar cualquier versión de nodejs
Existe un paquete de npm que nos permite instalar cualquier versión de nodejs disponible de manera facil y/o cambiar de version. Se llama `n`, esta disponible en el siguiente enlace [Paquete n](https://www.npmjs.com/package/n) 

## Compilador de TypeScript
`tsc`: TypeScript Compiler

## Instalar Typescript de forma global

```ts
npm install -g typescript
// Verificamos que la instalación haya sido exitosa
tsc --version
```
## Como usar el compilador tsc ?

```ts
tsc index.ts
```

Al ejecutar el anterior comando nos devolver un archivo compilado llamado `index.js`

Para ejecutar el archivo compilador usamos el siguiente comando `node index.js`

## Opción --watch

```ts
tsc --watch index.ts
```

## Archivo de configuración de TypeScript

El archivo de configuración `tsconfig.json` 
* Especifica la raíz de un proyecto TypeScript
* Permite configurar opciones para el compilador 

## Generar el archivo tsconfig.json

Para generar este archivo ejecutamos el siguiente comando

```ts
tsc --init
```

## Creando un proyecto en ts

:::tip
**1.** Lo primero que debemos hacer es crear una carpeta con el nombre de nuestro proyecto <br>
**2.** Dentro de la misma creamos una carpeta src <br>
**3.** Dentro de `src` creamos el index.ts <br>
**4.** Generamos el archivo `tscconfig.json`
**5.** Configuramos la salida de nuestros archivos, dentro de `tscconfig.json` definimos el directorio local `outDir: "./dist"` <br>
**6** Ejecutamos el archivo compilado con el siguiente comando `node dist/index.js`
:::

Al ejecutar el comando `tsc` se crea una carpeta llamada `dist` con nuestros archivos compilados en `js`

## Tipado en TypeScript

* `Explícito` 
Define una sintaxis para la creación de variables con tipo de dato. <br>
:::tip Explícito 
`nameVariable` : `TypeDate`

```ts
message : string; 
```
::: 
* `Inferido`
TypeScript tiene la habilidad de deducir el tipo en función de un valor.

:::tip Inferido
`nameVariable` = `valor`

```ts
message = 'Soy un string'; 
```
::: 

## Tipos Básicos

::: tip Tipos Primitivos 
```ts
Number | String | Boolean | Array | Tuple  | Enum | Any | 
Void   | Null | Undefined |  Never  | Object
```
:::

