const express = require("express");
const app = express();
const morgan = require("morgan");
const dishesRoutes = require("./routes/dishes");
const leadersRoutes = require("./routes/leaders");
const promotionsRoutes = require("./routes/promotions");
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.use("/dishes", dishesRoutes);
app.use("/leaders", leadersRoutes);
app.use("/promotions", promotionsRoutes);

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to PORT : ${PORT}`));
