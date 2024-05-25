const { Router } = require("express");
const controller = require("./controller");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

// Get all products
router.get("/", controller.getProducts);
router.get("/descbyid", controller.getProductsDesc);
router.get("/ascbyprice", controller.getProductsByPrice);
router.get("/descbyprice", controller.getProductsByPriceDesc);
// Get products by brand
router.get("/ascbybrand/:brand", controller.getProductsByBrand);
router.get("/descbybrand/:brand", controller.getProductsByBrandDesc);
router.get("/ascbybrandbyprice/:brand", controller.getProductsByBrandWithPrice);
router.get(
  "/descbybrandbyprice/:brand",
  controller.getProductsByBrandWithPriceDesc
);
// Get products by category
router.get("/ascbycategory/:category", controller.getProductsByCategory);
router.get("/descbycategory/:category", controller.getProductsByCategoryDesc);
router.get(
  "/ascbycategorybyprice/:category",
  controller.getProductsByCategoryWithPrice
);
router.get(
  "/descbycategorybyprice/:category",
  controller.getProductsByCategoryWithPriceDesc
);

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
