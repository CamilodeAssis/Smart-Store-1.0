const express = require("express");
const routes = require("./routes");
var cors = require("cors");
const path = require("path");

require("./database");

const app = express();

app.use('/files', express.static(path.resolve(__dirname, "public","upload")));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER,Content-Type, Authorization"
  );
 
  next();
});

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("Server is listening on http://localhost:3333");
});
