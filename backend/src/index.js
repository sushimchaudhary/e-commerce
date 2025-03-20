const express = require('express')
const dbConnect = require('./db/connection')
const UserRoute = require("./routes/user")
const ProductRoute = require("./routes/product")
require('dotenv').config()
const app = express()


const cors = require('cors')

app.use(cors());
app.use(express.json())

dbConnect()
app.use(UserRoute);
app.use(ProductRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})