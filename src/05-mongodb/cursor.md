# Cursor 

* Un cursor es la forma en la que podemos acceder a un documento, leerlo, modificarlo etc.
* El cursor en mongoDb se utiliza para las operaciones de búsqueda. 
* Un cursor es un puntero al conjunto de resultados de una consulta en MongoDb

## Batch size

Documentos que se bajan del servidor cada vez que son solicitados.

### Mostrar x número de documentos

```js
DBQuery.shellBatchSize = 5;
```

## Iterar sobre los documentos

Para iterar sobre los documentos, creamos una variable con la query y luego se llama al método **cursor.next()** donde **cursor** es el nombre de la variable. Para saber si existen más elementos sobre los que iterar usamos **hasNext()**

## Contar la cantidad de documentos en una colección

```js
db.cursor.find({}).count();
```

## Limitar el número de documentos en una colección

```js
db.cursor.find ({}).limit(6);
```

## Saltar x número de elementos de una colección

```js
db.cursor.find ({}).skip(3);
```
## Ordenar los documentos de una colección

:::tip
Si pasamos un 1 se ordena de forma ascendente y pasamos -1 se ordena de forma
descendente.
::: 
```js
db.cursor.find ({}).sort({coche: -1});
```