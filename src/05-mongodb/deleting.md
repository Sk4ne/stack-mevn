# Delete documents, collections and dbs

## BackUp db

:::tip Nota
Para crear un `backup` de una base de datos nos ubicamos en el lugar donde queremos hacer la copia por ejemplo el `escritorio` y ejecutamos lo siguiente. 
::: 

```js
mongodump --db banco
```

## Restore db

```js
mongorestore --db banco dump/banco
```

## Remove 

**Syntax**

```js 
db.collection.remove(
   <query>,
   <justOne>
)
```

```js
db.persona.remove({_id:'5d50150630f4f534c05f9e45'})
``` 
:::warning
Para borrar el primer elemento que cumpla con la condición usamos `true`, si lo omitimos elimina todos los documentos que cumplen la condicion
::: 

```js
/* Elimina el primer documento que cumple la condicion */
db.persona.remove({eyeColor:'blue'},true)
```

```js
/* Elimina todos los documentos que cumple la condicion */
db.persona.remove({eyeColor:'blue'})
```

**Para eleminar todos los documentos usamos**

```js
db.persona.remove({});
```

## deleteOne

```js
db.persona.deleteOne({eyeColor:'blue'});
```

## deleteMany

```js
db.persona.deleteMany({eyeColor:'blue'});
```

```js
/* Eliminar todos los documentos */
db.persona.deleteMany({});
```
## drop

Para eliminar una colección con todos sus documentos usamos.

```js
db.persona.drop()
```
## Eliminar una base de datos

Para eliminar una base de datos nos movemos a ella y despues escribimos la siguiente instrucción.

```js
db.dropDatabase()
```