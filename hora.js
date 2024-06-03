const express = require("express")
const app = express()
const porta = 3333
const router = express.Router()

const data = new Date()
const hora = data.toLocaleTimeString("pt-BR")

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

function mostraHora(request, response) {
    response.send(hora)
}

app.use(router.get("/hora", mostraHora))
app.listen(porta, mostraPorta)