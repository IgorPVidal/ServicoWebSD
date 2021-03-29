// Aluno:
//   Igor Pereira Vidal (201810244)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TarefaSchema = new Schema({
    // id é gerado automaticamente pelo mongoDB
    descricao: {type: String, required: true},
    prazo: {type: Date, required: false},
    completa: {type: Boolean, required: false}
})

module.exports = mongoose.model('Tarefas', TarefaSchema)