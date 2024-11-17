# DAW_M06_UF3

Descripción de la actividad
La actividad consta de un ejercicio práctico dividido en dos partes que se debe desarrollar
teniendo en cuenta los siguientes aspectos:
• El ejercicio se debe realizar siguiendo el patrón MVC (modelo-vista-controlador).
• La aplicación se debe desarrollar integrando mecanismos de manejo de eventos y
analizando y aplicando las características del modelo de objeto del documento (DOM).
• Se deben incluir comentarios que expliquen la finalidad de cada sentencia o estructura de
programación.
• Debe contener dos archivos HTML; el fichero principal se debe llamar index.html y el
fichero de bienvenida que se debe llamar usuario.html
• Los ficheros .js fruto del desarrollo del patrón MVC deben ser identificados por el nombre
de su función.
• En caso de utilizar CSS deberá realizar en un fichero llamado estilos.css
Desarrollo de la actividad
Actividad práctica (100%)
a. Se debe crear, en una web, un formulario en HTML y JavaScript para el registro de un nuevo
usuario introduciendo el nombre de usuario y la contraseña que desea tener. Es decir, con
este formulario se valida si el nombre de usuario y la contraseña que propone el nuevo
usuario cumplen con los requisitos establecidos.
Ambos campos deben tener reglas de validación HTML y expresiones regulares que valide
en tiempo real y muestre mensajes de error o de éxito de cada uno de ellos.
En el caso de que ambos sean correctos debe enviar, al nuevo usuario, a un nuevo fichero
HTML llamado usuario.html en donde mostrará un mensaje de bienvenida que incluya el
nombre del usuario.
Los requisitos de los dos campos son los siguientes:
• El nombre de usuario debe tener entre 5 y 15 caracteres, solo puede contener letras
(mayúsculas o minúsculas) y un guion bajo como máximo que nunca pueda estar ni al
principio ni al final.
• La contraseña debe ser de 8 caracteres, debe contener al menos una letra mayúscula,
una letra minúscula, un número y un carácter especial, y no podrá tener espacios.
b. Una vez en el fichero usuario.html, tendremos un botón que cada vez que se pulse debe
crear un elemento tipo <p> con el texto “Bienvenid@ usuario”. Los nuevos elementos tienen
que aparecer dentro de una capa <div id="contenido"> (como hijos de esta, dentro de la
estructura DOM).También se debe crear un botón para eliminar el último párrafo creado.
Además, se deben añadir, tres nuevos botones que permitan alinear el contenido de la capa
<div id="contenido"> a la izquierda, a la derecha o al centro.