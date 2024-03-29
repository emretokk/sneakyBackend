const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = $1";
const addProduct =
  "INSERT INTO products (title, category, price, oldprice, brand, model) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteProductById = "DELETE FROM products WHERE id = $1";
const updateProductById = "UPDATE products SET title = $1 WHERE id = $2";

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProductById,
  updateProductById,
};
