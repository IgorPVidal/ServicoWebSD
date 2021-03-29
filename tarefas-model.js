const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TarefaSchema = new Schema({
    id: {type: Number, required: true},
    descricao: {type: String, required: true},
    prazo: {type: Date, required: false},
    completa: {type: Boolean, required: false}
})

module.exports = mongoose.model('Tarefas', TarefaSchema)