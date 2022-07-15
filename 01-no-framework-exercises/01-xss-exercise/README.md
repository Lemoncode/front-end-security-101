Al intentar injectar el código utilizando la etiqueta `<script>` vemos que **html5** ya controla esta posibilidad eliminando la etiqueta y delvolviendo el contenido como un **string**.

Podemos saltarnos esta restricción injectando nuestro código por ejemplo en la función `onerror` de la etiqueta `<img>`


<img src='x' onerror="document.body.background='https://www.icegif.com/wp-content/uploads/2022/01/icegif-179.gif'">
<img src='x' onerror='alert("la hemos liao")'>
