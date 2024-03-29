const pool = require("../../db.js");
const queries = require("./queries.js");

const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addProduct = (req, res) => {
  const { title, category, price, oldprice, brand, model } = req.body;
  pool.query(
    queries.addProduct,
    [title, category, price, oldprice, brand, model],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Product added successfully");
      console.log("Product added successfully");
    }
  );
};

const deleteProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) => {
    const noProductFound = !results.rows.length;
    if (noProductFound) {
      res.send("Product does not exist in the database");
    }
    pool.query(queries.deleteProductById, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Product deleted successfully");
    });
  });
};

const updateProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;
  pool.query(queries.getProductById, [id], (error, results) => {
    const noProductFound = !results.rows.length;
    if (noProductFound) {
      res.send("Product does not exist in the database");
    }
    pool.query(queries.updateProductById, [title, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Product updated successfully");
    });
  });
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProductById,
  updateProductById,
};
