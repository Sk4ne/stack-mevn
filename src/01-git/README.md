# Notas sobre GIT 

:::tip Nota 
  Todo desarrollador de software profesional debe conocer al menos un sistema de control de versiones, para llevar el control total de sus proyectos si en el temor 
  de perder información importante.
::: 

::: warning
Gran parte de estas notas las tome de un curso en línea de `Fernando Herrera`
[Curso de git y github](https://www.udemy.com/course/git-github/)
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

## Revertir los commits

Si queremos revertir los commits usamos 
```
git reset -soft HEAD^ 
```

## Viajes en el tiempo

Para volver a un punto en especifico usamos [VOLVER A REVISAR ESTE COMANDO...]

```js
// 88421ca es el id o hash del commit
git reset --soft 88421ca
```
## Quedarse en un punto en específico
Para quedarnos en un punto en especifico y destruir los démas usamos 

```
git reset --hard 88421ca
```

## Volver a un punto especifico
Para regresar a un punto especifico del tiempo usamos el siguiente comando
```
git reset --hard 88421ca
```

## Registro del respositorio

Para ver todo el registro de lo que ha sucedido en el repositorio usamos
```
git reflog
```

## Renombrar archivos en git

```
git mv login.vue loginUser.vue
```
::: tip Nota
`login.vue` es el nombre original y `loginUser.vue` es el nuevo nombre 
:::

## Eliminar archivo en git

```
git rm README.md 
```

## Ignorando archivos

::: tip Nota
Para ignorar archivo lo primero que debemos hacer es crear un archivo llamando `.gitignore` en la raiz del proyecto, en este archivo especificamos los archivos a ignorar.
:::

``` js
// .gitignore
node_modules/
data.log
*.log
```

## Ramas en git

Una rama es git es una línea de tiempo de commits. 

## Crear un rama
::: tip Nota
`test` es el nombre de la rama
:::

```
git branch test
```
## Ver todas las ramas
```
git branch 
```
## Movernos a una rama

```
git checkout nameBranch
```

## Diferencia entre ramas

Para conocer la diferencia entre dos ramas usamos el siguiente comando.

``` 
git diff test master

```
::: tip Nota 
`test` y `master` son el nombre de las ramas que estamos comparando 
::: 

## Unir ramas `merge`

Para unir dos ramas lo primero que debemos hacer es movernos a la rama principal, la cual queremos fusionar con otra. Luego hacemos la unión.

```
git branch master
git merge test
```
::: tip Nota 
Despues de hacer un merge es buena practica eliminar la rama que unimos a otra, siguiendo el ejemplo anterior, eliminariamos la `rama test` porque ya la unimos a la `rama master`  
::: 

```
git branch -d test
```

## Crear una rama y movernos automaticamente a ella

```
git branch -b nameBranch 
``` 

## Tag o etiquetas

Cuando llevamos cierto tiempo trabajando en un proyecto y tenemos el primer prototipo listo para producción. Es aquí donde entra en juego los `tags`

:::tip Nota 
Los `tags` son una referencia a un commit específico
:::

## Crear un tag

```
Git tag name-tag
```

## Ver todos los tags

```
git tag 
```

## Otra forma de crear tags
Esta forma es mucho más descriptiva que la anterior, es la que más me gusta. 

```
git tag -a v1.0 -m "Version alpha" 
```

## Eliminar un tag

```
git tag -d name-tag
```
## Subir tag a un repositorio remoto

Si tenemos nuestro repositorio local almacenado en sitios como GitLab o GitHub, el comando para subir nuestros tag a la nube es el siguiente

```js
git pus --tags 
// ó
git push origin --tags 
```

## Tag a un commit en especifico

```
git tag -a v1.0 28b2030 -m "Version alpha"
``` 
::: tip 
Si queremos ver el mensaje del tag, usamos `git show v1.0` donde v1.0 es la anotación que le dimos al tag
:::

## Git stash y rebase

Un `stash` es un contenedor en el cual podemos poner los cambios temporales para dejarlos como estaban en el último commit

## Trabajos que hay en progreso `WIP`

```
git stash list
```

## Recuperar los cambios del stash

```
git stash pop
```

## Eliminar un stash 

```
git stash drop
```

:::tip Nota
`git stash` toma algunos archivos y los coloca en un área temporal
:::

## Comando más importantes del stash

:::tip Nota
`git stash / git stash save`: Salva y restaura el último commit<br>
`git stash apply`: Restaura el último registro en el stash <br>
`git stash list`: Nos permite ver las múltiples entradas en el stash
:::

## Restaurar una entrada del stash

```
git stash apply stash{1}
```

## Borrar la primera entrada del stash

```
git stash drop
```
Para ver en detalle que hicimos en cada una de las entradas del stash usamos

```
git stash list --stash
``` 

## Mensajes en el stash

```
git stash save "message"
```

## Borrar las entradas del stash

```
git stash clear
```
::: warning 
Tengo que volver a estudiar este tema en detalle :books:
::: 

## Git rebase

El rebase nos sirve para actualizar el punto donde creamos la rama

### Usos del rebase interactivo
* Ordenar commits
* Corregir mensajes de los commits
* Unir commits
* Separar commits 

## Cambiar mensaje del commit usando rebase

```
git rebase -i HEAD~1
```
::: tip Nota
El comando anterior abre el editor de vim donde podemos editar el mensaje del commit 
::: 

## Revertir los cambios del último commit

Para revertir los cambios del último commit sin destruirlos usamos

```
git reset HEAD^ 
```
# GitHub

## Fuentes remotas
Para ver las fuentes remostas que tenemos agregadas en nuestro repositorio usamos

```
git remote -v 
```

## Repositorio remoto

Para descargar los cambios de un repositorio remoto y e intentar hacer un merge en nuestro repositorio local usamos 

```
git pull
```

## Clonar un repositorio remoto

```js
git clone url-repository nombre-personalizado
// Ejemplo
git clone https://github.com/Sk4ne/test-code.git codigo-prueba
```
:::tip Nota
En ocasiones tenemos problemas para subir los cambios locales a un repositorio remoto esto puede ocurrir porque el repositorio remoto contiene cambios o modificaciones que no tiene nuestro repositorio local.
:::

## git pull vs git fetch
**git pull**: descarga los cambios y automaticamente intenta hacer un merge

**git fetch**: actualiza el repositorio local con los cambios que se hayan realizado en el repositorio remoto.

## Sincronizar repositorio local

Para sincronizar un repositorio local con uno remoto hacemos lo siguiente

```
git fetch
git status
git pull 
```
