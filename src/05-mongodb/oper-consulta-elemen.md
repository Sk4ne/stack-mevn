# Operadores de Consulta de Elementos

## $exits (existe)

Devuelve los documentos si cierto campo existe en el documento.

**Syntax** 

```js
{ field: { $exists: <boolean> } }
```

```js
db.persona.find({balance:{$exists:true}});
```

## $type (tipo)

`$type` selecciona los documentos en los que el valor del campo es una instancia del tipo o tipos BSON especificados.

**Syntax**

```js
{ field: { $type: [ <BSON type1> , <BSON type2>, ... ] } }
```

```js
db.persona.find({balance:{$type:"string"}});
```
