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

const getstocks = (req, res) => {
  pool.query(queries.getstocks, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getstocksbyid = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getstocksbyid, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const removestock = (req, res) => {
  let { no, id, count } = req.body;
  id = parseInt(id);
  count = parseInt(count);

  let curCount = 0;
  let queryno = "no" + no;

  switch (queryno) {
    case "no40":
      pool.query(queries.getstockno40byid, [id], (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).json({ message: error, message });
        }
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no40;
        }
        let val = curCount - count;
        if (!(val >= 0)) {
          val = 0;
        }
        pool.query(queries.addstockno40, [id, val], (error, results) => {
          if (error) console.log("ürün bulunamadı");
          // Başarılı yanıt
          res.status(200).send("stock removed successfully");
        });
      });
      break;

    case "no41":
      pool.query(queries.getstockno41byid, [id], (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).json({ message: error, message });
        }
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no41;
        }
        let val = curCount - count;
        if (!(val >= 0)) {
          val = 0;
        }
        pool.query(queries.addstockno41, [id, val], (error, results) => {
          if (error) console.log("ürün bulunamadı");
          // Başarılı yanıt
          res.status(200).send("stock removed successfully");
        });
      });
      break;

    case "no42":
      pool.query(queries.getstockno42byid, [id], (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).json({ message: error, message });
        }
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no42;
        }
        let val = curCount - count;
        if (!(val >= 0)) {
          val = 0;
        }
        pool.query(queries.addstockno42, [id, val], (error, results) => {
          if (error) console.log("ürün bulunamadı");
          // Başarılı yanıt
          res.status(200).send("stock removed successfully");
        });
      });
      break;

    case "no43":
      pool.query(queries.getstockno43byid, [id], (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).json({ message: error, message });
        }
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no43;
        }
        let val = curCount - count;
        if (!(val >= 0)) {
          val = 0;
        }
        pool.query(queries.addstockno43, [id, val], (error, results) => {
          if (error) console.log("ürün bulunamadı");
          // Başarılı yanıt
          res.status(200).send("stock removed successfully");
        });
      });
      break;

    case "no44":
      pool.query(queries.getstockno44byid, [id], (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).json({ message: error, message });
        }
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no44;
        }
        let val = curCount - count;
        if (!(val >= 0)) {
          val = 0;
        }
        pool.query(queries.addstockno44, [id, val], (error, results) => {
          if (error) console.log("ürün bulunamadı");
          // Başarılı yanıt
          res.status(200).send("stock removed successfully");
        });
      });
      break;

    case "no45":
      pool.query(queries.getstockno45byid, [id], (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).json({ message: error, message });
        }
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no45;
        }
        let val = curCount - count;
        if (!(val >= 0)) {
          val = 0;
        }
        pool.query(queries.addstockno45, [id, val], (error, results) => {
          if (error) console.log("ürün bulunamadı");
          // Başarılı yanıt
          res.status(200).send("stock removed successfully");
        });
      });
      break;

    default:
      break;
  }
};

const addstock = (req, res) => {
  let { no, id, count } = req.body;
  id = parseInt(id);
  count = parseInt(count);

  let curCount = 0;
  let queryno = "no" + no;
  switch (queryno) {
    case "no40":
      pool.query(queries.getstockno40byid, [id], (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).json({ message: error, message });
        }
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no40;
        }
        pool.query(
          queries.addstockno40,
          [id, count + curCount],
          (error, results) => {
            if (error) console.log("ürün bulunamadı");
            // Başarılı yanıt
            res.status(200).send("stock added successfully");
          }
        );
      });
      break;
    case "no41":
      pool.query(queries.getstockno41byid, [id], (error, results) => {
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no41;
        }
        pool.query(
          queries.addstockno41,
          [id, count + curCount],
          (error, results) => {
            if (error) throw error;
            // Başarılı yanıt
            res.status(200).send("stock added successfully");
          }
        );
      });
      break;
    case "no42":
      pool.query(queries.getstockno42byid, [id], (error, results) => {
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no42;
        }
        pool.query(
          queries.addstockno42,
          [id, count + curCount],
          (error, results) => {
            if (error) throw error;
            // Başarılı yanıt
            res.status(200).send("stock added successfully");
          }
        );
      });
      break;
    case "no43":
      pool.query(queries.getstockno43byid, [id], (error, results) => {
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no43;
        }
        pool.query(
          queries.addstockno43,
          [id, count + curCount],
          (error, results) => {
            if (error) throw error;
            // Başarılı yanıt
            res.status(200).send("stock added successfully");
          }
        );
      });
      break;
    case "no44":
      pool.query(queries.getstockno44byid, [id], (error, results) => {
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no44;
        }
        pool.query(
          queries.addstockno44,
          [id, count + curCount],
          (error, results) => {
            if (error) throw error;
            // Başarılı yanıt
            res.status(200).send("stock added successfully");
          }
        );
      });
      break;
    case "no45":
      pool.query(queries.getstockno45byid, [id], (error, results) => {
        if (results.rows.length) {
          // update curcount if exist a stock
          curCount = results.rows[0].no45;
        }
        pool.query(
          queries.addstockno45,
          [id, count + curCount],
          (error, results) => {
            if (error) throw error;
            // Başarılı yanıt
            res.status(200).send("stock added successfully");
          }
        );
      });
      break;
    default:
      break;
  }
};

module.exports = {
  getstocks,
  getstocksbyid,
  addstock,
  removestock,
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
