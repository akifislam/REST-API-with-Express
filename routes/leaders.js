const express = require("express");
const router = express.Router();
router.use(express.json());

const leaders = [
  { id: 1, name: "Sagor", age: "25" },
  { id: 2, name: "Farjana", age: "14" },
  { id: 3, name: "Sakib", age: "30" },
  { id: 4, name: "Adrita", age: "20" },
  { id: 5, name: "Kamol", age: "21" },
  { id: 6, name: "Ankar", age: "90" },
];

router.get("/", (req, res) => {
  res.send(leaders);
});

router.get("/:id", (req, res) => {
  const leader = leaders.find((l) => l.id === parseInt(req.params.id));
  if (leader) {
    res.send(leader);
  } else {
    // console.log(leader);
    res.status(404).send("leader not found");
  }
});

router.post("/", (req, res) => {
  const newleader = {
    id: leaders.length + 1,
    name: req.body.name,
  };
  if (newleader.name.length < 4) {
    res.status(400).send("Name must be at least 3 characters");
  } else {
    leaders.push(newleader);
    res.send(newleader);
  }
});

router.put("/:id", (req, res) => {
  const leader = leaders.find((d) => d.id === parseInt(req.params.id));
  if (!leader) {
    res.status(404).send("leader not found");
    return;
  }
  leader.name = req.body.name;
  res.send(leader);
});

router.delete("/:id", (req, res) => {
  const leader = leaders.find((d) => d.id === parseInt(req.params.id));
  if (!leader) {
    res.status(404).send("leader not found");
    return;
  }
  const index = leaders.indexOf(leader);
  leaders.splice(index, 1);
  res.send(leader);
});

module.exports = router;
