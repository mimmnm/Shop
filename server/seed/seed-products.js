/**
 * Simple seed script to insert products into MongoDB.
 * Usage:
 *   1) Create server/.env with MONGO_URI
 *   2) Run: node server/seed/seed-products.js
 */
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/../.env" });
const Product = require("../models/Product");

const sample = [
  {
    image: "https://via.placeholder.com/600x600.png",
    title: "Sample Product 1",
    description: "Short description",
    category: "Category A",
    brand: "Brand X",
    price: 100,
    salePrice: 90,
    totalStock: 20,
    averageReview: 4.5,
  },
  {
    image: "https://via.placeholder.com/600x600.png",
    title: "Sample Product 2",
    description: "Short description",
    category: "Category B",
    brand: "Brand Y",
    price: 150,
    salePrice: 0,
    totalStock: 15,
    averageReview: 0,
  },
];

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    await Product.deleteMany({});
    await Product.insertMany(sample);
    console.log("Seeded products:", sample.length);
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();
