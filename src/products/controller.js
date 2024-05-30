const pool = require("../../db.js");
const queries = require("./queries.js");

const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductsDesc = (req, res) => {
  pool.query(queries.getProductsDesc, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductsByPrice = (req, res) => {
  pool.query(queries.getProductsByPrice, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getProductsByPriceDesc = (req, res) => {
  pool.query(queries.getProductsByPriceDesc, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductsByBrand = (req, res) => {
  const brand = req.params.brand;
  pool.query(queries.getProductsByBrand, [brand], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getProductsByBrandDesc = (req, res) => {
  const brand = req.params.brand;
  pool.query(queries.getProductsByBrandDesc, [brand], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getProductsByBrandWithPrice = (req, res) => {
  const brand = req.params.brand;
  pool.query(queries.getProductsByBrandWithPrice, [brand], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getProductsByBrandWithPriceDesc = (req, res) => {
  const brand = req.params.brand;
  pool.query(
    queries.getProductsByBrandWithPriceDesc,
    [brand],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getProductsByCategory = (req, res) => {
  const category = req.params.category;
  pool.query(queries.getProductsByCategory, [category], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductsByCategoryDesc = (req, res) => {
  const category = req.params.category;
  pool.query(
    queries.getProductsByCategoryDesc,
    [category],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getProductsByCategoryWithPrice = (req, res) => {
  const category = req.params.category;
  pool.query(
    queries.getProductsByCategoryWithPrice,
    [category],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getProductsByCategoryWithPriceDesc = (req, res) => {
  const category = req.params.category;
  pool.query(
    queries.getProductsByCategoryWithPriceDesc,
    [category],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getProductsBySearch = (req, res) => {
  const title = req.params.title;
  pool.query(queries.getProductsBySearch, [title], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addProduct = (req, res) => {
  let { title, category, price, oldprice, brand, model } = req.body;
  console.log(req.body);
  if (oldprice == "undefined") {
    oldprice = null;
  }
  const image = req.file.buffer;
  pool.query(
    queries.addProduct,
    [title, category, price, oldprice, brand, model, image],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Product added successfully");
      console.log("Product added successfully");
    }
  );
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getbrands = (req, res) => {
  pool.query(queries.getbrands, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getcategories = (req, res) => {
  pool.query(queries.getcategories, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addcategory = (req, res) => {
  const categoryname = req.params.categoryname;
  pool.query(queries.addcategory, [categoryname], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCategoryById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getCategoryById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const delcategory = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getCategoryById, [id], (error, results) => {
    if (error) {
      // Hata durumunda istenilen mesajı döndür ve fonksiyonu burada sonlandır
      return res
        .status(500)
        .send("An error occurred while retrieving product information");
    }

    const noProductFound = !results.rows.length;
    if (noProductFound) {
      return res.status(404).send("Product does not exist in the database");
    }

    // Ürün bulunduysa, silme işlemini gerçekleştir
    pool.query(queries.delcategory, [id], (error, results) => {
      if (error) {
        // Hata durumunda istenilen mesajı döndür
        return res
          .status(500)
          .send("An error occurred while deleting the product");
      }
      // Başarılı yanıt
      res.status(200).send("Product deleted successfully");
    });
  });
};

const addbrand = (req, res) => {
  const brandname = req.params.brandname;
  pool.query(queries.addbrand, [brandname], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getBrandById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getBrandById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const delbrand = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getBrandById, [id], (error, results) => {
    if (error) {
      // Hata durumunda istenilen mesajı döndür ve fonksiyonu burada sonlandır
      return res
        .status(500)
        .send("An error occurred while retrieving product information");
    }

    const noProductFound = !results.rows.length;
    if (noProductFound) {
      return res.status(404).send("Product does not exist in the database");
    }

    // Ürün bulunduysa, silme işlemini gerçekleştir
    pool.query(queries.delbrand, [id], (error, results) => {
      if (error) {
        // Hata durumunda istenilen mesajı döndür
        return res
          .status(500)
          .send("An error occurred while deleting the product");
      }
      // Başarılı yanıt
      res.status(200).send("Product deleted successfully");
    });
  });
};

const deleteProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) => {
    if (error) {
      // Hata durumunda istenilen mesajı döndür ve fonksiyonu burada sonlandır
      return res
        .status(500)
        .send("An error occurred while retrieving product information");
    }

    const noProductFound = !results.rows.length;
    if (noProductFound) {
      return res.status(404).send("Product does not exist in the database");
    }

    // Ürün bulunduysa, silme işlemini gerçekleştir
    pool.query(queries.deleteProductById, [id], (error, results) => {
      if (error) {
        // Hata durumunda istenilen mesajı döndür
        return res
          .status(500)
          .send("An error occurred while deleting the product");
      }
      // Başarılı yanıt
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
  deleteProductById,
  updateProductById,
  createUser,
  authUser,
};
