
const app = require("./src/app")
const PORTA = 8085

app.listen(PORTA, () => console.log(`Funcionando na porta ${PORTA}`))