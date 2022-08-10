# 02 XSS Exercise with JavaScript


## Instalación

- Hacemos un _npm install_ en el directorio de trabajo que es el _01-no-framework-exercises/02-xss-exercise_ e instalamos todas las dependencias de las 3 apps.

```javascript
npm install
```

- Podemos arrancar las apps con _npm start_, o arrancarlas individualmente. 

```
npm start

```
## Pasos:

- Entrar en la aplicación usando como usuario _admin_ y contraseña _admin_.
- Una vez iniciada la sesión hemos recibido nuestro token para las cabeceras. Y ahora vamos a ver cómo sustraerlas.
- Insertamos este _achor_ en el textearea y enviamos la petición al servidor.

```javascript
<a onClick="alert('Gracias por su token de autorización: '+window.authHeader)">
  Click aquí para ver tu biografía
</a>
```

- Generará un párrafo debajo del textarea y nos dirá que hagamos clic en él para ver nuestra biografía introducida.

```
Click aquí para ver tu biografía
```

- Y si hacemos clic en él recibiremos una alerta que dice:

```
Gracias por su token de autorización: <token>
```

- Otra forma de obtener el token sería introducir en el textarea una imagen como hicimos en el ejemplo anterior. Y cuando da un error porque no ha podido obtener la imagen, sale una alerta y obtenemos el token.

```
<img src='x' onerror='alert("Gracias por su token de autorización: "+window.authHeader)'>
```
