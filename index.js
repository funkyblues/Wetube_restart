import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile.");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);