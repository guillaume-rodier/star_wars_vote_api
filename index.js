const express = require("express");
const app = express();
const parkings = require("./jsons/star_wars_people.json");

app.get("/people", (req,res) => {
  res.send("Liste des personnages de star wars")
})

app.post("/parkings", (req,res) => {
  parkings.push(req.body)
  res.status(200).json(parkings)
})

app.listen(8080, () => {
  console.log("Serveur à l'écoute")
})
