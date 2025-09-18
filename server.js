const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// Eventos
const eventos = [
    { id: 1, nome: "Zé Ramalho", local: "Parque de Exposições", endereco: "R. Rio Sena, 124 - Santo Antonio I, Pte. Nova - MG, 35430-195" },
    { id: 2, nome: "Stand-up Comedy", local: "Teatro Central", endereco: "Rua Alegre, 45" },
    { id: 3, nome: "Concerto Clássico", local: "Sala de Concertos", endereco: "Praça da Cultura, 10" }
];

// Tela 1: Listagem de eventos
app.get("/", (req, res) => {
    res.render("index", { eventos });
});

app.listen(PORT, () => console.log('Servidor rodando em http://localhost:3000'));
