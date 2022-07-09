# Actualizar documentos

## $set

El operador $set reemplaza los valores de un campo de un documento por el valor
especifico que se le pasa.

**Syntax**

```js
{ $set: { <field1>: <value1>, ... } }
```

```js
db.persona.updateOne({_id: ‘5d5015069d894b19b91c71f1’},{$set:{’name.first’:’NEIDER’}});
```

:::tip Nota
Si al operador `$set` no le pasamos un `_id`, sino unicamente el campo solo actualiza el primer documento.
:::

```js
db.persona.update({},{$set:{'name.first':'Bill'}})
```

## Actualizando con la opción multi

utilizando la opción `multi` podemos actualizar todos los documentos de la base de datos.

```js
db.persona.updateMany({},{$set:{salary:2000000}},{multi:true});
```

## Insertar un nuevo campo en un objeto

```js
db.persona.updateOne({_id:'5d5015069d894b19b91c71f1'},{$set:{'name.profession':'BackEnd Developer'}})
```

## $updateOne

```js
db.persona.updateOne({eyeColor:'green'},{$set:{salary:14000}});
```

## $updateMany

**Example**

Actualizar el salario de todas las personas cuyo color de ojos sea `blue`.

```js
db.persona.updateMany({eyeColor:'blue'},{$set:{salary:1500000}})
```

## $unset

Borra un campo particular del documento que se le indica.

**Syntax**

```js
{ $unset: { <field1>: "", ... } }
``` 

```js
db.persona.update({_id:"5d5015069d894b19b91c71f1"},{$unset:{salary:20.000}});
db.persona.update({_id:"5d5015069d894b19b91c71f1"},{$unset:{salary:''}});
db.persona.update({_id:"5d5015069d894b19b91c71f1"},{$unset:{latitude:1}});
```

## replaceOne

Reemplaza un documento por uno nuevo

```js
db.collection.replaceOne(filter, replacement, options)
```

**Example**

```js
db.persona.replaceOne({_id:'5d5015069d894b19b91c71f1'},{_id:'5d5015069d894b19b91c71f1','name.first':'Laura','name.last':'Torrez',salary:11111});
``` 

## Utilizando $set y $unset a la vez

```js
db.persona.updateOne({_id:'5d50150630f4f534c05f9e45'},{$set:{eyeColor:'RED'},$unset:{balance:1}});
``` 

## $rename 

`$rename` nos encuentra todos los documentos que hayamos establecido en la query y los renombra por el nuevo nombre que le demos.

**Syntax**

```js
{$rename: { <field1>: <newName1>, <field2>: <newName2>, ... } }
``` 
**Example**

```js
db.persona.updateMany({},{$rename:{age:'edad'}});
``` 

## Añadiendo fechas con $set 

```js
db.persona.updateOne({_id:'5d50150630f4f534c05f9e45'},{$set:{createAt: new Date(),updateAt: new Date()}});
```

## $currentDate 

**Syntax**

``` 
{ $currentDate: { <field1>: <typeSpecification1>, ... } }
```

```js
db.persona.updateOne({_id:'5d5015069d894b19b91c71f1'},{$currentDate:{updateAt:true}});
```

## Actualizando campo y fecha 

```js
db.persona.updateOne({_id:'5d50150630f4f534c05f9e45'},{$set:{salary:5000},$currentDate:{updateAt:true}});
``` 

## $push 

Con `$push` insertamos un nuevo dato en un array o creamos un nuevo array con un dato.

**Syntax**

```js
{ $push: { <field1>: <value1>, ... } }
```


:::tip Nota
El operador `$push` inserta un elemento en un array existente, si el array no existe lo crea. 
::: 

```js
db.persona.updateOne({_id:'5d50150630f4f534c05f9e45'},{$push:{tags:'euro'}});
``` 

```js
db.persona2.updateOne({_id:'5d50150630f4f534c05f9e45'},{$push:{coins:'$COP'}})
``` 

## $each 

Nos permite añadir varios elementos a un array a la vez.

**Syntax** 

```js
{ $push: { <field>: { $each: [ <value1>,<value2> ... ] } } }
``` 

```js
db.persona2.updateOne(
    {
      _id:'5d50150630f4f534c05f9e45'
    },
    {
      $push:{
        coins: {
          $each:['$EURO','$USD','$MX']
          }
        }
    }
  )
``` 

## $addToSet

Nos permite añadir elementos a un array pero si el elemento ya existe no lo añade.

```js
{ $addToSet: { <field1>: <value1>, ... } }
```

```js
db.persona.updateOne({_id:'5d50150630f4f534c05f9e45',{$addToSet:coin:'dolar'}}); 
``` 

## $pop

Nos permite eliminar el último o el primer elemento de un array. Si le pasamos 1 elimina el último elemento y -1 el primer elemento.

**Syntax**

```js
{ $pop: { <field>: <-1 | 1>, ... } }
```

```js
db.persona.updateOne({_id:'5d50150630f4f534c05f9e45'},{$pop:{coin:1}});
db.persona.updateOne({_id:'5d50150630f4f534c05f9e45'},{$pop:{coin:-1}});
```
## $pull

The `$pull` operator removes from an existing array all instances of a value or values that match a specified condition.

**Syntax**

```js
{ $pull: { <field1>: <value|condition>, <field2>: <value|condition>, ... } }
```
```js
db.persona.updateOne({_id:'5d5015069d894b19b91c71f1'},{$pull:{range:{$gte:5}}})
``` 

## $pullAll 

`$pullAll` removes elements that match the listed values.

**Syntax**

```js
{ $pullAll: { <field1>: [ <value1>, <value2> ... ], ... } }
``` 
```js
db.persona.updateOne(
  {_id:'5d50150630f4f534c05f9e45'},
  {
    $pullAll:{coins:['$EURO','$MX']}
  }
);
``` 

## Operador posicional dentro de un array ($)

```js
db.persona.updateOne(
  {_id:'5d50150630f4f534c05f9e45',coins:'$USD'},
  {$set:{'coins.$':'$DOLAR'}}
);
```

## Operador posicional array de objetos ($)

```js
db.persona.updateOne(
  {_id:'5d50150630f4f534c05f9e45','friends.id':1},
  {$set:{'friends.$.name':'Laura Torrez'}}
);
```

## $elemMatch

El operador `$elemMatch` busca documentos que contengan un campo de matriz con al menos un elemento que coincida con todos los criterios de consulta especificados.

**Syntax**

```js
{ <field>: { $elemMatch: { <query1>, <query2>, ... } } }
```
```js
db.persona.updateOne(
  {
    _id:'5d50150630f4f534c05f9e45',
    'friends':{$elemMatch:{name:'Laura Torrez',email:'laur@correo.com'}}
  },
  {$set:{'friends.$.age':33}}
)
``` 

## $inc

El operador `$inc` incrementa un campo en un valor especificado y tiene la siguiente forma: 

```js
{ $inc: { <field1>: <amount1>, <field2>: <amount2>, ... } }
``` 

```js
db.persona.updateOne(
  {
    _id:'5d50150630f4f534c05f9e45',
    'friends':{$elemMatch:{name:'Laura Torrez',email:'laur@correo.com'}}
  },
  {$inc:{'friends.$.age':2}}
)