const express = require("express");
const mongoose = require("mongoose");
const ejs = require('ejs');
const app = express();
const router = express.Router();
const Mailjet = require("node-mailjet");

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE,
);




//set view engine to EJS 
app.set("view engine", "ejs");

//middelware for access to public folder
app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

//route handler for / , sends back index.html
// app.get("/" , (req ,res) =>{
//   res.sendFile(__dirname + "/public/announcement.html")
// });

const menuRoute = require(__dirname + "/routes/menuRoute.js");

app.use("/menu", menuRoute);


const order = require(__dirname + "/routes/order.js");

app.use("/order", order);



router.get("/add", (req , res) =>{
  res.sendFile(path.join(__dirname, "..", "public", "html",  "/public/order.html")
)})


//mongoDB String
const mongoDBConnectionString = "mongodb+srv://SE12:CSH2024@cluster0.bfhqypo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDBConnectionString)
  .then(() => {
    console.log("MongoDB connection successful.");
  })
  .catch((err) => console.log("MongoDB connection error:", err));








app.get("/order/add", (req , res) =>{
  res.sendFile(__dirname + "/public/order.html")
})













app.listen(3000, () => {
  console.log("Server running on port 3000");
});
