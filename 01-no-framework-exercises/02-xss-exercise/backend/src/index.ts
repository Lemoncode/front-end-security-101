import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("My awesome login portal");
	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
});

app.listen(3000, () => {
	console.log("Server ready at port 3000");
});
