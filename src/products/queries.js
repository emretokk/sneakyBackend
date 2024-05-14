const getProducts = "SELECT * FROM products ORDER BY id ASC";
const getProductById = "SELECT * FROM products WHERE id = $1";
const addProduct =
  "INSERT INTO products (title, category, price, oldprice, brand, model, image) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const deleteProductById = "DELETE FROM products WHERE id = $1";
const updateProductById = "UPDATE products SET title = $1 WHERE id = $2";
const createUser =
  "INSERT INTO users (username, password) VALUES ($1, crypt($2, gen_salt('bf'))) RETURNING *";
const authUser =
  "SELECT * FROM users WHERE username = $1 AND password = crypt($2, password)";

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProductById,
  updateProductById,
  createUser,
  authUser,
};
