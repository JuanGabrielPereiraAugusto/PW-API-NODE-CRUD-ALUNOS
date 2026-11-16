const express = require("express");
const mysql = require("mysql2");

const server = express();

server.use(express.json());

const bd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "FACULDADE"
});

bd.connect((err) => {
    if(err) {
        console.log("Erro ao conectar ao banco: ", err);
        return;
    }
    console.log("Conectado ao MySQL!");
});

server.get("/", (req, res) => {
    res.send("API funcionando PW 3sem tarde!");
});

// LISTAR todos os alunos
server.get("/alunos", (req, res) => {
    const sql = "SELECT * FROM ALUNOS";
    bd.query(sql, (err, result) => {
        if(err)
            return res.status(500).send("Erro ao consultar alunos!");

        // uma única resposta (antes havia res.json() e res.send() juntos, o que gera erro)
        res.status(200).json(result);
    });
});

// CADASTRAR um aluno
server.post("/alunos", (req,res) => {
    const {nome, idade, email} = req.body;

    // a tabela exige NOME, IDADE e EMAIL (todos NOT NULL)
    if(!nome || idade === undefined || !email)
        return res.status(400).send("Informe nome, idade e email!");

    const sql = "INSERT INTO ALUNOS (NOME, IDADE, EMAIL) VALUES (?, ?, ?)";
    bd.query(sql, [nome, idade, email], (err, result) => {
        if(err)
            return res.status(500).send("Erro ao inserir aluno!");

        res.status(201).send("Aluno cadastrado com sucesso!");
    });
});

// ATUALIZAR um aluno pelo código
server.put("/alunos/:codigo", (req, res) => {
    const {codigo} = req.params;
    const {nome, idade, email} = req.body;

    if(!nome || idade === undefined || !email)
        return res.status(400).send("Informe nome, idade e email!");

    const sql = "UPDATE ALUNOS SET NOME = ?, IDADE = ?, EMAIL = ? WHERE CODIGO = ?";

    bd.query(sql, [nome, idade, email, codigo], (err, result) => {
        if(err)
            return res.status(500).send("Erro ao atualizar aluno!");

        if(result.affectedRows == 0)
            return res.status(404).send("Nenhum aluno encontrado");

        // 200 = OK (201 é usado só quando algo novo é criado)
        res.status(200).send("Aluno atualizado com sucesso!");
    });
});

// EXCLUIR um aluno pelo código
server.delete("/alunos/:codigo", (req, res) => {
    const {codigo} = req.params;

    const sql = "DELETE FROM ALUNOS WHERE CODIGO = ?";

    bd.query(sql, [codigo], (err, result) => {
        if(err) return res.status(500).send("Erro ao excluir aluno");

        if(result.affectedRows == 0)
            return res.status(404).send("Nenhum aluno encontrado");

        res.status(200).send("Aluno removido com sucesso!");

    });
});

server.listen(3080, () => {
    console.log("Servidor rodando na porta 3080");
});
