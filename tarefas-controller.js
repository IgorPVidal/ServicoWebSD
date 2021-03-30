// Aluno:
//   Igor Pereira Vidal (201810244)

var Tarefas = require('./tarefas-model')

// Post ('./tarefas')
exports.cadastrarTarefa = function (req, res) {
    let tarefa = new Tarefas({
        descricao: req.body.descricao,
        prazo: req.body.prazo,
        completa: req.body.completa
    })
    tarefa.save(function (err){
        if (err) {
            res.status(406).send(err.message)
        } else {
            res.status(201).send('Tarefa cadastrada com sucesso!')
        }
    })
}

// Put ('./tarefas/:id')
exports.alterarTarefa = function (req, res) {
    Tarefas.findByIdAndUpdate(
        req.params.id,
        req.body,
        {useFindAndModify: false}, // Para remover o DeprecationWarning do Mongoose
        function (err, tarefa) {
            if (err) {
                res.status(406).send(err.message)
            } else if (tarefa == null) {
                res.status(404).send('Não existem Tarefas com o id indicado.')
            } else {
                res.status(201).send('Tarefa alterada com sucesso!')
            }
        } 
    )
}

// Get ('./tarefas')
exports.listarTarefas = function (req, res) {
    Tarefas.find({}, function (err, tarefas) {
        if (err) {
            res.status(404).send(err)
        } else if (tarefas.length == 0) {
            res.status(404).send('Nenhuma Tarefa encontrada.')
        } else {
            return res.status(200).json(tarefas);
        }
    })
}

// Get ('./tarefas/:id')
exports.buscarTarefa = function (req, res) {
    Tarefas.findById(req.params.id, function (err, tarefa) {
        if (err) {
            res.status(406).send(err.message)
        } else if (!tarefa) {
            res.status(404).send('Não existem Tarefas com o id indicado.')
        } else {
            if (tarefa.prazo != null) {
                console.log("Prazo convertido para o horário local: " + tarefa.prazo)
            } else {
                console.log("Tarefa consultada não apresenta prazo.")
            }
            return res.status(200).json(tarefa);
        }
    })
}

// Delete ('./tarefas/:id')
exports.deletarTarefa = function (req, res) {
    Tarefas.findByIdAndDelete(
        req.params.id,
        function (err) {
            if (err) {
                res.status(406).send(err.message)
            } else {
                res.status(204).send()
            }
        }
    )
}