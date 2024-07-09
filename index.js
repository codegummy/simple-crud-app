console.log("HELLO WORLD");
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//password 53krCWdtku4tEorf

//create products

//update PRODUCT

//delete

mongoose
	.connect(
		"mongodb+srv://seaghartey:53krCWdtku4tEorf@backenddb.qhi9evk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb"
	)
	.then(() => {
		console.log("Connected to database");
		app.listen(3000, () => {
			console.log("server running...");
		});
	})
	.catch(() => {
		console.log("Connection failed");
	});
