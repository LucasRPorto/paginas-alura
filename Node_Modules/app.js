const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/Aula1_Alura/LojinhaLucas.html");
});