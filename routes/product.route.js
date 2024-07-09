const express = require("express");
const Product = require("../models/product.model.js");
const {
	getProduct,
	getSingleProduct,
	createProduct,
	updateProduct,
	deleteProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/", getProduct);
router.get("/:id", getSingleProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
