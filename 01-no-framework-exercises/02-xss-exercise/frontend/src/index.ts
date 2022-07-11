const form = document.getElementById("MyForm");

form.addEventListener("submit", async (event) => {
	await fetch("http://localhost:3000")
		.then((res) => console.log("hola"))
		.catch((error) => console.log("error"));
});
