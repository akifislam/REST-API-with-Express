const express = require("express");
const router = express.Router();
router.use(express.json());

const promotions = [
  {
    id: 1,
    discount: "10%",
    description: "Buy 10 Samucha and get 2 Coke for FREE !",
  },
  {
    id: 2,
    discount: "20%",
    description: "Buy 1 Get 1 FREE on 10 inch Pizza !",
  },
  {
    id: 3,
    discount: "50%",
    description:
      "If Liton Das got century on today's match, get Buy 1 Get 1 on every item.",
  },
];

router.get("/", (req, res) => {
  res.send(promotions);
});

router.get("/:id", (req, res) => {
  const promotion = promotions.find((p) => p.id === parseInt(req.params.id));
  if (promotion) {
    res.send(promotion);
  } else {
    // console.log(promotion);
    res.status(404).send("promotion not found");
  }
});

router.post("/", (req, res) => {
  const newpromotion = {
    id: promotions.length + 1,
    name: req.body.name,
  };
  if (newpromotion.name.length < 4) {
    res.status(400).send("Name must be at least 3 characters");
  } else {
    promotions.push(newpromotion);
    res.send(newpromotion);
  }
});

router.put("/:id", (req, res) => {
  const promotion = promotions.find((d) => d.id === parseInt(req.params.id));
  if (!promotion) {
    res.status(404).send("promotion not found");
    return;
  }
  promotion.name = req.body.name;
  res.send(promotion);
});

router.delete("/:id", (req, res) => {
  const promotion = promotions.find((d) => d.id === parseInt(req.params.id));
  if (!promotion) {
    res.status(404).send("promotion not found");
    return;
  }
  const index = promotions.indexOf(promotion);
  promotions.splice(index, 1);
  res.send(promotion);
});

module.exports = router;
