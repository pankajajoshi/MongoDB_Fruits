require("dotenv").config();
const express = require("express");
const app = express();
const fruits = require("./models/fruits");
const vegetables = require("./models/vegetables");
const mongoose = require("mongoose");
const Fruit = require("./models/Fruit");
const Veggie = require("./models/Veggie");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// INDUCES

app.get("/", (req, res) => {
  res.send("<h1>Hello TO MongoDB TEAM !</h1>");
});

// Index
app.get("/fruits", (req, res) => {
  Fruit.find({})
    .then((allFruits) => {
      console.log(allFruits);
      res.render("fruits/Index", { fruits: allFruits });
    })
    .catch((error) => {
      console.error(error);
    });
});

// New
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

// Delete

// Update

// Create
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruit.create(req.body)
    .then((createdFruit) => {
      res.redirect("/fruits");
    })
    .catch((error) => {
      console.error(error);
    });
});

// Edit

// Show
app.get("/fruits/:id", (req, res) => {
  Fruit.findOne({ _id: req.params.id })
    .then((foundFruit) => {
      res.render("fruits/Show", {
        fruit: foundFruit,
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

//==================================================================

//vegetables

//Index
app.get("/vegetables", (req, res) => {
  Veggie.find({})
    .then((allVegetables) => {
      console.log(allVegetables);
      res.render("vegetables/Index", { vegetables: allVegetables });
    })
    .catch((error) => {
      console.error(error);
    });
});

// New
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

// Delete

// Update

// Create
app.post("/vegetables", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Veggie.create(req.body)
    .then((createdVeggie) => {
      res.redirect("/vegetables");
    })
    .catch((error) => {
      console.error(error);
    });
});

// Edit

// Show
app.get("/vegetables/:id", (req, res) => {
  Veggie.findOne({ _id: req.params.id })
    .then((foundVeggie) => {
      res.render("vegetables/Show", {
        Veggie: foundVeggie,
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
