# Instalación:

- Instalamos las dependencias:

```javascript
npm install
```

- Ejecutamos _npm start_ y se creará el contenedor de docker con mongo instalado. Y aparecerá un menú de opciones.

```javascript
seed-data
find-without-sleep
find-with-sleep
exit
```

- Con seed-data ejecutamos el comando para insertar datos en la base de datos.

```javascript
> seed-data
```

- Con find-without-sleep ejecutamos el comando para buscar datos en la base de datos usando el where.

```javascript
> find-without-sleep
```

- Con find-with-sleep ejecutamos el comando para buscar datos en la base de datos usando el where y la función sleep y vemos que tarda 5 segundos en responder. Y vemos la vulnerabilidad de SQL Injection con una cadena de texto.

```javascript
> find-with-sleep
```
