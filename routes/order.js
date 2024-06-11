const express = require("express");
const router = express.Router();
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const { appendFile } = require("fs");
const Mailjet = require("node-mailjet");

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE,
);

router.get("/admin", (req, res) => {
  Order.find({}).then((data) => {
    res.render("order.ejs", { data: data });
  });
});

// Create a menu

// Schema and model for Orders
const orderSchema = new mongoose.Schema({
  date: { type: Date },
  email: { type: String },
  drink: { type: String },
  side: { type: String },

  meat: { type: String },
  name: { type: String },
  dessert: { type: String },
});

const Order = mongoose.model("Order", orderSchema);

// Create a  Order
router.post("/", (req, res) => {
  const order = new Order({
    date: req.body.date,
    email: req.body.email,
    drink: req.body.drink,
    name: req.body.name,
    side: req.body.side,
    meat: req.body.meat,
    dessert: req.body.dessert,
  });
  order.save().then(() => {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "shannakay.isaacs24@compscihigh.org",
            Name: "The Den",
          },
          To: [
            {
              Email: req.body.email,
              Name: req.body.name,
            },
          ],
          Subject: "Order Conformation",
          TemplateID: 6019372,
          TemplateLanguage: true,
          Subject: "Thank You",
          Variables: {
          },
        },
      ],
    });

    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.log(err.statusCode);
      });
    res.redirect("/order/add");
  });
});

router.delete("/:id", (req, res) => {
  const filter = { _id: req.params.id };

  Order.findOneAndDelete(filter)
    .then((deletedOrder) => {
      res.json(deletedOrder);
    })
    .catch((err) => {
      console.error("Error deleting item:", err);
      res.status(500).sendFile(__dirname + "/public/order.html");
    });
});

module.exports = router;
