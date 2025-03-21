const express = require('express');
const dbConnect = require('./db/connection');
const UserRoute = require("./routes/user");
const ProductRoute = require("./routes/product")
require('dotenv').config();

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

dbConnect();
app.use(UserRoute);
app.use(ProductRoute)

const port = process.env.PORT || 5000; // Define port properly

app.listen(port, () => {  // Fix incorrect arrow function
  console.log(`Server is running on port ${port}`);
});
