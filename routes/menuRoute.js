const express = require("express");
const router = express.Router();
const ejs = require("ejs");
const mongoose = require("mongoose");

// Schema and model for Menu
const menuSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number},
  quantity: { type : Number},
  spicelevel: { type : String },
  calories : { type : Number },
  type: { type: String },
  image : { type : String }
});

const Menu = mongoose.model("Menu", menuSchema);

router.get("/", (req, res) => {
  console.log("Getting menu")
  Menu.find({}).then((data) => {
    res.render("menu.ejs", {data: data});
  })
});


router.get("/admin", (req, res) => {
  console.log("Getting menu")
  Menu.find({}).then((data) => {
    res.render("adminmenu.ejs", {data: data});
  })
});






router.post("/", (req, res) => {
  const menu = new Menu({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    spicelevel : req.body.spicelevel,
    calories : req.body.calories,
    type : req.body.type,
    image: req.body.image
  });
  menu.save().then((menu) => res.json(menu));
});

router.get("/add", (req, res) => {
 Menu.find({})
   .then((data) => {
     res.render("menu.ejs", {data:data});
   });
});

router.patch('/admin/:id', (req, res)=>{
  const filter = { _id: req.params.id}
  const update = { price : req.body.price }


Menu.findOneAndUpdate(filter ,update, { new : true })
  .then((updatedAdmin) =>{
  console.log(updatedAdmin)
  res.json(updatedAdmin)
  }) 
})




// router.get("/:index" , (req, res) =>{
//   const i = req.params.index;
//   const data ={
//     title: "Menu",
//     item: menuList[i],
//   };
//   res.render("menuRoute.ejs", data);
// })



module.exports = router;

