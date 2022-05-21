(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{428:function(a,e,s){"use strict";s.r(e);var t=s(65),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"notas-sobre-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notas-sobre-git"}},[a._v("#")]),a._v(" Notas sobre GIT")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("Todo desarrollador de software profesional debe conocer al menos un sistema de control de versiones, para llevar el control total de sus proyectos si en el temor\nde perder información importante.")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("Gran parte de estas notas las tome de un curso en línea de "),s("code",[a._v("Fernando Herrera")]),a._v(" "),s("a",{attrs:{href:"https://www.udemy.com/course/git-github/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Curso de git y github"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"instalar-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalar-git"}},[a._v("#")]),a._v(" Instalar Git")]),a._v(" "),s("p",[a._v("El primer paso para trabajar con Git es instalarlo, esta es su página oficial\n"),s("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"version-de-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-de-git"}},[a._v("#")]),a._v(" Versión de Git")]),a._v(" "),s("p",[a._v("Para ver que versión de git que tenemos instalada en nuestro sistema, abrimos una terminal si estamos en linux o power shell en windows y  ejecutamos el siguiente comando.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git --version\n")])])]),s("p",[a._v("En ocasiones necesitamos saber lo que contiene un carpeta, y aunque esto no tiene nada que ver con git, nos puede servir para ver archivos ocultos. Lo hacemos con el siguiente comando")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ls -al\n")])])]),s("h2",{attrs:{id:"ayuda-de-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ayuda-de-git"}},[a._v("#")]),a._v(" Ayuda de Git")]),a._v(" "),s("p",[a._v("Para conocer los comandos más usados que nos ofrece git en varias situaciones usamos.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git --help\n")])])]),s("h2",{attrs:{id:"configuracion-de-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-git"}},[a._v("#")]),a._v(" Configuración de Git")]),a._v(" "),s("p",[a._v("Al momento de trabajar con git en un proyecto real lo primero que debemos tener en cuenta es hacer las configuraciones básicas, es decir decirle a git cual es nuestro "),s("code",[a._v("username")]),a._v(" e "),s("code",[a._v("email")]),a._v(" para esto abrimos un terminal\ny escribimos los siguientes comandos.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git config --global user.name "yourUsername"\ngit config --global user.email "yourEmail"\n')])])]),s("h2",{attrs:{id:"ver-la-configuracion-global-de-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ver-la-configuracion-global-de-git"}},[a._v("#")]),a._v(" Ver la configuración global de git")]),a._v(" "),s("p",[a._v("Para ver la configuración global de git, tenemos dos opciones con una podemos "),s("code",[a._v("editar")]),a._v(" la información y con el otro comando solo la podemos "),s("code",[a._v("listar")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// config edit")]),a._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("global "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("e\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// config list")]),a._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("global "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("list\n")])])]),s("h2",{attrs:{id:"crear-un-repositorio-en-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-repositorio-en-git"}},[a._v("#")]),a._v(" Crear un repositorio en Git")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("En git los proyectos son conocidos como repositorios")])]),a._v(" "),s("h2",{attrs:{id:"crear-un-repositorio-local"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-repositorio-local"}},[a._v("#")]),a._v(" Crear un repositorio local")]),a._v(" "),s("p",[a._v("Para crear un repositorio local nos ubicamos en la raiz de nuestro proyecto y desde la terminal ejecutamos el siguiente comando")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git init\n")])])]),s("h2",{attrs:{id:"estado-del-repositorio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estado-del-repositorio"}},[a._v("#")]),a._v(" Estado del repositorio")]),a._v(" "),s("p",[a._v("El siguiente comando nos permite conocer el estado del repositorio, es decir a que archivos les estamos dando seguimiento, ver los cambios que estan pendientes por guardar y nos muestra en que rama estamos trabajando, más adelante aprenderemos lo que es una rama.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git status\n")])])]),s("h2",{attrs:{id:"seguimiento-de-los-archivos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seguimiento-de-los-archivos"}},[a._v("#")]),a._v(" Seguimiento de los archivos")]),a._v(" "),s("p",[a._v("Para decirle a Git que este pendiente todo los cambios (seguimiento) utilizamos el siguiente comando")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git add .\n")])])]),s("h2",{attrs:{id:"guardar-los-cambios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guardar-los-cambios"}},[a._v("#")]),a._v(" Guardar los cambios")]),a._v(" "),s("p",[a._v("Una vez le decimos a git que este pendiente de todos los cambios en el repositorio es hora de guardarlos en el repositorio local, es decir tomamos una captura de como se encuentra el proyecto en el momento")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git commit -m "message"\n')])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("El mensaje del commit debe ser descriptivo y darnos una ídea de que fue lo que hicimos, por ejemplo si creamos el login de nuestra aplicación, el mensaje del commit podría ser el siguiente: "),s("code",[a._v("Terminamos el login de usuario y agregamos todas las posibles validaciones")])])]),a._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[a._v("DANGER")]),a._v(" "),s("p",[a._v("En ocasiones no guardamos, o eliminamos accidentalmente una carpeta de nuestro proyecto y el "),s("code",[a._v("ctrl + z")]),a._v(" no funciona por x motivos. Afortunadamente podemos recuperar esa carpeta siempre y cuando le estemos dado seguimiento al proyecto. Para esto usamos el siguiente comando")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout --\n")])])]),s("h2",{attrs:{id:"ver-los-commits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ver-los-commits"}},[a._v("#")]),a._v(" Ver los commits")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git log\n")])])]),s("h2",{attrs:{id:"otras-formas-de-agregar-archivos-al-stage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#otras-formas-de-agregar-archivos-al-stage"}},[a._v("#")]),a._v(" Otras formas de agregar archivos al stage")]),a._v(" "),s("p",[a._v("Si queremos agregar al stage todos los archivos con una extensión determinada usamos.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git add *.png\ngit add *.xml\ngit add *.js\n")])])]),s("p",[a._v("Si queremos agregar al stage todos los archivos que se encuentran dentro de un folder usamos el siguiente comando")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git add controllers/\n")])])]),s("p",[a._v("Si queremos agregar al stage todos los archivos que fueron modificados y luego sacar los que no queremos usamos los siguiente comandos")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Agregamos los archivos al stage")]),a._v("\ngit add "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("A")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Excluimos los archivos que no queremos por ejemplo, los archivos con extensión .ts")]),a._v("\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ts\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("El "),s("code",[a._v("HEAD")]),a._v(" hace referencia al último commit en la rama que estamos trabajando")])]),a._v(" "),s("p",[a._v("Para ver el historial de cambios de forma resumida usamos")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git log --online\n")])])]),s("h2",{attrs:{id:"alias-en-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alias-en-git"}},[a._v("#")]),a._v(" Alías en Git")]),a._v(" "),s("p",[a._v("En ocasiones tenemos que escribír comandos que son muy largos. Para solucionar esto podemos crear un alías que no son más que una version corta de dicho comando pero que cumple con el mismo objetivo.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git config --global alias.s "status -s -b"\ngit config --global alias.lg "log --online --decorate --all --graph"\n')])])]),s("h2",{attrs:{id:"cambios-en-el-repositorio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cambios-en-el-repositorio"}},[a._v("#")]),a._v(" Cambios en el repositorio")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git diff\n")])])]),s("h2",{attrs:{id:"archivos-en-el-stage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#archivos-en-el-stage"}},[a._v("#")]),a._v(" Archivos en el stage")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git diff --staged\n")])])]),s("h2",{attrs:{id:"excluir-archivos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#excluir-archivos"}},[a._v("#")]),a._v(" Excluir archivos")]),a._v(" "),s("p",[a._v("Anteriormente vimos como excluir un archivo del stage, otra forma de hacerlo es la siguiente")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git reset HEAD README.md\n")])])]),s("p",[a._v("Si queremos revertir los efectos del comando anterior, es decir volver a agregar un archivo que se encontraba en el stage usamos.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout -- README.md\n")])])]),s("h2",{attrs:{id:"agregar-archivos-al-stage-y-hacer-commit-shorthand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#agregar-archivos-al-stage-y-hacer-commit-shorthand"}},[a._v("#")]),a._v(" Agregar archivos al stage y hacer commit - shorthand")]),a._v(" "),s("p",[a._v("Hasta el momento ya sabemos como agregar archivos al stage y a hacer un commit, y lo hemos hecho en dos pasos")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git add .\ngit commit -m "message"\n')])])]),s("p",[a._v("Pero existe otra forma de hacerlo, en una sola línea, la cual funciona siempre y cuando ya hayamos realizado commits en el repositorio")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git commit -am "message"\n')])])]),s("h2",{attrs:{id:"actualizar-el-mensaje-del-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actualizar-el-mensaje-del-commit"}},[a._v("#")]),a._v(" Actualizar el mensaje del commit")]),a._v(" "),s("p",[a._v("En ocasiones creamos un commit pero nos equivocamos o escribimos un mensaje poco descriptivo. Para corregir el mensaje usamos el siguiente comando")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Este comando nos permite modificar el mensaje del último commit")]),a._v("\ngit commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("amend "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Actualizamos el readme"')]),a._v("\n")])])]),s("h2",{attrs:{id:"revertir-los-commits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revertir-los-commits"}},[a._v("#")]),a._v(" Revertir los commits")]),a._v(" "),s("p",[a._v("Si queremos revertir los commits usamos")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git reset -soft HEAD^ \n")])])]),s("h2",{attrs:{id:"viajes-en-el-tiempo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viajes-en-el-tiempo"}},[a._v("#")]),a._v(" Viajes en el tiempo")]),a._v(" "),s("p",[a._v("Para volver a un punto en especifico usamos [VOLVER A REVISAR ESTE COMANDO...]")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 88421ca es el id o hash del commit")]),a._v("\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("soft 88421ca\n")])])]),s("h2",{attrs:{id:"quedarse-en-un-punto-en-especifico"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quedarse-en-un-punto-en-especifico"}},[a._v("#")]),a._v(" Quedarse en un punto en específico")]),a._v(" "),s("p",[a._v("Para quedarnos en un punto en especifico y destruir los démas usamos")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git reset --hard 88421ca\n")])])]),s("h2",{attrs:{id:"volver-a-un-punto-especifico"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volver-a-un-punto-especifico"}},[a._v("#")]),a._v(" Volver a un punto especifico")]),a._v(" "),s("p",[a._v("Para regresar a un punto especifico del tiempo usamos el siguiente comando")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git reset --hard 88421ca\n")])])]),s("h2",{attrs:{id:"registro-del-respositorio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registro-del-respositorio"}},[a._v("#")]),a._v(" Registro del respositorio")]),a._v(" "),s("p",[a._v("Para ver todo el registro de lo que ha sucedido en el repositorio usamos")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git reflog\n")])])]),s("h2",{attrs:{id:"renombrar-archivos-en-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renombrar-archivos-en-git"}},[a._v("#")]),a._v(" Renombrar archivos en git")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git mv login.vue loginUser.vue\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[s("code",[a._v("login.vue")]),a._v(" es el nombre original y "),s("code",[a._v("loginUser.vue")]),a._v(" es el nuevo nombre")])]),a._v(" "),s("h2",{attrs:{id:"eliminar-archivo-en-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eliminar-archivo-en-git"}},[a._v("#")]),a._v(" Eliminar archivo en git")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git rm README.md \n")])])]),s("h2",{attrs:{id:"ignorando-archivos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignorando-archivos"}},[a._v("#")]),a._v(" Ignorando archivos")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("Para ignorar archivo lo primero que debemos hacer es crear un archivo llamando "),s("code",[a._v(".gitignore")]),a._v(" en la raiz del proyecto, en este archivo especificamos los archivos a ignorar.")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// .gitignore")]),a._v("\nnode_modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\ndata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("log\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("log\n")])])]),s("h2",{attrs:{id:"ramas-en-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ramas-en-git"}},[a._v("#")]),a._v(" Ramas en git")]),a._v(" "),s("p",[a._v("Una rama es git es una línea de tiempo de commits.")]),a._v(" "),s("h2",{attrs:{id:"crear-un-rama"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-rama"}},[a._v("#")]),a._v(" Crear un rama")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[s("code",[a._v("test")]),a._v(" es el nombre de la rama")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch test\n")])])]),s("h2",{attrs:{id:"ver-todas-las-ramas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ver-todas-las-ramas"}},[a._v("#")]),a._v(" Ver todas las ramas")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch \n")])])]),s("h2",{attrs:{id:"movernos-a-una-rama"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#movernos-a-una-rama"}},[a._v("#")]),a._v(" Movernos a una rama")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout nameBranch\n")])])]),s("h2",{attrs:{id:"diferencia-entre-ramas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diferencia-entre-ramas"}},[a._v("#")]),a._v(" Diferencia entre ramas")]),a._v(" "),s("p",[a._v("Para conocer la diferencia entre dos ramas usamos el siguiente comando.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git diff test master\n\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[s("code",[a._v("test")]),a._v(" y "),s("code",[a._v("master")]),a._v(" son el nombre de las ramas que estamos comparando")])]),a._v(" "),s("h2",{attrs:{id:"unir-ramas-merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unir-ramas-merge"}},[a._v("#")]),a._v(" Unir ramas "),s("code",[a._v("merge")])]),a._v(" "),s("p",[a._v("Para unir dos ramas lo primero que debemos hacer es movernos a la rama principal, la cual queremos fusionar con otra. Luego hacemos la unión.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch master\ngit merge test\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("Despues de hacer un merge es buena practica eliminar la rama que unimos a otra, siguiendo el ejemplo anterior, eliminariamos la "),s("code",[a._v("rama test")]),a._v(" porque ya la unimos a la "),s("code",[a._v("rama master")])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch -d test\n")])])]),s("h2",{attrs:{id:"crear-una-rama-y-movernos-automaticamente-a-ella"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crear-una-rama-y-movernos-automaticamente-a-ella"}},[a._v("#")]),a._v(" Crear una rama y movernos automaticamente a ella")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch -b nameBranch \n")])])]),s("h2",{attrs:{id:"tag-o-etiquetas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tag-o-etiquetas"}},[a._v("#")]),a._v(" Tag o etiquetas")]),a._v(" "),s("p",[a._v("Cuando llevamos cierto tiempo trabajando en un proyecto y tenemos el primer prototipo listo para producción. Es aquí donde entra en juego los "),s("code",[a._v("tags")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("Los "),s("code",[a._v("tags")]),a._v(" son una referencia a un commit específico")])]),a._v(" "),s("h2",{attrs:{id:"crear-un-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-tag"}},[a._v("#")]),a._v(" Crear un tag")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Git tag name-tag\n")])])]),s("h2",{attrs:{id:"ver-todos-los-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ver-todos-los-tags"}},[a._v("#")]),a._v(" Ver todos los tags")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git tag \n")])])]),s("h2",{attrs:{id:"otra-forma-de-crear-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#otra-forma-de-crear-tags"}},[a._v("#")]),a._v(" Otra forma de crear tags")]),a._v(" "),s("p",[a._v("Esta forma es mucho más descriptiva que la anterior, es la que más me gusta.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git tag -a v1.0 -m "Version alpha" \n')])])]),s("h2",{attrs:{id:"eliminar-un-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eliminar-un-tag"}},[a._v("#")]),a._v(" Eliminar un tag")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git tag -d name-tag\n")])])]),s("h2",{attrs:{id:"subir-tag-a-un-repositorio-remoto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subir-tag-a-un-repositorio-remoto"}},[a._v("#")]),a._v(" Subir tag a un repositorio remoto")]),a._v(" "),s("p",[a._v("Si tenemos nuestro repositorio local almacenado en sitios como GitLab o GitHub, el comando para subir nuestros tag a la nube es el siguiente")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("git pus "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("tags \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ó")]),a._v("\ngit push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("tags \n")])])]),s("h2",{attrs:{id:"tag-a-un-commit-en-especifico"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tag-a-un-commit-en-especifico"}},[a._v("#")]),a._v(" Tag a un commit en especifico")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git tag -a v1.0 28b2030 -m "Version alpha"\n')])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("Si queremos ver el mensaje del tag, usamos "),s("code",[a._v("git show v1.0")]),a._v(" donde v1.0 es la anotación que le dimos al tag")])]),a._v(" "),s("h2",{attrs:{id:"git-stash-y-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-y-rebase"}},[a._v("#")]),a._v(" Git stash y rebase")]),a._v(" "),s("p",[a._v("Un "),s("code",[a._v("stash")]),a._v(" es un contenedor en el cual podemos poner los cambios temporales para dejarlos como estaban en el último commit")]),a._v(" "),s("h2",{attrs:{id:"trabajos-que-hay-en-progreso-wip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#trabajos-que-hay-en-progreso-wip"}},[a._v("#")]),a._v(" Trabajos que hay en progreso "),s("code",[a._v("WIP")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git stash list\n")])])]),s("h2",{attrs:{id:"recuperar-los-cambios-del-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recuperar-los-cambios-del-stash"}},[a._v("#")]),a._v(" Recuperar los cambios del stash")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git stash pop\n")])])]),s("h2",{attrs:{id:"eliminar-un-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eliminar-un-stash"}},[a._v("#")]),a._v(" Eliminar un stash")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git stash drop\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[s("code",[a._v("git stash")]),a._v(" toma algunos archivos y los coloca en un área temporal")])]),a._v(" "),s("h2",{attrs:{id:"comando-mas-importantes-del-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comando-mas-importantes-del-stash"}},[a._v("#")]),a._v(" Comando más importantes del stash")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[s("code",[a._v("git stash / git stash save")]),a._v(": Salva y restaura el último commit"),s("br"),a._v(" "),s("code",[a._v("git stash apply")]),a._v(": Restaura el último registro en el stash "),s("br"),a._v(" "),s("code",[a._v("git stash list")]),a._v(": Nos permite ver las múltiples entradas en el stash")])]),a._v(" "),s("h2",{attrs:{id:"restaurar-una-entrada-del-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restaurar-una-entrada-del-stash"}},[a._v("#")]),a._v(" Restaurar una entrada del stash")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git stash apply stash{1}\n")])])]),s("h2",{attrs:{id:"borrar-la-primera-entrada-del-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#borrar-la-primera-entrada-del-stash"}},[a._v("#")]),a._v(" Borrar la primera entrada del stash")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git stash drop\n")])])]),s("p",[a._v("Para ver en detalle que hicimos en cada una de las entradas del stash usamos")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git stash list --stash\n")])])]),s("h2",{attrs:{id:"mensajes-en-el-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mensajes-en-el-stash"}},[a._v("#")]),a._v(" Mensajes en el stash")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git stash save "message"\n')])])]),s("h2",{attrs:{id:"borrar-las-entradas-del-stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#borrar-las-entradas-del-stash"}},[a._v("#")]),a._v(" Borrar las entradas del stash")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git stash clear\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("Tengo que volver a estudiar este tema en detalle 📚")])]),a._v(" "),s("h2",{attrs:{id:"git-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[a._v("#")]),a._v(" Git rebase")]),a._v(" "),s("p",[a._v("El rebase nos sirve para actualizar el punto donde creamos la rama")]),a._v(" "),s("h3",{attrs:{id:"usos-del-rebase-interactivo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usos-del-rebase-interactivo"}},[a._v("#")]),a._v(" Usos del rebase interactivo")]),a._v(" "),s("ul",[s("li",[a._v("Ordenar commits")]),a._v(" "),s("li",[a._v("Corregir mensajes de los commits")]),a._v(" "),s("li",[a._v("Unir commits")]),a._v(" "),s("li",[a._v("Separar commits")])]),a._v(" "),s("h2",{attrs:{id:"cambiar-mensaje-del-commit-usando-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cambiar-mensaje-del-commit-usando-rebase"}},[a._v("#")]),a._v(" Cambiar mensaje del commit usando rebase")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git rebase -i HEAD~1\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("El comando anterior abre el editor de vim donde podemos editar el mensaje del commit")])]),a._v(" "),s("h2",{attrs:{id:"revertir-los-cambios-del-ultimo-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revertir-los-cambios-del-ultimo-commit"}},[a._v("#")]),a._v(" Revertir los cambios del último commit")]),a._v(" "),s("p",[a._v("Para revertir los cambios del último commit sin destruirlos usamos")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git reset HEAD^ \n")])])]),s("h1",{attrs:{id:"github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[a._v("#")]),a._v(" GitHub")]),a._v(" "),s("h2",{attrs:{id:"fuentes-remotas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fuentes-remotas"}},[a._v("#")]),a._v(" Fuentes remotas")]),a._v(" "),s("p",[a._v("Para ver las fuentes remostas que tenemos agregadas en nuestro repositorio usamos")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git remote -v \n")])])]),s("h2",{attrs:{id:"repositorio-remoto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repositorio-remoto"}},[a._v("#")]),a._v(" Repositorio remoto")]),a._v(" "),s("p",[a._v("Para descargar los cambios de un repositorio remoto y e intentar hacer un merge en nuestro repositorio local usamos")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git pull\n")])])]),s("h2",{attrs:{id:"clonar-un-repositorio-remoto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clonar-un-repositorio-remoto"}},[a._v("#")]),a._v(" Clonar un repositorio remoto")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("git clone url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("repository nombre"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("personalizado\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Ejemplo")]),a._v("\ngit clone https"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Sk4ne"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("test"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("git codigo"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("prueba\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("En ocasiones tenemos problemas para subir los cambios locales a un repositorio remoto esto puede ocurrir porque el repositorio remoto contiene cambios o modificaciones que no tiene nuestro repositorio local.")])]),a._v(" "),s("h2",{attrs:{id:"git-pull-vs-git-fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-pull-vs-git-fetch"}},[a._v("#")]),a._v(" git pull vs git fetch")]),a._v(" "),s("p",[s("strong",[a._v("git pull")]),a._v(": descarga los cambios y automaticamente intenta hacer un merge")]),a._v(" "),s("p",[s("strong",[a._v("git fetch")]),a._v(": actualiza el repositorio local con los cambios que se hayan realizado en el repositorio remoto.")]),a._v(" "),s("h2",{attrs:{id:"sincronizar-repositorio-local"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sincronizar-repositorio-local"}},[a._v("#")]),a._v(" Sincronizar repositorio local")]),a._v(" "),s("p",[a._v("Para sincronizar un repositorio local con uno remoto hacemos lo siguiente")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git fetch\ngit status\ngit pull \n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Nota")]),a._v(" "),s("p",[a._v("Si tengo errores en estas notas por favor hágamelo saber. 👍")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://linkedin.com/in/neider-l%C3%B3pez-12440a227",target:"_blank",rel:"noopener noreferrer"}},[a._v("LinkedIn"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);