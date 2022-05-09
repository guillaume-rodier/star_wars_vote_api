const express = require("express");
const app = express();
const people = require("./jsons/star_wars_people.json");
const thePeople = require("./jsons/star_wars_people_new_list.json");
const axios = require("axios");
const fs = require("fs");

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
  });

app.get("/people", (req,res) => {
  res.status(200).json(thePeople)
})

// function saveInFile(fileName, newList) {
//   fs.writeFileSync(fileName, JSON.stringify(newList, null, 4));
// }

// async function makeListStarWarsFromJson() {
//   let newList = [];
  
//   for (let i = 0; i < people.length; i ++) {
//     let planet = await axios.get(
//       people[i].homeworld
//     );

//     let newPerson = {
//       id: i,
//       name: people[i].name,
//       homeworld: planet.data.name,
//     }

//     console.log("----------------------------");
//     console.log("newPerson:", newPerson);

//     newList.push(newPerson);
//   }

//   saveInFile("./jsons/star_wars_people_new_list.json", newList);
// }

// app.get("/get_people", async (req,res) => {
//   makeListStarWarsFromJson();

//   res.status(200).json(people)
// })

app.listen(8080, () => {
  console.log("Serveur à l'écoute")
})
