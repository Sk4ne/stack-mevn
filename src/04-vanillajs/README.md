# Snippets Vanilla Js


## Map Javascript
:::tip Map 
  El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
::: 

Sintax
```js
array.map(function(elementoActual, indice, arr){code...})
```

```js
const products = [
    { id: "1", name: "shirt", category: "clothing" },
    { id: "2", name: "Sports Tennis", category: "accessories" },
    { id: "3", name: "Casual shoes", category: "footwear" },
    { id: "4", name: "skirt", category: "clothing" },
    { id: "5", name: "tie", category: "clothing" }
]

let nameOfProducts = products.map((product,index,array)=>{
    // Cómo solo queremos los nombres, retornamos "name".
    return product.name;
})
console.log(nameOfProducts);
```
