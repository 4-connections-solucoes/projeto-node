


import 'reflect-metadata';
import express from 'express';
const app = express();


import './database';
// get para busca
// post para salvar
// put para alterar 
// delete  para ddeletar
// path para alterar expecifica
app.get("/",(req, res) => {
//  primeiro parametro é a rota 
//  e o segundo paramentro é request(requisição) response(resposta)

    return res.json({"message": " olá pessoal"});
});
app.post("/", (req, res) => {
    // recebeu os dados para salvar e 
    // vai retornar a resposta para o cliente 
    return res.json({message: "Os dados foram salvos com sucesso"});



})


app.listen(3333, () => console.log("server is running"));
