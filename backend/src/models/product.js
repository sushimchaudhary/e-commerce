const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Home Decor", "Beauty", "Electronics", "Fashion", "Handicrafts"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 10, // Default stock count
    },
    image: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: String,
        rating: { type: Number, min: 1, max: 5 },
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product
