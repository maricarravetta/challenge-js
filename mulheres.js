const express = require("express")
const app = express()
const porta = 3333
const router = express.Router()

const mulheres = [
    {
        nome: "Mariana Carravetta",
        imagem: "https://avatars.githubusercontent.com/u/129188651?v=4",
        minibio: "DevOps/ SRE Junior",
    },
    {
        nome: "Simara Conceição",
        imagem: "https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_200_200/0/1563116727332?e=1722470400&v=beta&t=aWhIsCbNa_sGIEjpOkkI4r_xoZ4_gZ-al90ypbgjexI",
        minibio: "Desenvolvedora e Instrutora"
    },
    {
        nome: "Iana Chan",
        imagem: "https://media.licdn.com/dms/image/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_200_200/0/1686007268307?e=1722470400&v=beta&t=vi4ZIx7gQJ0Hi2LvQzpsmLTepUTZmPgwqjoBSkU39mA",
        minibio: "Fundadora da PrograMaria"
    }
]

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

function mostraMulheres(request, response) {
    response.json(mulheres)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)