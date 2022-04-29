const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
});

const { login, createUser } = require("./controllers/users");

app.post("/signin", login);
app.post("/signup", createUser);

app.use((req, res, next) => {
  req.user = {
    _id: "625d543a10b001d1b9731f8a",
  };

  next();
});

app.use("/users", require("./routes/users"));
app.use("/cards", require("./routes/cards"));

app.all("*", (req, res) => {
  res.status(404).send({ message: "По указанному пути ничего нет" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
