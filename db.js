const Pool = require("pg").Pool;
const CONFIG = require("./config.json");

const pool = new Pool({
  user: CONFIG.user,
  host: CONFIG.host,
  database: CONFIG.database,
  password: CONFIG.password,
  port: CONFIG.port,
});

module.exports = pool;
