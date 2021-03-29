// Aluno:
//   Igor Pereira Vidal (201810244)

const express = require('express')
const mongoose = require('mongoose')

const tarefa_controller = require('./tarefas-controller')


mongoose.connect('mongodb+srv://usuario1:mdl67rmTcfZWhcle@cluster0.y7xzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
try{
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'erro de conexao no banco.'))
} catch (e) {
    console.log(e)
}

const router = express.Router()

const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})

router.post('/tarefas', tarefa_controller.cadastrarTarefa)
router.put('/tarefas/:id', tarefa_controller.alterarTarefa)
router.get('/tarefas', tarefa_controller.listarTarefas)
router.get('/tarefas/:id', tarefa_controller.buscarTarefa)
router.delete('/tarefas/:id', tarefa_controller.deletarTarefa)

app.use('/', router)

// Se houver uma variável de ambiente denominada "PORT", usa ela, caso contrário, usa a porta 3000
// Isso permite utilizar a porta que o Heroku definir.
let porta = process.env.PORT || 3000

app.listen(porta, () => {
    console.log("Servidor em execução na porta " + porta)
})