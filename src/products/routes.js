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
// Get products by search
router.get("/searchproduct/:title", controller.getProductsBySearch);

// Get brands
router.get("/getbrands", controller.getbrands);
// Get brand by id
router.get("/getbrand/:id", controller.getBrandById);
// Del brand
router.delete("/delbrand/:id", controller.delbrand);
// Add brand
router.post("/addbrand/:brandname", controller.addbrand);

// Get categories
router.get("/getcategories", controller.getcategories);
// Get category by id
router.get("/getcategory/:id", controller.getCategoryById);
// Del category
router.delete("/delcategory/:id", controller.delcategory);
// Add category
router.post("/addcategory/:categoryname", controller.addcategory);

// Get stocks
router.get("/getstocks", controller.getstocks);
// Get stock by id
router.get("/getstocks/:id", controller.getstocksbyid);
// Add stock
router.post("/addstock", upload.single(), controller.addstock);

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
