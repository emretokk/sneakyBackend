const { Router } = require("express");
const controller = require("./controller");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

// Get products
router.get("/", controller.getProducts);
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
