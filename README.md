# 🟢 API REST com CRUD de Alunos — Node.js + Express + MySQL

**API REST completa** da disciplina de **Programação Web**: cadastra, lista, atualiza e exclui alunos em um banco **MySQL**, usando **Node.js** e **Express**.

---

## 🔗 Rotas (CRUD)

| Método | Rota | O que faz | Status de sucesso |
|---|---|---|---|
| `GET` | `/` | Testa se a API está no ar | 200 |
| `GET` | `/alunos` | **Lista** todos os alunos | 200 |
| `POST` | `/alunos` | **Cadastra** um aluno | 201 |
| `PUT` | `/alunos/:codigo` | **Atualiza** um aluno | 200 |
| `DELETE` | `/alunos/:codigo` | **Exclui** um aluno | 200 |

**Possíveis erros:** `400` (faltou nome, idade ou email), `404` (aluno não encontrado) e `500` (erro no banco).

### Exemplo de corpo (POST e PUT)

```json
{
  "nome": "Ana Souza",
  "idade": 20,
  "email": "ana@exemplo.com"
}
```

---

## 🧪 Testando a API

Use o **[Postman](https://www.postman.com/)**, o **Thunder Client** (extensão do VS Code) ou o `curl`:

```bash
# Listar
curl http://localhost:3080/alunos

# Cadastrar
curl -X POST http://localhost:3080/alunos -H "Content-Type: application/json" -d "{\"nome\":\"Ana\",\"idade\":20,\"email\":\"ana@exemplo.com\"}"

# Atualizar o aluno de código 1
curl -X PUT http://localhost:3080/alunos/1 -H "Content-Type: application/json" -d "{\"nome\":\"Ana Souza\",\"idade\":21,\"email\":\"ana@exemplo.com\"}"

# Excluir o aluno de código 1
curl -X DELETE http://localhost:3080/alunos/1
```

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **Node.js** | Ambiente para rodar JavaScript no servidor |
| **Express 5** | Rotas da API e leitura de JSON |
| **mysql2** | Conexão com o MySQL e consultas parametrizadas (`?`) |
| **MySQL** (XAMPP) | Banco de dados `FACULDADE` |

---

## 🗄️ Banco de dados

O `script.sql` cria o banco `FACULDADE` com a tabela `ALUNOS`:

| Coluna | Tipo | Descrição |
|---|---|---|
| `CODIGO` | INT AUTO_INCREMENT | Chave primária |
| `NOME` | VARCHAR(100) | Nome do aluno |
| `IDADE` | INT | Idade |
| `EMAIL` | VARCHAR(100) | E-mail |

---

## 🚀 Como executar

**Pré-requisitos:** [Node.js](https://nodejs.org/) e **MySQL** (pode ser o do [XAMPP](https://www.apachefriends.org/)).

1. **Crie o banco:** no **phpMyAdmin** (`http://localhost/phpmyadmin`), aba **SQL**, cole o `script.sql` e execute.
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie a API:**
   ```bash
   npm start
   ```
4. A API fica em **http://localhost:3080**.

---

## 🔒 Boas práticas aplicadas

- **Consultas parametrizadas** (`?`) contra *SQL Injection*
- **Validação** dos campos obrigatórios antes de gravar
- **Status HTTP corretos** (200, 201, 400, 404 e 500)

---

## 🎓 Informações acadêmicas

| | |
|---|---|
| **Instituição** | Fatec Taquaritinga |
| **Curso** | Análise e Desenvolvimento de Sistemas — 3º semestre |
| **Disciplina** | Programação Web |
| **Professor** | Danilo Antonio Sichieri |
| **Ano** | 2026 |

## 👤 Autor

**Juan Gabriel Pereira Augusto**
GitHub: [@JuanGabrielPereiraAugusto](https://github.com/JuanGabrielPereiraAugusto)
