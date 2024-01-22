const { MongoClient } = require("mongodb");
// conexao com  URI
const uri = "mongodb://localhost:27017/testemongodb";
// Criando um novo MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

run();




//conexao com banco mongodb
module.exports = client;