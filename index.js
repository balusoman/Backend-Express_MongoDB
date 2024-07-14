const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/products.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose.connect('mongodb+srv://balu:ZrpnlHo77a3Cxaf6@backenddb.8d5xwtt.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 30000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });