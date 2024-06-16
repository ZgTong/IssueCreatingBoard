const mongoose = require("mongoose");
const dbPath = "../db.json";
const path = require("path");
const fs = require("fs");
mongoose.Promise = global.Promise;

async function dbConnection() {
    try {
        const dataPath = path.join(__dirname, dbPath);
        const jsonData = fs.readFileSync(dataPath, 'utf-8');
        const res = await JSON.parse(jsonData);
        console.log("=> dataPath", res);
        return res;
    } catch (error) {
        console.log("=> ERROR: unable to make connection to mongodb", error);
        process.exit(1);
    }
};


async function saveData(data) {
    const dataPath = path.join(__dirname, dbPath);
    await fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = {
    dbConnection,
    saveData
};
