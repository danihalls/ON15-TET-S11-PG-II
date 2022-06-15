
const escolinha = require("../models/escolinhaModel.json")


const todosAlunos = (request, response) => {
    response.status(200).json({
        "mensagem": "Esses são os alunos cadastrados em nossa escolinha do código:",
        escolinha
    })
}

module.exports = {
    todosAlunos
}
