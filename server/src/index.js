const express = require('express');
const dbConnect = require('./db/connection');
const UserRoute = require("./routes/user");
const ProductsRoute = require("./routes/products")
require('dotenv').config();

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

dbConnect();
app.use(UserRoute);
app.use(ProductsRoute)

const port = process.env.PORT  // Define port properly

app.listen(port, () => {  // Fix incorrect arrow function
  console.log(`Server is running on port ${port}`);
});
