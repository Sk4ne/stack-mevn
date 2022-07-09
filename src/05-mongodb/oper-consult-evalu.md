# Operadores de Consulta de evaluación

## $regex (Expresión regular)

Selects documents where values match a specified regular expression.

**Syntaxes**

```js
{ <field>: { $regex: /pattern/, $options: '<options>' } }
{ <field>: { $regex: 'pattern', $options: '<options>' } }
{ <field>: { $regex: /pattern/<options> } }
``` 

**$options**

* **i :** Insensibilidad a las mayúsculas y minúsculas.
* **m :**  For patterns that include anchors (i.e. ^ for the start, $ for the end), match at the
beginning or end of each line for strings with multiline values.

**Examples**

```js
db.persona.find({registered:{$regex:/^Sun/}});
db.persona.find({email:{$regex:/ca$/}});
db.persona.find({company:{$regex:/ETE/}});
``` 

## $all

Selecciona los documentos donde el valor del array contiene todos los elementos
especificados, sin importar el orden.

```js
db.persona.find({tags:{$all:["duis","aliqua"]}});
```

## $size

Selecciona todos los documentos donde el número de elementos de un array coincide
con size.

**Syntax**

```js
db.collection.find( { field: { $size: 2 } } );
``` 
```js
db.persona.find({tags:{$size:5}})
```

## Filtrar por campos

```js
db.persona.find({},{balance:1})
db.persona.find({},{balance:1,'name.first':1})
```