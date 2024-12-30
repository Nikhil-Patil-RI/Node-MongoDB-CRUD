const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated...");
});

mongoose
  .connect(
    "mongodb+srv://npatil:63nO0sOQLk8gfnPz@backenddb.hpm2c.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database..");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed...");
  });
