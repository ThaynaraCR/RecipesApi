const mongoose = require("mongoose")

const credencials = ()=>{

    const dbName = process.env.MONGO_DB
    const dbPassword = process.env.MONGO_PASSWORD

    return `mongodb+srv://${dbName}:${dbPassword}@cluster0.t2ytn.mongodb.net/devpro`;
}

const dbConnection = mongoose.createConnection(credencials());
module.exports = dbConnection

