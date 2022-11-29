const express = require('express')
const app = express()

const fs = require('fs')

app.listen(3000, function(){
    console.log("O servidor está online")
}); 

let dados = []
function getDados(){
    dados = JSON.parse(fs.readFileSync('./db.json'))
}

app.get('/users', function(req, res){
    getDados()
    res.send(JSON.parse(dados))
});

// localhost:3000/users/2
app.get('/users/:id', function(req, res){
    getDados()
    const id = req.params.id
    const usuario = dados.filter(function(item){
        return item.id == id 
    })
    res.send(usuario)
});


