const mysql = require("mysql");
const fs = require('fs');

const connection = mysql.createConnection({
    host: "localhost",
    database:"sakila",
    user:"root",
    password:"password",
    insecureAuth : true,
    
})


connection.connect((error)=>{
if(error){
    throw error
}
    console.log("conectado papu")
})

let actors

connection.query("SELECT * FROM actor", function(error, results, fields){
if(error) throw error;

 actors = results.map(actor => [actor.last_name + " " + actor.first_name]);



fs.writeFile('helloworld.txt', actors, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

console.log(results[0])
})

connection.end()