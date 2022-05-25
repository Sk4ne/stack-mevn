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

## Type: Null y Undefined. La Opción --strictNullChecks

:::tip Type null y undefined Como subtipos
* Solo permite asignar `null` y `undefined` a una variable de tipo `any` o sus tipos respectivos
* Ayuda a evitar errores comunes en programación de apps en el ámbito de JavaScript
::: 

## Type: object

:::tip Type object

* `object` es el tipo de dato que representa un valor no primitivo
* Es el tipo para variable que no sea `number`,`string`,`boolean`,`null`,`undefined`,etc
::: 


## Object vs object

:::tip 

* `Object`: instancia de la clase Object de JavaScript
* `object`: tipo para valores no primitivos. Con este tipo no se acceder a las propiedades del objecto.
::: 

**Nota**: Usando el tipo `object` de TypeScript no podemos usar la notación de puntos.

## Array

:::tip array 
* Al igual que JavaScript, TypeScript permite definir un arreglo para contener un conjunto de valores
* Usa dos notaciones: `tipo[]` y `Array<tipo>`
::: 

```ts
// Corchetes []
// Tipo Explicito
let users: string[];
users = ['Dan890','paparazzi','lensqueen'];
// users = [1,true,'test']; // Error 

// Tipo Inferido
let otherUsers = ['Dan890','paparazzi','lensqueen'];
// users = [1,true,'test']; // Error 

// Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset','Vacation Time', 'Landscape'];

// Accediendo a los valores en un Array
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);

// Propiedades en Array
console.log('users.length',users.length);

// Uso de funciones en Arrays
users.push('NuevoUser');
users.sort();
console.log('users',users);
```

## Tuple
:::tip Tuple
* Una tupla en TypeScript es un `array de elementos que están tipados.` De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.
* Las tuplas permiten expresar un arreglo con un número fijo de elementos
* Los tipos de datos son conocidos
::: 

:::warning 
Los tipos deben ser diferentes para cada una de las posiciones
:::

```ts
export {};

// [1,'user];
let user : [number,string];
user = [1,'luisxaviles'];

console.log('user',user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('username', user[0]);

// Tuplas con varios valores
// id, username, isPro

let userInfo: [number, string, boolean];
userInfo = [2,'paparazzi',true];
console.log('userinfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1,'luisxaviles']); //0
array.push([2,'paparazzi']); //1
array.push([3,'lensQueen']); //2
console.log('array', array);

// Uso de funciones Array
// lensQueen -> lensQeeen001

array[2][1] =  array[2][1].concat('001'); // lensQueen001
console.log('array',array);
```

## Enum

:::tip Enum
* Los enumerados permiten definir un conjunto de constantes con nombre, es decir, una colección de valores relacionados que pueden ser valores numéricos o de cadena.
* Tienen la ventaja de adaptarse al contexto de la aplicación.
:::

```ts
enum PhotoOrientation {
    Landscape, //0
    Portrait, //1 
    Square,  //2
    Panorama //3
}

const landscape : PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
  Landscape = 10, //0
  Portrait,  
  Square,  
  Panorama   
}
console.log('portrait',PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const country : Country = Country.Colombia;
console.log('country', country); 
``` 
<!-- End tipos básicos -->

## Unión de Tipos

:::tip
* En TypeScript se puede definir una variable con múltiples tipos de datos: Union Type
* Se usa el símbolo de pipe `('|')` entre los tipos
::: 

```ts
// La variable idUser puede almacenar un número o un string
let idUser : number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameById(id:number | string){
   // Logica de negocio, find the user
   return 'luixaviles'; 
}

getUsernameById(20);
getUsernameById('20');
``` 

:::tip Alias de tipos
* TypeScript permite crear un alias como nuevo nombre para un tipo
* El alias se puede aplicar también a un conjunto o combinación de tipos
* Se usa la palabra reservada `type`
::: 

```ts
// Alias de Tipos: TS
type IdUser = number | string;
type Username = string;
let idUser : IdUser;
idUser = 10;
idUser = '10';

function getUsernameById(id:IdUser): Username {
   return 'luixaviles'; 
}

getUsernameById(20);
getUsernameById('20');
```

:::tip Tipos Literales
* Una variable con un tipo literal puede contener únicamente una cadena del conjunto
* Se usan cadenas como "tipos", combinados con el símbolo de pipe (`'|'`) entre ellos.
:::

```ts
// 100x100, 500x500, 1000x1000 
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '2000x2000'; // Error 
let smallPicture: SquareSize = '100x100';
let mediumPicture : SquareSize = '500x500' 
```

## Aserciones de Tipo

:::tip Aserciones de Tipo
* Cuando el programador puede concer más que TypeScript sobre el valor de una variable 
* Es un mensaje al compilador: "Confía en mí, sé lo que hago" 
* Usa dos sintaxis: `<Angle Bracket>` y `Variable as tipo`
::: 

```ts
// <tipo> // Angle Bracket syntax
let username : any;
username = 'luis';

// Tenemos un cadena, TS confia en mi!
let message: string = (<string>username).length > 5 ? 
                      `Welcome ${username}` : 
                      'Username is too short';
console.log('message', message);  

let usernameWidthId : any = 'luisxaviles 1';
// Como obtener el username?
username = (<string>usernameWidthId).substring(0,10);
console.log('Username only', username);

// Sintaxis "as"
message = (username as string).length > 5 ? 
                      `Welcome ${username}` : 
                      'Username is too short';

let helloUser: any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username',username);  
``` 