
# Test brújula

Prueba javascript para Brujula

## INSTALACION

+ Instalamos todas las dependencias de NPM: 
	```
	$ npm install
	```
	> Creará una carpeta en la raiz llamada *node_modules* donde se guardarán todas las dependencias de desarrollo para el proyecto.

	Una vez instaladas las dependencias, podemos ejecutar la siguiente tarea gulp para lanzar el desarrollo:
	
	gulp develop

	La dirección y puerto donde se levantará automaticamente será la siguiente: http://localhost:8000/views/index.html

	Por otro lado, os dejaré tambié el build para que podais lanzarlo directamente. Para ello necesitais un servidor local para levantarlo.

	En este caso, os recomiendo http-server (https://www.npmjs.com/package/http-server)

	Podeis instalarlo de forma global:

	npm install http-server -g

	para ejecutarlo, dirigirse a /build/ mediante la consola y ejecutar:
	
	http-server .

	Os levantará la siguiente ruta/puerto:

	http://10.27.5.248:8080/views/index.html

---

## Estructura proyecto

	gulp -> Tareas gulp
		group-task
		task
		utils
	node_modules -> Depencendias
	src -> Estructura principal proyecto
		assets	-> Archivos estaticos (Imagenes, fonts)
		js
			es6
				classes -> Clases
				data -> Archivos JSON
				utilities -> Utilidades reutilizables js
				front-dev.js -> Main js
		scss (BEM , ITCSS)
			00-settings
			01-tools
			02-generic
			03-elements
			04-objects
			05-components
			06-trumps
			front-modules.scss
		views
			html
				pages
				index.html

## GULP

### Tareas disponibles:

+ ### develop

		$ gulp develop

	TASK FILES:  
	__./gulp/group-task/develop.js__

	DEPENDENCIES:
	1. __[clean]__
	2. __[assets]__
	3. __[libs]__
	4. __[scripts]__
	5. __[html]__
	6. __[scss]__
	7. __[serve]__
	8. __[watch]__

	Ejecuta un servidor de desarrollo y compiladores de scss, y JS.


+ ### build

		$ gulp build

	TASK FILES:  
	__./gulp/group-task/build.js__

	DEPENDENCIES:
	1. __[clean]__
	2. __[assets]__
	3. __[libs]__
	4. __[scripts]__
	5. __[html]__
	6. __[scss]__

	Ejecuta una carpeta build de producción del proyecto