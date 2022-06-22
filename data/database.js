const mongoDb = require("mongodb");

const mongoClient = mongoDb.MongoClient;

let database;

async function conectToDatabase() {
  const client = await mongoClient.connect("mongodb://127.0.0.1:27017");
  database = client.db("online-shop");
}

function getDb() {
    if(!database){
        throw new Error('database connectin not established');
    }

    return database;
}


module.exports = {
    conectToDatabase: conectToDatabase,
    getDb: getDb
}