var express = require('express');
let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + 'index.html')
})

app.listen("3200", ()=> {
    console.log("Servidor escutando na porta 3200")
})