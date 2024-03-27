const express = require('express')
const app = express();
const port = 3001
const db = require('./models')



const registerRouter = require('./Routes/Register')
app.use(express.json())
app.use("/register", registerRouter)




db.sequelize.sync().then(() =>{
    app.listen(port, () => console.log(`Servidor rodando na portaa ${port}`));
});