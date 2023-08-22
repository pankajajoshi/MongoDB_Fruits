const mongoose = require("mongoose");

const veggieSchema = new mongoose.Schema({
  // creates a new schema called VeggieSchema
  name: { type: String, required: true },
  // name has a data type of String and is required
  color: { type: String, required: true },
  readyToEat: { type: Boolean },
  // readyToEat has a data type of Boolean and is not required
  username: { type: String },
});

const Veggie = mongoose.model("Veggie", veggieSchema);

module.exports = Veggie;
