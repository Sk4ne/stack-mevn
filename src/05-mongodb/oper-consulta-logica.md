# Operadores de consulta lógica 

## $and (y)

Realiza la operación lógica "Y" en una array de expresiones y selecciona los documentos que cumplen todas las condiciones del array.

**Syntax**
```js 
{ $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }
``` 
**Example**

Mostrar a todas las personas cuya edad es mayor o igual a `18` pero distinta de `33`

```js
db.persona.find(
  {
    $and:[
      {
        age:{$ne:33}
      },
      {
        age:{$gte:18}
      }
    ]
  }
)
```

**Example II**

Mostrar a todas las personas cuya color de ojos es `green` y su edad es mayor o igual a `33` 

```js  
db.persona.find({
  $and:[
    {
      eyeColor: 'green'
    },
    {
      age: {$gte:33}
    }
  ]
})
``` 
:::tip Nota
El valor para el operador `$and` es un arreglo con cada una de las condiciones que
debe cumplir.
::: 

## $or (o)

Este operador realiza la operación lógica "o" en un array de expresiones y `selecciona los
documentos que cumplen con al menos una condición.`

**Syntax** 

```js
{ $or: [ { <expression1> }, { <expression2> }, ... ,{ <expressionN> } ] }
``` 
```js
db.persona.find(
  {
    $or:[
      {
        eyeColor:'blue'
      },
      {
        eyeColor:'green'
      }
    ]
  }
)
```
## $not (no)

Inverts the effect of a query expression and returns documents that do not
match the query expression.

**Syntax**

```js
{ field: { $not: { <operator-expression> } } }
```

```js
db.persona.find({age:{$not:{$gt:27}}});
```
## $nor

Une las cláusulas de la consulta con un NOR lógico devuelve todos los
documentos que no coinciden con ambas cláusulas.

**Syntax**

```js
{$nor:[{<expression1>},{<expression2>},...{ <expressionN> } ] }
```
```js
db.persona.find({$nor:[{isActive:true},{eyeColor:'blue'}]});
```

