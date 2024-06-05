const express = require("express") //iniciando o express
const router = express.Router() //criando a porta
const cors = require("cors") //trazendo o pacote cors que permite consumir essa API no front-end
const conectaDatabase = require("./database") //ligando ao arquivo database.js
conectaDatabase() //chamando a função que conecta o database

const Mulher = require("./mulherModel")

const app = express() //configurando a primeira parte da rota
app.use(express.json())
app.use(cors())

const porta = 3333 //iniciando o app

//GET
async function mostraMulheres(request, response) {
    try {
        const mulheresDatabase = await Mulher.find()
        response.json(mulheresDatabase)
    } catch(erro) {
        console.log(erro)
    }
    response.json()
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch(erro) {
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }

        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaDatabase = await mulherEncontrada.save()
        response.json(mulherAtualizadaDatabase)
    } catch(erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: "Mulher deletada com sucesso"})
    } catch(erro) {
        console.log(erro)
    }
}

//porta
app.listen(porta, mostraPorta) //servidor ouvindo a porta

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

//apps
app.use(router.get("/mulheres", mostraMulheres)) //configuração da rota GET /mulheres
app.use(router.post("/mulheres", criaMulher)) //configuração da rota POST /mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher)) //configuração da rota PATCH /mulheres/:id
app.use(router.delete("/mulheres/:id", deletaMulher)) //configuração da rota DELETE /mulheres/:id