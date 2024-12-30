const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
  findOneProduct,
  updateOneProduct,
  updateManyProducts,
} = require("../controller/product.controller.js");

router.get("/getAllProducts", getAllProducts);
router.get("/getProductById/:id", getProductById);
router.post("/create", createProduct);
router.put("/updateProductById/:id", updateProductById);
router.delete("/deleteProductById/:id", deleteProductById);

router.get("/findOne/:name", findOneProduct);
router.put("/updateOne/:name", updateOneProduct);
router.put("/updateMany/:name", updateManyProducts);

module.exports = router;
