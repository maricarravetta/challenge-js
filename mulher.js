const express = require("express")
const app = express()
const porta = 3333
const router = express.Router()

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

function mostraMulher(request, response) {
    response.json({
        nome: "Mariana Carravetta",
        imagem: "https://avatars.githubusercontent.com/u/129188651?v=4",
        minibio: "DevOps/ SRE Junior"
    })
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)