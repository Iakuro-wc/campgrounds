const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send("this is the landing page!!!");
})

app.listen(3000, () => {
	console.log("now listening to yelpcamp/v1 on port 3000");
})