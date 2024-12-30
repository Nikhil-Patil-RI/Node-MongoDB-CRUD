const Product = require("../models/product.model.js");

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product by ID
const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findOneProduct = async (req, res) => {
  try {
    console.log(req.params.name)
    const { name } = req.params; // Extract the name from URL parameters
    const product = await Product.findOne({ name }); // Query using the name
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateOneProduct = async (req, res) => {
  try {
    const { name } = req.params;
    const updates = req.body; 
    const result = await Product.updateOne({ name }, updates);
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "No product matched the provided name." });
    }
    res.status(200).json({ message: "Product updated successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateManyProducts = async (req, res) => {
  try {
    const { name } = req.params; // Extract name from the URL
    const updates = req.body; // Extract updates from the request body
    const result = await Product.updateMany({ name }, updates); // Update all products with the matching name
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "No products matched the provided name." });
    }
    res.status(200).json({
      message: `${result.matchedCount} product's updated successfully.`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
  findOneProduct,
  updateOneProduct,
  updateManyProducts,
};
