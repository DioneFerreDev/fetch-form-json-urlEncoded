const express = require("express");
const app = express();
const path = require("path");
const mainRounte = require("./routes/mainRounte");
const apiRoute = require("./routes/apiRouter");
const bcrypt = require("bcrypt");



// const salt = bcrypt.genSaltSync(14);

// // lembrar de gerar um id para inserir em cada carta do deck via class item
// const loki = require("lokijs");
// const db = new loki(path.join(__dirname, '/data/db.json'));
// var cards = db.addCollection('users');
// cards.insert({ name:"My User",password:bcrypt.hashSync("user999",salt) });
// db.save(err => {
//   if (err) console.log(err);
// });

// db.saveDatabase()




app.use(express.static(path.join(__dirname, "views/")));
app.use("/", mainRounte);
app.use("/api", apiRoute);



app.listen(3000, () => {
    console.log("rodando até aqui")
})