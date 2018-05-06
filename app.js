const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("landing")
})

app.get("/campgrounds", function(req, res) {
	var campgrounds =[
		{
			name: "salmon crekk",
			image: "https://pixabay.com/get/eb32b9072ef3063ed1584d05fb1d4e97e07ee3d21cac104497f5c47da7e4b7bf_340.jpg"
		},
		{
			name: "granite hill",
			image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f5c47da7e4b7bf_340.jpg"
		},
		{
			name: "Mountain Goat's Rest",
			image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"
		}
	]
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, () => {
	console.log("now listening to yelpcamp/v1 on port 3000");
})