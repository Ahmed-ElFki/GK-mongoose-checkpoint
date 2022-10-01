const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const Person = require("./person");

mongoose.connect("mongodb://localhost:27017/PersonDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const firstPerson = new Person({
  name: "Fares",
  age: 26,
  favoriteFoods: ["Sushi"],
});

firstPerson.save(function (err, data) {
  console.log("Errors : " + err + "\n" + "Data : " + data);
});

Person.create(
  { name: "Saif", age: 15, favoriteFoods: ["Pasta", "Burritos"] },
  { name: "Sarra", age: 40, favoriteFoods: ["Burger King", "Burritos"] },
  { name: "Rim", age: 4, favoriteFoods: ["Fries"] },
  { name: "Sami", age: 3, favoriteFoods: ["Chocolate"] },
  { name: "Sarra", age: 26, favoriteFoods: ["Chicken wings"] }
);

Person.find({ name: "Sarra" }).then((p) => console.log("Found: " + p));

Person.findOne({ favoriteFoods: ["Chocolate"] }).then((p) =>
  console.log("Found : " + p)
);

Person.findById("632f00c1e3c16549f4161b3b").then((p) => console.log(p));

Person.findByIdAndRemove("632f00c1e3c16549f4161b3b");

Person.findOneAndUpdate({ name: "Saif" }, { age: 20 });

Person.deleteOne({ name: "Rim" });
