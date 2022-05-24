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
<!-- Crear un subcarpetas con los tipos de datos -->

::: tip Tipos Primitivos 
```ts
Number | String | Boolean | Array | Tuple  | Enum | Any | 
Void   | Null | Undefined |  Never  | Object
```
:::

## Type number

```ts
// Explicito
let phone:number;
phone = 1;
phone = 3124567892;
// phone = 'typescript'; // Error
```
```ts
// Inferido
let phoneNumber = 3145678912;
// phoneNumber = true; // Error tipo de dato
```
:::tip hexadecimal, binary,octal

:::


```ts
let hex: number = 0xf00d; 
let binary : number = 0b100;
let octal : number = 0o744;
```

## Type: Boolean
:::tip Boolean
* Es el tipo de dato más simple en TypeScript
* Dos únicos valores: `true` y `false`
::: 


## Type: String

:::tip string
* El tipo de dato para trabajar con datos textuales o cadenas
* Así como en JavaScript, se pueden usar comillas dobles `("")` y simples `('')`
::: 

```ts
let message: string = 'Soy un string';
let message2: string;
message2 = "Tambien soy un string";
```

:::tip Template Strings
* Permiten definir múltiples líneas de texto
* Pueden contener expresiones o variables embebidas
* Se debe usar el caracter backtick/backquote(`) y para expresiones ${expr}
::: 

```ts
let username: string = 'Yamachita';
let phone : number = 124566;
let isPro: boolean = true;
let userInfo : string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Lopez'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);

```

## Type any

:::tip any
* Usado para capturar valores dinámicos
* Los valores pueden cambiar de tipo en el tiempo:
    * APIs externas
    * Librerías de terceros 
::: 

:::warning 
En la prática el tipo any debería usarse como último recurso...
:::

```ts
// Type any
let idUser : any;
idUser = 1;
idUser = '1';
```

## Type void

:::tip Type void
* `void` es lo opuesto de `any` representa la ausencia de tipo
* Comúnmente se usa como tipo de retorno en funciones. 
::: 


```ts
// Tipo explcito
function showInfo(user: any): any {
  console.log('User info', user.id, user.username, user.firstName);
//   return 'hola';  
}
showInfo({
  id:1, username: 'dan492',firstName: 'Dan'  
});

// Tipo Inferido
function showFormattedInfo(user:any){
  console.log('User Info', ` 
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
  `)  
}
showFormattedInfo({ id:1, username: 'dan492',firstName: 'Dan'});

```
## Type never

:::tip Type never
* Representa el tipo de valor que nunca ocurre
    * Funciones que lanzan excepciones
    * Funciones que nunca retornan un valor
::: 

```ts
function handleError(code: number, message: string): never {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code} `);
}
// Ejecutamos la función
try {
  handleError(404,'Not Found');
} catch (error) {
}
```

## Type null y undefined

:::tip Type null y undefined
* En TypeScript, ambos "valores" tienen sus respectivos tipos:
    * null
    * undefined
::: 

## Type null y undefined como subtipos

:::tip Type null y undefined Como subtipos
* Null y Undefined se pueden asumir como subtipos de los otros tipos de datos
* Significa que se puede asignar `null` y `undefined` a una variable de tipo `string` por ejemplo  
::: 