const Product = require("../models/product.model");

const getProduct = async (req, res) => {
	try {
		const products = await Product.find(
			{},
			{ name: true, price: true, quantity: true }
		);
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
		console.log(error);
	}
};

//get single product
const getSingleProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.find(
			{ name: id },
			{ name: true, price: true, quantity: true, _id: false }
		);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
		console.log(error);
	}
};

//CREATE PRODUCT
const createProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
		console.log(error);
	}
};

//update product
const updateProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
		console.log(error);
	}
};

//delete product
const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;
		await Product.findByIdAndDelete(id);
	} catch (error) {
		res.status(500).json({ message: error.message });
		console.log(error);
	}
};

module.exports = {
	getProduct,
	getSingleProduct,
	createProduct,
	updateProduct,
	deleteProduct,
};
