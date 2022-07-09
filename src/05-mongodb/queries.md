# Queries 

## importar datos de un fichero json

**Forma I**:
Abrimos un terminal y ejecutamos el siguiente comando.

```terminal
mongoimport --jsonArray --db banco --collection persona --file path
```

**Explicación:**

**db:** Con el parámetro db le indicamos que queremos guardar los datos en la DB banco

**collection:** Con este parámetro le indicamos el nombre de la colección, en este caso persona

**file:** Es la ruta mediante la cual le decimos a mongoimport el lugar donde se encuentra el
fichero json.

## Importar db a mongoAtlas

```js
mongoimport --uri
mongodb+srv://admin:<PASSWORD>@cluster0.nm3wa.mongodb.net/<DATABASE> --collection
<COLLECTION> --type <FILETYPE> --file <FILENAME>
```

## Seleccionar documentos de una colección - find

**Sintax**
```js
{ <field1>: <value>, <field2>: <value> ... }
```

```js
db.persona.find({})
db.persona.find({favoriteFruit:'banana'})
/* Busquedas con más de un campo */
db.persona.find({favoriteFruit:'banana',age:31});
```

## Filtros

```js
db.persona.find({email:/^d/});
```