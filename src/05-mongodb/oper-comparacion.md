# Operadores de comparación

## $eq = Equal (Igual) 

Matches values that are equal to a especified value

**Syntax**

```js
{ <field>: { $eq: <value> } }
```

```js
db.persona.find({age:{$eq:35}}); or db.persona.find({age:24});
```

## $ne = no equal (No igual, distinto)

`$ne` selects the documents where the value of the
field is not equal to the specified value. This includes documents that do not contain the field.

**Syntax**

```js 
{field: {$ne: value} }
```

```js
db.persona.find({age:{$ne:24}});
```

## $gt = greater than (Mayor que)

Matches values that are greater than a specified value.

**Sintax**

```js
{field: {$gt: value} }
```

```js
db.persona.find({age:{$gt:27}});
```

## $gte = greater than equal (Mayor o igual que)

Matches values that area greater that or equal to a specified value.

**Syntax**
``` 
{field: {$gte: value} }
```

```js
db.persona.find({age:{$gte:27}});
```

## $lt = less than (Menor que)

`$lt` selects the documents where the value of the field is less
than (i.e. <) the specified value.

**Syntax** 

```
{ field: { $lt: value} }
```

```js
db.persona.find({age:{$lt:27}});
```

## $lte = less than equal (Menor o igual que)

`$lte` Matches values that are less than or
equal to a specified value

**Syntax**
```
{ field: { $lte: value} }
```
```js
db.persona.find({age:{$lte:27}});
```

## $in (Dentro)

Matches any of the values specified in an array.

**Syntax**

```js
{ field: { $in: [<value1>, <value2>, ... <valueN> ] } }
```

```js
db.persona.find({"name.first":{$in:["Geneva","Pamela"]}});
```
## $nin = no in (no dentro de)  

Matches none of the values specified in an array.

**Syntax**

```
{ field: { $nin: [ <value1>, <value2> ... <valueN> ]} }
``` 

```js
db.persona.find({"name.first":{$nin:["Geneva","Pamela"]}});
``` 

## Utilizar más de un operador

```js 
db.persona.find({age:{$gt:30,$lt:35}})
``` 
Muestra todos los documentos donde la edad sea mayor a 30, pero menor que 35.
