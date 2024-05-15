const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const csv = require("csv-parser");
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const port = 3000; // Renamed variable
const app = express();
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/upload", upload.single("csvFile"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("Nenhum arquivo enviado.");
  }

  const results = [];

  fs.createReadStream(file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      insertSupabase(results)
        .then(() => {
          res.send("Arquivo enviado com sucesso.");
        })
        .catch((error) => {
          console.error(error); // Log the error for debugging
          res.status(500).send("Erro ao enviar arquivo.");
        });
    });
});

async function insertSupabase(results) {
  const inserts = results.map((user) => {
    return supabase
      .from("testeCSV")
      .insert([{ nome: user.nome, profissao: user.profissao }])
      .then((response) => {
        if (response.error) {
          throw response.error;
        }
      });
  });

  await Promise.all(inserts);
}

app.listen(port, () => {
  // Updated variable name here
  console.log(`Servidor rodando na porta ${port}`); // Improved logging message
});
