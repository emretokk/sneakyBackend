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

const createUser = async (req, res) => {
  try {
    const values = [req.body.username, req.body.password];
    const { rows } = await pool.query(queries.createUser, values);
    return res.status(201).json({ createUser: rows[0] });
  } catch (error) {
    console.log("Error : ", error.message);
    return res.status(400).json({ message: error, message });
  }
};

const authUser = async (req, res) => {
  try {
    const values = [req.body.username, req.body.password];
    const { rows } = await pool.query(queries.authUser, values);
    if (!rows.length) {
      return res.status(400).json({ message: "denied" }); // invalid credentials
    }
    return res.status(200).json({ message: "ok" }); // authentication successfull
  } catch (error) {
    console.log("Error : ", error.message);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProductById,
  updateProductById,
  createUser,
  authUser,
};
