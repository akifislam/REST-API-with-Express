const express = require("express");
const router = express.Router();
router.use(express.json());

const menuCard = [
  { id: 1, name: "Singara", price: 5 },
  { id: 2, name: "Burger", price: 25 },
  { id: 3, name: "Coke", price: 30 },
  { id: 4, name: "Fries", price: 30 },
  { id: 5, name: "Samucha", price: 7 },
  { id: 6, name: "Cake", price: 50 },
  { id: 7, name: "Coffee", price: 20 },
  { id: 8, name: "Tea", price: 5 },
  { id: 9, name: "Sandwich", price: 35 },
  { id: 10, name: "Noodles", price: 30 },
  { id: 11, name: "Kalabhuna", price: 80 },
  { id: 12, name: "Moglai", price: 50 },
];

router.get("/", (req, res) => {
  res.send(menuCard);
});

router.get("/:id", (req, res) => {
  const dish = menuCard.find((d) => d.id === parseInt(req.params.id));
  if (dish) {
    res.send(dish);
  } else {
    // console.log(dish);
    res.status(404).send("Dish not found");
  }
});

router.post("/", (req, res) => {
  const newDish = {
    id: menuCard.length + 1,
    name: req.body.name,
  };
  if (newDish.name.length < 4) {
    res.status(400).send("Name must be at least 3 characters");
  } else {
    menuCard.push(newDish);
    res.send(newDish);
  }
});

router.put("/:id", (req, res) => {
  const dish = menuCard.find((d) => d.id === parseInt(req.params.id));
  if (!dish) {
    res.status(404).send("Dish not found");
    return;
  }
  dish.name = req.body.name;
  res.send(dish);
});

router.delete("/:id", (req, res) => {
  const dish = menuCard.find((d) => d.id === parseInt(req.params.id));
  if (!dish) {
    res.status(404).send("Dish not found");
    return;
  }
  const index = menuCard.indexOf(dish);
  menuCard.splice(index, 1);
  res.send(dish);
});

module.exports = router;
