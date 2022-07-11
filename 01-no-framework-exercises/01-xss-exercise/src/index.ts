document.getElementById("submit").addEventListener("click", function (e) {
	// <img src='x' onerror='alert("la hemos liao")'>
	const input = document.getElementById("name") as HTMLInputElement | null;
	const contenido = input?.value;

	document.getElementById("result").innerHTML = contenido;
});
