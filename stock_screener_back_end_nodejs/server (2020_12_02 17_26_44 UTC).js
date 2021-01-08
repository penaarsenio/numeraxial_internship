const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//To make sure our link is encrypted
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

//fetching the link from the env file
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database Conenction Established Sucessfully");
});

//This allows us to use the route we created
const fetchCompaniesRouter = require("./routes/getData");
const companyDetailsRouter = require("./routes/companyDetails");

//Now we are adding that route using express
app.use("/companies", fetchCompaniesRouter);
app.use("/companyDetails", companyDetailsRouter);

//Starts the server
app.listen(port, () => {
  console.log("Server is running on port: ${port}");
});
