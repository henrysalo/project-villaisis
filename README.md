# ProjectAngularFront
Página VillaIsis 

Proyecto realizado en Angular, se utilizaron elementos de estilo de distintas páginas.
Para la instalación se requiere tener instalado la última versión estable del framework de Angular y el manejador de paquetes que guste (uso <code> npm </code>)

En ese orden de ideas se procede con ubicarse en la carpeta del proyecto, luego <code> npm install </code> y al terminar <code> ng serve </code>, verificar que la dirección ser servidor que escogió Angular fue: http://localhost:4200.

Al acceder a este se podrá ver la página base del proyecto con cuatro componentes disponibles para visualización en content. Los links de estos son:
-http://http://localhost:4200/component1
-http://http://localhost:4200/component2
-http://http://localhost:4200/component3
-http://localhost:4200/contacto

Los tres primeros tienen libertad de acceso, mientras que el último está restringido con un guard que redirige a home. Este se habilita si se hace login con una cuenta de Google y petición se realiza con el angular-social-login. 
Al acceder se puede llenar un formulario y al hacer submit, se cierra la sesión advirtiendo al usuario que se han enviado los datos componentes del formulario y se redirige a home, dejando inhabilitado nuevamente el componente contacto.

Los datos son guardados en una API real y puedn ser leídos a posteriori.

Las posibles mejores que realizaré en un futuro será: 
-Creación y conexión propia de una API para el login y el guardado de datos.
-Responsive design.
-Mejora en la interfaz y uso de UI/UX
-Mejora en la modulación de componentes y assets

Gracias por leer y quedo atento a su feedback del proyecto

Dato de color: hay una versión anterior en línea disponible totalmente funcional pero sin mejoras en css: https://villaisis.web.app/home