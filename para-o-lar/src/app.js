
const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())

app.use(cors())


const alunosRota = require("./routes/escolinhaRoutes")

app.use("/alunos", alunosRota)



module.exports = app