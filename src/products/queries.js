const getProducts = "SELECT * FROM products ORDER BY id ASC";
const getProductsDesc = "SELECT * FROM products ORDER BY id DESC";
const getProductsByPrice = "SELECT * FROM products ORDER BY price ASC";
const getProductsByPriceDesc = "SELECT * FROM products ORDER BY price DESC";

const addProduct =
  "INSERT INTO products (title, category, price, oldprice, brand, model, image) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const getProductById = "SELECT * FROM products WHERE id = $1";
const deleteProductById = "DELETE FROM products WHERE id = $1";
const updateProductById = "UPDATE products SET title = $1 WHERE id = $2";

const createUser =
  "INSERT INTO users (username, password) VALUES ($1, crypt($2, gen_salt('bf'))) RETURNING *";
const authUser =
  "SELECT * FROM users WHERE username = $1 AND password = crypt($2, password)";
const getProductsByBrand = "SELECT * FROM products WHERE brand = $1";

module.exports = {
  getProducts,
  getProductsDesc,
  getProductsByPrice,
  getProductsByPriceDesc,
  getProductById,
  getProductsByBrand,
  addProduct,
  deleteProductById,
  updateProductById,
  createUser,
  authUser,
};
