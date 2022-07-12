import express from "express";
import cors from "cors";
const app = express();

app.use(
	cors({
		methods: "GET",
		origin: "http://localhost:1234",
		credentials: true,
		//Access-Control-Allow-Credentials: true
		exposedHeaders: "*",
	})
);

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	next();
});

app.get("/", (req, res) => {
	res.setHeader("authorization", "Bearer123456789");
	res.send({
		"Content-Type": "text/plain",
		"Content-Length": "123",
		Authorization: "Bearer12345",
	});
	res.send("My awesome login portal").sendStatus(200);
});

app.get("/token:token", (req, res) => {
	if (!req.headers.authorization) {
		return res
			.status(403)
			.send({ message: "Tu petición no tiene cabecera de autorización" });
	}

	if (req.headers.authorization === "Bearer123456789") {
		return res.status(200).send({ message: "Welcome" });
	}
});

app.listen(3000, () => {
	console.log("Server ready at port 3000");
});
