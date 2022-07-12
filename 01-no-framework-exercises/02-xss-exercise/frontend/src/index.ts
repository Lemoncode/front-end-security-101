const form = document.getElementById("MyForm");

const loginData = {
	user: document.getElementById("user"),
	password: document.getElementById("password"),
};

let authHeader = "";

form.addEventListener("submit", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const user = document.querySelector("#user") as HTMLInputElement | null;
	const password = document.querySelector(
		"#password"
	) as HTMLInputElement | null;

	fetch("http://localhost:3000/login", {
		method: "POST",
		credentials: "same-origin",
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			user: user?.value,
			password: password?.value,
		}),
	})
		.then((resp) => {
			authHeader = resp.headers.get("Authorization");
			console.log(...resp.headers);
		})
		.catch((err) => console.log(err));
});

document.getElementById("sendBio").addEventListener("click", (e) => {
	const textArea = document.getElementById("bio") as HTMLInputElement | null;
	const contenido = textArea?.value;

	fetch("http://localhost:3000/bio", {
		method: "POST",
		headers: {
			Authorization: authHeader,
			"Content-type": "application/json",
			Accept: "application/json",
		},
	})
		.then((resp) => (document.getElementById("result").innerHTML = contenido))
		.catch((error) => console.log(error));
});

// Paste this in text area for example:
//  <a onClick='fetch("http://localhost:3000/bio").then((resp) => alert("Gracias por su token de autorización: "+resp.headers.get("Authorization")))'>Click aquí para ver tu biografía</a>

document.getElementById("getPrivateData").addEventListener("click", (e) => {
	fetch("http://localhost:3000/private-area", {
		method: "GET",
		headers: {
			Authorization: authHeader,
			"Content-type": "application/json",
			Accept: "application/json",
		},
	})
		.then((resp) => resp.json())
		.then(
			(resp) =>
				(document.getElementById(
					"resultPrivateData"
				).innerHTML = `Mi nombre es <b>${resp.nombre}</b> y esta es mi historia: <i>${resp.bio}</i>`)
		)
		.catch((error) => console.log(error));
});
