// users tablosu

const createUser =
  "INSERT INTO users (username, password) VALUES ($1, crypt($2, gen_salt('bf'))) RETURNING *";
const authUser =
  "SELECT * FROM users WHERE username = $1 AND password = crypt($2, password)";

// products tablosu

const addProduct =
  "INSERT INTO products (title, category, price, oldprice, brand, model, image) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const getProductById = "SELECT * FROM products WHERE id = $1";
const deleteProductById = "DELETE FROM products WHERE id = $1";
const updateProductById = "UPDATE products SET title = $1 WHERE id = $2";
// GET ALL PRODUCTS
const getProducts = "SELECT * FROM products ORDER BY id ASC";
const getProductsDesc = "SELECT * FROM products ORDER BY id DESC";
const getProductsByPrice = "SELECT * FROM products ORDER BY price ASC";
const getProductsByPriceDesc = "SELECT * FROM products ORDER BY price DESC";
// GET PRODUCTS BY BRAND
const getProductsByBrand =
  "select * from products where brand = $1 order by id asc";
const getProductsByBrandDesc =
  "select * from products where brand = $1 order by id desc";
const getProductsByBrandWithPrice =
  "select * from products where brand = $1 order by price asc";
const getProductsByBrandWithPriceDesc =
  "select * from products where brand = $1 order by price desc";
// GET PRODUCTS BY CATEGORY
const getProductsByCategory =
  "select * from products where category = $1 order by id asc";
const getProductsByCategoryDesc =
  "select * from products where category = $1 order by id desc";
const getProductsByCategoryWithPrice =
  "select * from products where category = $1 order by price asc";
const getProductsByCategoryWithPriceDesc =
  "select * from products where category = $1 order by price desc";
const getProductsBySearch = "select * from products where title ~* $1";

// brands tablosu
const getbrands = "select * from brands";
const getBrandById = "select * from brands where id = $1";
const delbrand = "DELETE FROM brands WHERE id = $1";
const addbrand = "insert into brands (brandname) values ($1);";

// categories tablosu
const getcategories = "select * from categories";
const getCategoryById = "select * from categories where id = $1";
const delcategory = "DELETE FROM categories WHERE id = $1";
const addcategory = "insert into categories (categoryname) values ($1);";

// stocks tablosu
const getstocks = "select * from stocks order by id asc";
const getstocksbyid = "select * from stocks where id = $1";
const getstockno40byid = "select no40 from stocks where id = $1";
const getstockno41byid = "select no41 from stocks where id = $1";
const getstockno42byid = "select no42 from stocks where id = $1";
const getstockno43byid = "select no43 from stocks where id = $1";
const getstockno44byid = "select no44 from stocks where id = $1";
const getstockno45byid = "select no45 from stocks where id = $1";

const addstockno40 =
  "INSERT INTO stocks (id, no40) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET no40 = $2;";
const addstockno41 =
  "INSERT INTO stocks (id, no41) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET no41 = $2;";
const addstockno42 =
  "INSERT INTO stocks (id, no42) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET no42 = $2;";
const addstockno43 =
  "INSERT INTO stocks (id, no43) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET no43 = $2;";
const addstockno44 =
  "INSERT INTO stocks (id, no44) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET no44 = $2;";
const addstockno45 =
  "INSERT INTO stocks (id, no45) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET no45 = $2;";

const updateProduct =
  "UPDATE products SET title = $1, category = $2, price = $3, oldprice = $4, brand = $5, model = $6 WHERE id = $7";

module.exports = {
  getstocks,
  getstocksbyid,
  getstockno40byid,
  getstockno41byid,
  getstockno42byid,
  getstockno43byid,
  getstockno44byid,
  getstockno45byid,
  addstockno40,
  addstockno41,
  addstockno42,
  addstockno43,
  addstockno44,
  addstockno45,
  getProducts,
  getProductsDesc,
  getProductsByPrice,
  getProductsByPriceDesc,
  getProductById,
  getProductsByBrand,
  getProductsByBrandDesc,
  getProductsByBrandWithPrice,
  getProductsByBrandWithPriceDesc,
  getProductsByCategory,
  getProductsByCategoryDesc,
  getProductsByCategoryWithPrice,
  getProductsByCategoryWithPriceDesc,
  getProductsBySearch,
  getbrands,
  getcategories,
  getCategoryById,
  delcategory,
  addcategory,
  getBrandById,
  delbrand,
  addbrand,
  addProduct,
  updateProduct,
  deleteProductById,
  updateProductById,
  createUser,
  authUser,
};
