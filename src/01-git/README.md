# Notas sobre GIT 

:::tip Nota 
  Todo desarrollador de software profesional debe conocer al menos un sistema de control de versiones, para llevar el control total de sus proyectos si en el temor 
  de perder información importante.
::: 

## Instalar Git
El primer paso para trabajar con Git es instalarlo, esta es su página oficial
[Git](https://git-scm.com/)

## Versión de Git
Para ver que versión de git que tenemos instalada en nuestro sistema, abrimos una terminal si estamos en linux o power shell en windows y  ejecutamos el siguiente comando.

```
git --version
```

En ocasiones necesitamos saber lo que contiene un carpeta, y aunque esto no tiene nada que ver con git, nos puede servir para ver archivos ocultos. Lo hacemos con el siguiente comando
``` 
ls -al
```
## Ayuda de Git
Para conocer los comandos más usados que nos ofrece git en varias situaciones usamos.

```
git --help
```
## Configuración de Git
Al momento de trabajar con git en un proyecto real lo primero que debemos tener en cuenta es hacer las configuraciones básicas, es decir decirle a git cual es nuestro `username` e `email` para esto abrimos un terminal
y escribimos los siguientes comandos.

```
git config --global user.name "yourUsername"
git config --global user.email "yourEmail"
```

## Ver la configuración global de git
Para ver la configuración global de git, tenemos dos opciones con una podemos `editar` la información y con el otro comando solo la podemos `listar`

```js
// config edit
git config --global -e
```
```js
// config list
git config --global --list
```

## Crear un repositorio en Git
:::tip Nota
En git los proyectos son conocidos como repositorios
:::

## Crear un repositorio local
Para crear un repositorio local nos ubicamos en la raiz de nuestro proyecto y desde la terminal ejecutamos el siguiente comando
```
git init
```
## Estado del repositorio
El siguiente comando nos permite conocer el estado del repositorio, es decir a que archivos les estamos dando seguimiento, ver los cambios que estan pendientes por guardar y nos muestra en que rama estamos trabajando, más adelante aprenderemos lo que es una rama.
```
git status
```
## Seguimiento de los archivos

Para decirle a Git que este pendiente todo los cambios (seguimiento) utilizamos el siguiente comando

```
git add .
```
## Guardar los cambios
Una vez le decimos a git que este pendiente de todos los cambios en el repositorio es hora de guardarlos en el repositorio local, es decir tomamos una captura de como se encuentra el proyecto en el momento
```
git commit -m "message"
```
::: warning Nota 
El mensaje del commit debe ser descriptivo y darnos una ídea de que fue lo que hicimos, por ejemplo si creamos el login de nuestra aplicación, el mensaje del commit podría ser el siguiente: `Terminamos el login de usuario y agregamos todas las posibles validaciones`
::: 

::: danger  
En ocasiones no guardamos, o eliminamos accidentalmente una carpeta de nuestro proyecto y el `ctrl + z` no funciona por x motivos. Afortunadamente podemos recuperar esa carpeta siempre y cuando le estemos dado seguimiento al proyecto. Para esto usamos el siguiente comando
::: 

```
git checkout --
```
## Ver los commits
```
git log
```
## Otras formas de agregar archivos al stage
Si queremos agregar al stage todos los archivos con una extensión determinada usamos.
```
git add *.png
git add *.xml
git add *.js
```
Si queremos agregar al stage todos los archivos que se encuentran dentro de un folder usamos el siguiente comando

```
git add controllers/
```
Si queremos agregar al stage todos los archivos que fueron modificados y luego sacar los que no queremos usamos los siguiente comandos

```js
// Agregamos los archivos al stage
git add -A
// Excluimos los archivos que no queremos por ejemplo, los archivos con extensión .ts
git reset *.ts
```
::: tip Nota
El `HEAD` hace referencia al último commit en la rama que estamos trabajando
::: 

Para ver el historial de cambios de forma resumida usamos
```
git log --online
```
## Alías en Git 
En ocasiones tenemos que escribír comandos que son muy largos. Para solucionar esto podemos crear un alías que no son más que una version corta de dicho comando pero que cumple con el mismo objetivo.

```
git config --global alias.s "status -s -b"
git config --global alias.lg "log --online --decorate --all --graph"
```
## Cambios en el repositorio

```
git diff
``` 
## Archivos en el stage
```
git diff --staged
```
## Excluir archivos 
Anteriormente vimos como excluir un archivo del stage, otra forma de hacerlo es la siguiente
```
git reset HEAD README.md
```
Si queremos revertir los efectos del comando anterior, es decir volver a agregar un archivo que se encontraba en el stage usamos.
```
git checkout -- README.md
```
## Agregar archivos al stage y hacer commit - shorthand

Hasta el momento ya sabemos como agregar archivos al stage y a hacer un commit, y lo hemos hecho en dos pasos
```
git add .
git commit -m "message"
```
Pero existe otra forma de hacerlo, en una sola línea, la cual funciona siempre y cuando ya hayamos realizado commits en el repositorio
```
git commit -am "message"
```
## Actualizar el mensaje del commit
En ocasiones creamos un commit pero nos equivocamos o escribimos un mensaje poco descriptivo. Para corregir el mensaje usamos el siguiente comando

```js
// Este comando nos permite modificar el mensaje del último commit
git commit --amend -m "Actualizamos el readme"
```

