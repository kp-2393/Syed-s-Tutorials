const sqlite3 = require("sqlite3").verbose();

// open a connection

const db = new sqlite3.Database("./studentsList.db", sqlite3.OPEN_READWRITE, (error) => {
    if(error){
        console.log('unale to connect to DB')
    }else{
        console.log('DB connected')
    }
})

module.exports = db