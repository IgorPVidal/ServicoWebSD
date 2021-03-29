const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, World!!!!!!!!!!1')
})

// Se houver uma variável de ambiente denominada "PORT", usa ela, caso contrário, usa a porta 3000
// Isso permite utilizar a porta que o Heroku definir.
let porta = process.env.PORT || 3000

app.listen(porta, () => {
    console.log("Servidor em execução na porta " + porta)
})