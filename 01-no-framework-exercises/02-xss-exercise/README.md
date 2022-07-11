Al intentar injectar el código utilizando la etiqueta `<script>` vemos que **html5** ya controla esta posibilidad eliminando la etiqueta y delvolviendo el contenido como un **string**.

Podemos saltarnos esta restricción injectando nuestro código por ejemplo en la función `onerror` de la etiqueta `<img>`

`<img src='x' onerror='alert("la hemos liao")'>`
