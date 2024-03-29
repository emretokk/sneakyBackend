const express = require("express");
const sneakyRoutes = require("./src/products/routes");

const app = express();
const port = 4000;

app.use(express.json());

app.use("/api/sneaky", sneakyRoutes);

app.listen(port, () => console.log(`app listening on port: ${port}`));
