# Ejemplo de XSS con React - Ejercicio 1

## Explicación

- Dentro de _app.tsx_ tengo comentado la función eval por si se quiere hacer uso de ella y ver las vulnerabilidades que tiene, aquí está su [Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).

- También el uso de DangerouslySetInnerHTML para poder usar HTML dentro de un elemento de React. Y lo peligroso qué es para ejecutar código malicioso. Aquí está su [Documentación](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).

- Si introducimos los siguientes ejemplos en el input de la página, se ejecutará el código malicioso:

```
<img src='x' onerror='alert("la hemos liao")'>
<img src='x' onerror="document.body.background='https://www.icegif.com/wp-content/uploads/2022/01/icegif-179.gif'">

javascript:alert("Hacked");
javascript:document.body.background='https://www.icegif.com/wp-content/uploads/2022/01/icegif-179.gif';
```

- También tengo un _anchor_ con el atributo _href_ con el siguiente para ver que también se ejecuta código malicioso.

## DomPurify

Para protegerse de ataques XSS, podemos usar el módulo de _DomPurify_ que nos permite filtrar el código HTML.

- Lo instalamos con el comando:

```
npm install dompurify --save
```

- Lo importamos en _app.tsx_

```
import DOMPurify from 'dompurify';
```

- Creamos una variable

```
const sanitizer = DOMPurify.sanitize;
```

- Y lo usamos en el _h2_

```
<h2 dangerouslySetInnerHTML={{ __html: sanitizer(output) }}></h2>
```

Y ahora no se ejecutará el código malicioso si lo introducimos en el input.
