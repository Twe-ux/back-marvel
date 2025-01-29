require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    return res.status(200).json("Bienvenue sur mon serveur Marvel !");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const characterRouter = require("./routes/characters");
app.use(characterRouter);

const comicsRouter = require("./routes/comics");
app.use(comicsRouter);

app.all("*", (req, res) => {
  return res.status(404).json("Page non trouvé");
});

app.listen(process.env.PORT, () => {
  console.log("🔥🔥 Server on fire 🔥🔥");
});
