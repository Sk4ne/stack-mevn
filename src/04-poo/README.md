# POO

La programación orientada a objetos (POO) es un paradigma de programación que se basa en el concepto de objetos, que son entidades que tienen un estado (datos) y un comportamiento (métodos). En la POO, los programas se diseñan y construyen a partir de objetos interconectados que se comunican entre sí para realizar tareas.

## Class
Una clase es una representacion de un objeto que existe en la vida real

:::tip NOTA 
Una clase puede contener:
* Atributos con modificadores de accesso
* Constructor
* Metodos
* Metodos estaticos
:::


## Modificador de accesso
Es aquella clausula de codigo que nos indica si podemos acceder o no a un bloque de codigo especifico desde otra parte del programa. 

:::tip Existen 3 modificadores de acesso
* Private
* Public 
* Static
:::

## Ejemplo de una clase
```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}

const persona1 = new Persona("Neider", 25);
persona1.saludar(); // Imprime "Hola, mi nombre es Neider y tengo 25 años"

```

## Constructor
Es el metodo que se va a ejecutar cuando se crea una instancia de una clase. Por lo general para poder asignarle valos a los atributos se utiliza el constructor
* Es ideal para inicializar valores
* Son funciones
* Deben tener el modificador de acceso declarado antes de la palabra reservada `function`
