const fs = require('fs');
const Database = require('./Database');

const config = {
    host: "localhost",
    database: "sakila",
    user: "root",
    password: "password",
    insecureAuth: true,
}

const db = new Database(config)

const sql_actor = "SELECT * FROM actor"
let actors

db.query(sql_actor).then(res => {
    actors = res.map(actor => actor.first_name + " " + actor.last_name)

    fs.writeFile('helloworld.txt', actors, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
})

db.close()