# 02 React XSS - Ualapop

## Instalación

- Hacemos un _npm install_ en el directorio de trabajo que es el _02-react-exercises/02-xss-react-ualapop_ e instalamos todas las dependencias de las 3 apps.

```
npm install
```

- Podemos arrancar las apps con _npm start_, o arrancarlas individualmente

```
npm start

```

## Pasos

- Mi idea era crear un producto nuevo con un nombre, descripción y precio.

- He intentado meter por el textarea un código javascript que se guardara en la base de datos. Como por ejemplo:

```javascript
javascript: alert("Hacked");
```

Lo que no sabía era luego como ejecutarlo.

- En primer lugar he intentado, pero no tiene sentido, cuando el usuario le da a pagar, se ejecuta el código javascript, pero ejecutando la descripción, pero como he dicho anteriormente esto no tiene sentido.

- Mi idea era meter algo en base de datos y cuando el usuario le diera a pagar te redirigiera a una página de paypal ficticia que de algún modo se hubiera introducido malintencionadamente. Pero por muchas vueltas que le he dado no he sido capaz de hacerlo.
