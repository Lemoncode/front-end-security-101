const form = document.getElementById("MyForm");

const myHeader = new Headers();

let authHeader = "";

form.addEventListener("submit", (event) => {
	event.preventDefault();
	event.stopPropagation();
	fetch("http://localhost:3000")
		.then((resp) => {
			authHeader = resp.headers.get("Authorization");
			console.log(...resp.headers);
		})
		.catch((err) => console.log(err));
});

document.getElementById("send").addEventListener("click", function (e) {
	const input = document.getElementById("token") as HTMLInputElement | null;
	const contenido = input?.value;

  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer123456789",
      "Content-type": "application/json",
      Accept: "application/json",
    },
    timeout: 3000,
  };
  fetch("http://localhost:3000/token", {
    method: "GET",
    headers: new Headers({
      Authorization: authHeader,
      "Content-type": "application/json",
      Accept: "application/json",
    }),
  })
    .then((req) => window.open("http://localhost:3000/token"))
    .catch((error) => console.log(error));

	document.getElementById("result").innerHTML = contenido;
});
