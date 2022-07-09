# Comandos Básicos

## Ejecutar MongoDB en linux

```
mongo
```

## Mostrar las bases de datos disponibles

```
show dbs;
```

## Usar una base de datos en particular

:::tip
El siguiente comando nos selecciona una DB, **Si no existe la crea.**
:::

```
use name-db
```

## Ver la base de datos actual

```
db
```

## Mostras las colecciones de la DB

```
show collections
```

## Crear una DB 

```
use name-db
```

## Eliminar una DB

```js
db.dropDatabase()
```

## Crear una colección 

```js
/* Forma I */
db.createCollection("profesor")
/* Forma II */
db.createCollection('curso')
```
## Eliminar una colección

```js
/* Forma I */
db.nameCollection.drop()
/* Forma II */
db.getCollection('profesor').drop()
```

## Crear documentos 

Syntax

```js
db.collection.insert(
   <document or array of documents>,
)

/* Example */
db.profesor.insert(
 {
  "nombre":'Alberto',
  "cursos":4,
  "pais":null,
  "lenguajes":["Java","kotlin","Swift"],
  "direccion":{
    "calle":"Mi calle",
    "numero":3
  }
 }
)
```

:::warning
collection.insert() esta deprecado. Debemos usar insertOne o insertMany 
::: 

[comment]: # (soy un comentario)

## Eliminar una DB

```js
/* Primero nos posicionamos en la db a eliminar */
db.dropDatabase()
```

## Insertar varios documentos - insert many

```js
/* Sintax */
db.collection.insertMany(
   [ {<document 1>} , {<document 2>}, ... ],
)
```
```js
db.profesor.insertMany(
  [
    {
      nombre: 'Curso MongoDb',
      duraccion:300,
      estudiantes:1000
    },
    {
      nombre: 'Curso Nodejs',
      duraccion:400,
      estudiantes:4000
    },
  ]
)
```

## Eliminar todos los documentos de una colección

```js
db.profesor.remove({})
```
:::tip
Para guardar numeros enteros en MongoDB usamos el método NumberInt(number) 
::: 