const { Router } = require("express");
const controller = require("./controller");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

// Get products with ascending order
router.get("/", controller.getProducts);
// Get products by id with descending order
router.get("/descbyid", controller.getProductsDesc);
// Get products by price with ascending order
router.get("/ascbyprice", controller.getProductsByPrice);
// Get products by price with descending order
router.get("/descbyprice", controller.getProductsByPriceDesc);
// Add product
router.post("/", upload.single("productImg"), controller.addProduct);

router.get("/:id", controller.getProductById);
router.delete("/:id", controller.deleteProductById);
router.put("/:id", controller.updateProductById);

// Create user
router.post("/createUser", controller.createUser);
// Auth user
router.post("/authUser", controller.authUser);

module.exports = router;
